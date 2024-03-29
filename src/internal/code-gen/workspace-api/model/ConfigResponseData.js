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
    define(['ApiClient', 'model/ConfigResponseDataActionCodes', 'model/ConfigResponseDataBusinessAttributes', 'model/ConfigResponseDataTransactions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigResponseDataActionCodes'), require('./ConfigResponseDataBusinessAttributes'), require('./ConfigResponseDataTransactions'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ConfigResponseData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ConfigResponseDataActionCodes, root.WorkspaceApi.ConfigResponseDataBusinessAttributes, root.WorkspaceApi.ConfigResponseDataTransactions);
  }
}(this, function(ApiClient, ConfigResponseDataActionCodes, ConfigResponseDataBusinessAttributes, ConfigResponseDataTransactions) {
  'use strict';




  /**
   * The ConfigResponseData model module.
   * @module model/ConfigResponseData
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>ConfigResponseData</code>.
   * @alias module:model/ConfigResponseData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ConfigResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigResponseData} obj Optional instance to populate.
   * @return {module:model/ConfigResponseData} The populated <code>ConfigResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionCodes')) {
        obj['actionCodes'] = ApiClient.convertToType(data['actionCodes'], [ConfigResponseDataActionCodes]);
      }
      if (data.hasOwnProperty('transactions')) {
        obj['transactions'] = ApiClient.convertToType(data['transactions'], [ConfigResponseDataTransactions]);
      }
      if (data.hasOwnProperty('businessAttributes')) {
        obj['businessAttributes'] = ApiClient.convertToType(data['businessAttributes'], [ConfigResponseDataBusinessAttributes]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ConfigResponseDataActionCodes>} actionCodes
   */
  exports.prototype['actionCodes'] = undefined;
  /**
   * @member {Array.<module:model/ConfigResponseDataTransactions>} transactions
   */
  exports.prototype['transactions'] = undefined;
  /**
   * @member {Array.<module:model/ConfigResponseDataBusinessAttributes>} businessAttributes
   */
  exports.prototype['businessAttributes'] = undefined;



  return exports;
}));


