require('./cometd-nodejs-client').adapt();
const CometDLib = require('cometd');
const workspace = require('./internal/code-gen/workspace-api');
const EventEmitter = require('events');
const VoiceApi = require('./internal/voice-api');
const TargetsApi = require('./internal/targets-api');
const ReportingApi = require('./internal/reporting-api');
const ChatApi = require('./internal/chat-api');
const MediaApi = require('./internal/media-api');

class WorkspaceApi extends EventEmitter {
    /**
     * Create a new WorkspaceApi object.
     * @param {String} apiKey The API key used to access the Workspace API.
     * @param {String} baseUrl The URL of the PureEngage Cloud API.
     * @param {String} debugEnabled Set to `true` to enable debugging.
     */
    constructor(apiKey, baseUrl, debugEnabled) {
        super();
        this.apiKey = apiKey;
        this.baseUrl = baseUrl;
        this._workspaceUrl = `${this.baseUrl}/workspace/v3`;
        this._debugEnabled = (String(debugEnabled) === 'true');
        this._initialized = false;
    }


    _log(msg) {
        if (this._debugEnabled) {
            console.log(msg);
        }
    }

    async _initializeCometd() {
        this._log('Initializing cometd...');
        this._cometd = new CometDLib.CometD();
        const transport = this._cometd.findTransport('long-polling');
        transport.context = {cookieJar: this.cookieJar};

        let cometdParams = {
            url: this._workspaceUrl + '/notifications'
        };

        if (this.apiKey) {
            cometdParams.requestHeaders = {
                'x-api-key': this.apiKey
            }
        }

        this._cometd.configure(cometdParams);

        this._log('Starting cometd handshake...');
        await this._initCometDHandshake();
        this._log('Handshake successful');
        const result = await this._initializeWorkspaceSubscription();

        // Voice channel subscription
        this._cometd.subscribe(
            '/workspace/v3/voice',
            msg => {
                this.voice._onCometdMessage(msg)
            },
            result => {
                const status = result.successful
                    ? 'successful'
                    : 'failed';
                this._log(`/workspace/v3/voice subscription ${status}.`);
            }
        );

        // Media channel subscription
        this._cometd.subscribe(
            '/workspace/v3/media',
            msg => {
                this.media._onCometdMessage(msg)
            },
            result => {
                const status = result.successful
                    ? 'successful'
                    : 'failed';
                this._log(`/workspace/v3/media subscription ${status}.`);
            }
        );

        // Chat channel subscription
        this._cometd.subscribe(
            '/workspace/v3/media/chat',
            msg => {
                this.chat._onCometdMessage(msg)
            },
            result => {
                const status = result.successful
                    ? 'successful'
                    : 'failed';
                this._log(`/workspace/v3/media/chat subscription ${status}.`);
            }
        );

        return result;
    }

    async _initCometDHandshake() {
        return await new Promise((resolve, reject) => {
            this._cometd.handshake(reply => {
                reply.successful
                    ? resolve(reply)
                    : reject(reply)
            })
        });
    }

    async _initializeWorkspaceSubscription() {
        return await new Promise((resolve, reject) => {
            const _handleMessage = ({data}) => {
                switch (data.state) {
                    case 'Complete':
                        resolve(data.data);
                        //CM: TODO: store config
                        break;
                    case 'Failed':
                        reject('Workspace initialization failed.');
                        break;
                    default:
                    // Skip 'NotStarted' or 'Executing' states
                }
            };

            this._cometd.subscribe(
                '/workspace/v3/initialization',
                _handleMessage,
                subscription => {
                    if (subscription.successful) return this._log('/workspace/v3/initialization subscription successful.');
                    reject('/workspace/v3/initialization subscription failed.');
                }
            );
        });
    }

    // Patch nodejs http module to show requests body and headers
    _patchHttpHandler() {
        if (this._debugEnabled) {
            process.env['FORCE_COLOR'] = true;

            const http = require('http');
            const patch = require('monkeypatch');
            const chalk = require('chalk');
            const util = require('util');

            patch(http, 'request', (requestUnpatched, options, cb) => {
                const req = requestUnpatched(options, cb);

                // Patch request.end function
                patch(req, 'end', (endUnpatched, data) => {
                    this._log(chalk.red(`${req.method}`) + chalk.blue(` ${req.path}`));
                    const headers = req.getHeaders();
                    if (headers)
                        this._log(chalk.green("HEADERS: ") + chalk.green(util.inspect(headers, {depth: 5})));
                    if (data)
                        this._log(chalk.gray(util.inspect(data, {depth: 5})));
                    if (req.output)
                        this._log(chalk.gray(util.inspect(req.output, {depth: 5})));


                    return endUnpatched(data);
                });

                // Patch response data function
                req.on('response', resp => {
                    const headers = resp ? resp.headers : {};

                    resp.on('data', data => {
                        this._log(chalk.red("RESPONSE") + chalk.blue(` ${req.path}`));
                        if (headers)
                            this._log(chalk.green("HEADERS: ") + chalk.green(util.inspect(headers, {depth: 5})));

                        if (data instanceof Buffer) {
                            this._log(chalk.gray(util.inspect(data.toString('utf8'), {depth: 5})));
                        } else {
                            this._log(chalk.gray(util.inspect(data, {depth: 5})));
                        }
                    });
                });

                return req;
            });
        }
    }

    _patchSecureCookieFlag(sessionCookie) {
        // Patch "Secure" cookie flag
        if (sessionCookie && sessionCookie.toLowerCase().indexOf('secure') !== -1) {
            let cookieFlags = sessionCookie.split(';');
            cookieFlags.forEach((flag, flagIndex) => {
                if (flag.toLowerCase().indexOf('secure') !== -1) {
                    cookieFlags[flagIndex] = '';
                }
            });
            sessionCookie = cookieFlags.filter(Boolean).join(';');
        }

        this.cookieJar.setCookie(sessionCookie);
    }

    /**
     * Initialize the API using either an authorization code and redirect URI or an access token. The authorization code comes from using the
     * Authorization Code Grant flow to authenticate with the Authentication API.
     * @param {String} code The authorization code you received during authentication.
     * @param {String} redirectUri The redirect URI you used during authentication. This needs to match the `redirectUri` that you sent when using the Authentication API to get the authorization code.
     * @param {String} token The access token retrieved from the Authentication API.
     */
    async initialize({code, redirectUri, token}) {
        // Install http debug output handler if debug output enabled
        this._patchHttpHandler();

        this._workspaceClient = new workspace.ApiClient();
        this._workspaceClient.basePath = this._workspaceUrl;
        this._workspaceClient.enableCookies = true;
        this.cookieJar = this._workspaceClient.agent.jar;
        if (this.apiKey) {
            this._workspaceClient.defaultHeaders = {'x-api-key': this.apiKey};
        }
        this._sessionApi = new workspace.SessionApi(this._workspaceClient);
        this.voice = new VoiceApi(this, this._workspaceClient, this._debugEnabled);
        this.targets = new TargetsApi(this._workspaceClient, this._debugEnabled);
        this.reporting = new ReportingApi(this._workspaceClient, this._debugEnabled);
        this.chat = new ChatApi(this._workspaceClient, this._debugEnabled);
        this.media = new MediaApi(this._workspaceClient, this._debugEnabled);

        let options = {};

        if (code) {
            options.code = code;
            options.redirectUri = redirectUri;
        } else if (token) {
            options.authorization = 'Bearer ' + token;
        }

        this._log('Initializing workspace...');
        let response = await this._sessionApi.initializeWorkspaceWithHttpInfo(options);

        this._sessionCookie = response.response.header['set-cookie'].find(v => v.startsWith('WORKSPACE_SESSIONID'));
        this._patchSecureCookieFlag(this._sessionCookie);
        this._log('WORKSPACE_SESSIONID is: ' + this._sessionCookie);

        let data = await this._initializeCometd();
        this.user = data.user;
        this.configuration = data.configuration;

        this._log('Initialization complete.');
        this._initialized = true;
    }

    get agent() {
        return this._workspaceClient;
    }

    /**
     * End the current agent's session. This request logs out the agent on all activated channels, ends the HTTP session,
     * and cleans up related resources. After you end the session, you'll need to make a login request before making any
     * new calls to the API.
     */
    async destroy() {
        if (this._initialized) {
            if (this._cometd) {
                this._log('Disconnecting cometd...');
                this._cometd.disconnect();
            }

            this._log('Logging out...');
            await this._sessionApi.logout();

            this._initialized = false;
        }
    }

    /**
     * Activate the voice channel using the provided resources. If the channel is successfully activated,
     * Workspace sends additional information about the state of active resources (DNs, channels) via events. The
     * resources you provide are associated with the agent for the duration of the session.
     * @param {String} agentId The unique ID of the agent.
     * @param {String} dn The DN to be used for login. Provide either dn or placeName
     * @param {String} placeName The place to be used for login. Provide either dn or placeName
     */
    async activateChannels(agentId, dn, placeName) {
        let data = {data: {}};

        if (agentId) {
            data.data.agentId = agentId;
        } else if (this.user && this.user.agentLogin) {
            data.data.agentId = this.user.agentLogin;
        } else if (this.user && this.user.employeeId) {
            data.data.agentId = this.user.employeeId;
        } else {
            throw new Error('agentId was not provided and no default login could be found.');
        }

        if (dn) {
            data.data.dn = dn;
        } else if (placeName) {
            data.data.placeName = placeName;
        } else if (this.user && this.user.defaultPlace) {
            data.data.placeName = this.user.defaultPlace;
        } else {
            throw new Error('No dn or placeName was provided and no default could be found.');
        }

        this._log(`Sending activate-channels with: ${JSON.stringify(data)}`);
        return await this._sessionApi.activateChannels(data);
    }

    isDebugEnabled() {
        return this._debugEnabled;
    }

    setDebugEnabled(debugEnabled) {
        this._debugEnabled = !!debugEnabled;
        this.voice.setDebugEnabled(!!debugEnabled);
        this.targets.setDebugEnabled(!!debugEnabled);
        return this;
    }
}

module.exports = WorkspaceApi;

