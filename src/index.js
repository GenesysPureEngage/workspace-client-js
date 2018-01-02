const url = require('url');
const EventEmitter = require('events');

const workspace = require('./internal/code-gen/workspace-api');
const cometDLib = require('cometd');
require('./cometd-nodejs-client').adapt();
const CookieJar = require('cookiejar').CookieJar;

const VoiceApi = require('./internal/voice-api');
const TargetsApi = require('./internal/targets-api');
const ReportingApi = require('./internal/reporting-api');

class WorkspaceApi extends EventEmitter {
  /**
   * Constructor 
   * @param {String} apiKey The API key to be included in HTTP requests.
   * @param {String} baseUrl The base URL of the PureEngage API.
   * @param {String} debugEnabled Set to 'true' to enable debugging or 'false' to disable.
   */
  constructor(apiKey, baseUrl, debugEnabled) {
    super();
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this._workspaceUrl = `${this.baseUrl}/workspace/v3`;
    this._debugEnabled = (String(debugEnabled) === 'true');
    this.initialized = false;
  }

  _log(msg) {
    if (this._debugEnabled) {
      console.log(msg);
    }
  }

  async _initializeCometd() {
    return new Promise((resolve, reject) => {
      this._log('Initializing cometd...');
      this._cometd = new cometDLib.CometD();
      
      const hostname = url.parse(this._workspaceUrl).hostname;
      const transport = this._cometd.findTransport('long-polling');
      transport.context = {
        cookieJar: this.cookieJar
      };
      
      this._cometd.configure({
        url: this._workspaceUrl + '/notifications',
        requestHeaders: {
          'x-api-key': this.apiKey,
        }
      });
      
      this._log('Starting cometd handshake...');
      this._cometd.handshake(reply => {
        if(reply.successful) {
          this._log('Handshake successful');
          this._cometd.subscribe('/workspace/v3/initialization', msg => {
            if(msg.data.state === 'Complete') {
              resolve(msg.data.data);
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

  /**
   * Initializes the API using either an authorization code and redirect URI or an access token. Genesys
   * recommends using the Authorization Code Grant flow, in which case you'll need to use the code and 
   * redirect URI. If you use the Resource Owner Password Credentials Grant, you'll need to use the 
   * access token.
   * @param {String} code The authorization code you received during authentication if you followed the 
   * Authorization Code Grant flow.
   * @param {String} redirectUri The redirect URI you used during authentication if you followed the 
   * Authorization Code Grant flow. Since this is not sent by the UI, it needs to match the redirectUri 
   * that you sent when using the Authentication API to get the authCode.
   * @param {String} token The access token you received during authentication if you followed the 
   * Resource Owner Password Credentials Grant flow.
   */
  async initialize({ code, redirectUri, token}) {
    this._workspaceClient = new workspace.ApiClient();
    this._workspaceClient.basePath = this._workspaceUrl;
    this._workspaceClient.enableCookies = true;
	this.cookieJar = this._workspaceClient.agent.jar;
    if (this.apiKey) {
      this._workspaceClient.defaultHeaders = { 'x-api-key': this.apiKey };
    }
    this._sessionApi = new workspace.SessionApi(this._workspaceClient);

    this.voice = new VoiceApi(this, this._workspaceClient, this._debugEnabled);
    this.targets = new TargetsApi(this._workspaceClient, this._debugEnabled);
	this.reporting = new ReportingApi(this._workspaceClient, this._debugEnabled);

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
    this.cookieJar.setCookie(this._sessionCookie);
    this._log('WORKSPACE_SESSIONID is: ' + this._sessionCookie);

    let data = await this._initializeCometd();
    this.user = data.user;
    this.configuration = data.configuration;
    
    this.initialized = true;
    this._log('Initialization complete.');
  }

  /**
   * Logout the agent and cleanup resources.
   */
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

  /**
   * Initializes the voice channel for the specified agent and DN. 
   * @param {String} agentId The ID of the agent to be used for login.
   * @param {String} dn The DN to be used for login.
   */
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
