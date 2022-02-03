/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.97.4639
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
    define(['ApiClient', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SubscriptionsSuccessResponseData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Subscription);
  }
}(this, function(ApiClient, Subscription) {
  'use strict';




  /**
   * The SubscriptionsSuccessResponseData model module.
   * @module model/SubscriptionsSuccessResponseData
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>SubscriptionsSuccessResponseData</code>.
   * @alias module:model/SubscriptionsSuccessResponseData
   * @class
   * @param subscriptions {Array.<module:model/Subscription>} 
   */
  var exports = function(subscriptions) {
    var _this = this;

    _this['subscriptions'] = subscriptions;
  };

  /**
   * Constructs a <code>SubscriptionsSuccessResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionsSuccessResponseData} obj Optional instance to populate.
   * @return {module:model/SubscriptionsSuccessResponseData} The populated <code>SubscriptionsSuccessResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptions')) {
        obj['subscriptions'] = ApiClient.convertToType(data['subscriptions'], [Subscription]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Subscription>} subscriptions
   */
  exports.prototype['subscriptions'] = undefined;



  return exports;
}));


