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
  
  /**
   * Unsubscribe from the specified group of statistics.
   * @param {string} subscriptionId The unique ID of the subscription.
   * @return {Promise}
   */
  async unsubscribe(subscriptionId) {
      return this._api.unsubscribe({
          data: {
              subscriptionId: subscriptionId
          }
      });
  }

  /**
   * Subscribe to a group of statistics. The values are returned when you request them using `peek()`. 
   * @param {string} statistics The collection of statistic you want to include in your subscription.
   * @return The subscription ID and the values of the statistics for that subscription.
   */
  async subscribe(statistics) {
    const resp = await this._api.subscribeWithHttpInfo({
        data: {        
            statistics: statistics
        }
    });

    return resp.response.body;
  }
  
  /**
   * Get the statistics values for the specified subscription ID.
   * @param {string} subscriptionId The unique ID of the subscription.
   * @return The subscription ID and the values of the statistics for that subscription. 
   */
  async peek(subscriptionId) {
      const resp = await this._api.peekWithHttpInfo(subscriptionId);
      return resp.response.body;
  }

  setDebugEnabled(isEnabled){
    this._debugEnabled = !!isEnabled;
    return this;
  }
}

module.exports = ReportingApi;
