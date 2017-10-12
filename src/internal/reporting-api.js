const workspace = require('./code-gen/workspace-api');

class ReportingApi {
  constructor(workspaceClient, debugEnabled) {
    this._api = new workspace.ReportingApi(workspaceClient);
    this._debugEnabled = debugEnabled; 
  }

  _log(msg) {
    if (this._debugEnabled) {
      console.log(msg);
    }
  }

  async register(statistics) {
    const resp = await this._api.registerWithHttpInfo({
        data: {        
            statistics: statistics
        }
    });

    return resp.response.body;
  }
  
  async peek(subscriptionId) {
      const resp = await this._api.peekWithHttpInfo(subscriptionId);
      return resp.response.body;
  }
}

module.exports = ReportingApi;
