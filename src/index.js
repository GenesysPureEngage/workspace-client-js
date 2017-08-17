const url = require('url');
const EventEmitter = require('events');

const auth = require('./internal/code-gen/auth-api');
const workspace = require('./internal/code-gen/workspace-api');
const cometDLib = require('cometd');
require('cometd-nodejs-client').adapt();

const VoiceApi = require('./internal/voice-api');
const TargetsApi = require('./internal/targets-api');

class WorkspaceApi extends EventEmitter {
  constructor(options) {
    super();
    this.apiKey = options.apiKey;
    this.baseUrl = options.baseUrl;
    this.username = options.username;
    this.password = options.password;
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;

    this._workspaceUrl = `${this.baseUrl}/workspace/v3`;
    this._debugEnabled = (options.debugEnabled === 'true')
    this.initialized = false;
  }

  _log(msg) {
    if (this._debugEnabled) {
      console.log(msg);
    }
  }

  async _initializeCometd() {
    return new Promise((resolve, reject) => {
      this._log('Initialzing cometd...');
      this._cometd = new cometDLib.CometD();
      
      const hostname = url.parse(this._workspaceUrl).hostname;
      const transport = this._cometd.findTransport('long-polling');
      transport.context = {
        cookieStore: {
          [hostname]: [this._sessionCookie]
        }
      };
      
      this._cometd.configure({
        url: this._workspaceUrl + '/notifications',
        requestHeaders: {
          'x-api-key': this.apiKey,
          'Cookie': this._sessionCookie
        }
      });
      
      this._log('Starting cometd handshake...');
      this._cometd.handshake(reply => {
        if(reply.successful) {
          this._log('Handshake successful');
          this._cometd.subscribe('/workspace/v3/initialization', msg => {
            if(msg.data.state === 'Complete') {
              resolve(msg.data.data.user);
              //CM: TODO: store config
            } else if (msg.data.state == 'Failed') {
              reject('Workspace initialization failed.');
            }
          }, result => {
            if(result.successful) {
              this._log('/workspace/v3/initialization subscription successful.');
            } else {
              reject('/workspace/v3/initialization subscription failed.');
            }
          });

          this._cometd.subscribe('/workspace/v3/voice', msg => {
            this.voice._onCometdMessage(msg);
          }, result => {
            if(result.successful) {
              this._log('/workspace/v3/voice subscription successful.');
            } else {
              this._log('/workspace/v3/voice subscription failed.');
            }
          });
        }
      });
    });
  }

  async initialize() {
    this._authClient = new auth.ApiClient();
    this._authClient.basePath = this.baseUrl;
    this._authClient.enableCookies = true;
    this._authClient.defaultHeaders = { 'x-api-key': this.apiKey };
    this._authApi = new auth.AuthenticationApi(this._authClient);

    this._workspaceClient = new workspace.ApiClient();
    this._workspaceClient.basePath = this._workspaceUrl;
    this._workspaceClient.enableCookies = true;
    this._workspaceClient.defaultHeaders = { 'x-api-key': this.apiKey };
    this._sessionApi = new workspace.SessionApi(this._workspaceClient);

    this.voice = new VoiceApi(this, this._workspaceClient, this._debugEnabled);
    this.targets = new TargetsApi(this._workspaceClient, this._debugEnabled);

    const opts = {
      authorization: 'Basic ' + new Buffer(`${this.clientId}:${this.clientSecret}`).toString('base64'),
      clientId: 'external_api_client',
      username: this.username,
      password: this.password
    };

    this._log('Getting access token...');
    let response = await this._authApi.retrieveTokenWithHttpInfo('password', 'scope', opts);
    if(!response.data || !response.data.access_token) {
      throw new Error('Cannot get access token');
    }

    this._accessToken = response.data.access_token;
    this._log('Access token is: ' + this._accessToken);

    this._log('Initializing workspace...');
    response = await this._sessionApi.initializeWorkspaceWithHttpInfo(
      { authorization : 'Bearer ' + this._accessToken});

    this._sessionCookie = response.response.header['set-cookie'].find(v => v.startsWith('WORKSPACE_SESSIONID'));
		this._workspaceClient.defaultHeaders['Cookie'] = this._sessionCookie;
    this._log('WORKSPACE_SESSIONID is: ' + this._sessionCookie);

    this.user = await this._initializeCometd();
    this.initialized = true;
    this._log('Initialization complete.');
  }

  async destroy() {
    if (this.initialized) {
      if (this._cometd) {
        this._log('Disconnecting cometd...');
        this._cometd.disconnect();
      }

      this._log('Logging out...');
      this._sessionApi.logout();

      this.initialized = false;
    }
  }

  async activateChannels(agentId, dn) {
    this._log(`Sending activate-channels with agentId [${agentId}] and dn [${dn}]...`);
    let data = { data: {} };

    if (agentId && dn) {
      data.data.agentId = agentId;
      data.data.dn = dn;
    } else if (this._user && this._user.agentId && this._user.defaultPlace) {
      data.data.agentId = this._user.agentId;
      data.data.placeName = this._user.defaultPlace;
    } else {
      throw new Error('agentId and dn are required if user does not have a default login and place.');
    }
									
    let response = await this._sessionApi.activateChannels(data);
    return response;
  }

  isDebugEnabled() {
    return this._debugEnabled;
  }

  setDebugEnabled(debugEnabled) {
    this._debugEnabled = debugEnabled;
    this.voice._debugEnabled = debugEnabled;
    this.targets._debugEnabled = debugEnabled;
  }
}

module.exports = WorkspaceApi;
