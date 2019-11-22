/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.64.3341
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
    define(['ApiClient', 'model/ExchangeTokenResponseData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ExchangeTokenResponseData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ExchangeTokenResponse = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ExchangeTokenResponseData);
  }
}(this, function(ApiClient, ExchangeTokenResponseData) {
  'use strict';




  /**
   * The ExchangeTokenResponse model module.
   * @module model/ExchangeTokenResponse
   * @version 9.0.000.64.3341
   */

  /**
   * Constructs a new <code>ExchangeTokenResponse</code>.
   * @alias module:model/ExchangeTokenResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ExchangeTokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ExchangeTokenResponse} obj Optional instance to populate.
   * @return {module:model/ExchangeTokenResponse} The populated <code>ExchangeTokenResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ExchangeTokenResponseData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ExchangeTokenResponseData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


