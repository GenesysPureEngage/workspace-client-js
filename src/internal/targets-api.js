const workspace = require('./code-gen/workspace-api');

class TargetsApi {
  constructor(workspaceClient, debugEnabled) {
    this._api = new workspace.TargetsApi(workspaceClient);
    this._debugEnabled = debugEnabled; 
  }

  _log(msg) {
    if (this._debugEnabled) {
      console.log(msg);
    }
  }

  async search(searchTerm, limit) {
    this._log(`Searching targets with searchTerm [${searchTerm}]...`);
    const response = await this._api.get(searchTerm, {
      limit: limit || 10
    });

    return response.data.targets;
  }
}

module.exports = TargetsApi;
