/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.50.3037
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/StatisticValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StatisticValue'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SubscriptionSuccessResponseData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.StatisticValue);
  }
}(this, function(ApiClient, StatisticValue) {
  'use strict';




  /**
   * The SubscriptionSuccessResponseData model module.
   * @module model/SubscriptionSuccessResponseData
   * @version 9.0.000.50.3037
   */

  /**
   * Constructs a new <code>SubscriptionSuccessResponseData</code>.
   * @alias module:model/SubscriptionSuccessResponseData
   * @class
   * @param subscriptionId {String} The ID used to fetch statistics values from [/reporting/subscriptions/{subscriptionId}](/reference/workspace/Reporting/index.html#peek).
   * @param statistics {Array.<module:model/StatisticValue>} The list of all the subscribed statistics with the assigned ids.
   */
  var exports = function(subscriptionId, statistics) {
    var _this = this;

    _this['subscriptionId'] = subscriptionId;
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>SubscriptionSuccessResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionSuccessResponseData} obj Optional instance to populate.
   * @return {module:model/SubscriptionSuccessResponseData} The populated <code>SubscriptionSuccessResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionId')) {
        obj['subscriptionId'] = ApiClient.convertToType(data['subscriptionId'], 'String');
      }
      if (data.hasOwnProperty('statistics')) {
        obj['statistics'] = ApiClient.convertToType(data['statistics'], [StatisticValue]);
      }
    }
    return obj;
  }

  /**
   * The ID used to fetch statistics values from [/reporting/subscriptions/{subscriptionId}](/reference/workspace/Reporting/index.html#peek).
   * @member {String} subscriptionId
   */
  exports.prototype['subscriptionId'] = undefined;
  /**
   * The list of all the subscribed statistics with the assigned ids.
   * @member {Array.<module:model/StatisticValue>} statistics
   */
  exports.prototype['statistics'] = undefined;



  return exports;
}));


