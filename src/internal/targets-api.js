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
   * Search for targets by the specified search term.
   * @param {string} searchTerm The text to search for in targets.
   * @param {number} limit Specify the number of results to return. The default value is 50. (optional)
   * @return A list of targets that match the search term.
   */
  async search(searchTerm, limit) {
    this._log(`Searching targets with searchTerm [${searchTerm}]...`);
    const response = await this._api.get(searchTerm, {
      limit: limit || 10
    });

    return response.data.targets;
  }
  
  /**
   * Add a target that a user recently used.
   * @param {TargetInformation} target The target to add.
   * @param {string} media The media channel on which the target was used.
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
   * Get a user's recently used targets.
   * @param {number} limit Specify the number of results to return. The default value is 50. (optional)
   * @return {Promise}
   */
  async getRecentTargets(limit) {
      return this._api.getRecentTargets({
          limit: limit
      });
  }
  
  /**
   * Get a specific target by ID and type.
   * @param {number} id The ID for the target.
   * @param {string} type The type of target to retrieve. The possible values are AGENT, AGENT_GROUP, ACD_QUEUE, 
   * ROUTE_POINT, SKILL, and CUSTOM_CONTACT.
   * @return The specified target.
   */
  async getTarget(id, type) {
      const resp = await this._api.getTargetWithHttpInfo(id, type);
      return resp.response.body;
  }
  
  /**
   * Delete the target from the user's personal favorites.
   * @param {number} id The ID for the target.
   * @param {string} type The type of target to delete. The possible values are AGENT, AGENT_GROUP, ACD_QUEUE, 
   * ROUTE_POINT, SKILL, and CUSTOM_CONTACT.
   * @return {Promise}
   */
  async deletePersonalFavorite(id, type) {
      return this._api.deletePersonalFavorite(id, type);
  }
  
  /**
   * Return the user's personal favorites.
   * @param {number} limit Specify the number of results to return. The default value is 50. (optional)
   * @return {Promise}
   */
  async getPersonalFavorites(limit) {
      return this._api.getPersonalFavorites({
          limit: limit
      });
  }
  
  /**
   * Save a target to the user's personal favorites in the specified category.
   * @param {TargetInformation} target The target to save.
   * @param {string} category The user's personal favorites category.
   * @return {Promise}
   */
  async savePersonalFavorite(target, category) {
      return this._api.savePersonalFavorite({
          data: {
              target: target,
              category: category
          }
      });
  }
  
  /**
   * Acknowledge missed calls in the list of recent targets.
   * @return {Promise}
   */
  async ackRecentMissedCalls() {
      return this._api.ackRecentMissedCalls();
  }
}

module.exports = TargetsApi;
