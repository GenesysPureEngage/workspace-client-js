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

  /**
   * 
   * @param {string} searchTerm
   * @param {number} limit
   */
  async search(searchTerm, limit) {
    this._log(`Searching targets with searchTerm [${searchTerm}]...`);
    const response = await this._api.get(searchTerm, {
      limit: limit || 10
    });

    return response.data.targets;
  }
  
  /**
   * @param {TargetInformation} target
   * @param {string} media
   */
  async addRecentTarget(target, media) {
      const resp = await this._api.addRecentTargetWithHttpInfo({
          data: {
              target: target,
              recentInformation: {
                  media: media
              }
          }          
      });
      
      return resp.response.body;
  }
  
  /**
   * @param {number} limit
   */
  async getRecentTargets(limit) {
      return this._api.getRecentTargets({
          limit: limit
      });
  }
  
  /**
   * 
   * @param {number} id
   * @param {string} type
   */
  async getTarget(id, type) {
      const resp = await this._api.getTargetWithHttpInfo(id, type);
      return resp.response.body;
  }
  
  /**
   * 
   * @param {number} id
   * @param {string} type
   */
  async deletePersonalFavorite(id, type) {
      return this._api.deletePersonalFavorite(id, type);
  }
  
  /**
   * 
   * @param {number} limit
   */
  async getPersonalFavorites(limit) {
      return this._api.getPersonalFavorites({
          limit: limit
      });
  }
  
  /**
   * 
   * @param {TargetInformation} target
   * @param {string} category
   */
  async savePersonalFavorite(target, category) {
      return this._api.savePersonalFavorite({
          data: {
              target: target,
              category: category
          }
      });
  }
  
  async ackRecentMissedCalls() {
      return this._api.ackRecentMissedCalls();
  }
}

module.exports = TargetsApi;
