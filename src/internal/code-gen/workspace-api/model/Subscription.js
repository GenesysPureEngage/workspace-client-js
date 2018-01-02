/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    root.WorkspaceApi.Subscription = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.StatisticValue);
  }
}(this, function(ApiClient, StatisticValue) {
  'use strict';




  /**
   * The Subscription model module.
   * @module model/Subscription
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Subscription</code>.
   * @alias module:model/Subscription
   * @class
   * @param subscriptionId {String} 
   * @param statistics {Array.<module:model/StatisticValue>} 
   */
  var exports = function(subscriptionId, statistics) {
    var _this = this;

    _this['subscriptionId'] = subscriptionId;
    _this['statistics'] = statistics;
  };

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
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
   * @member {String} subscriptionId
   */
  exports.prototype['subscriptionId'] = undefined;
  /**
   * @member {Array.<module:model/StatisticValue>} statistics
   */
  exports.prototype['statistics'] = undefined;



  return exports;
}));

