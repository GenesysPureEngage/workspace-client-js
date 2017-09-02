/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UcsfindorcreatephonecallData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UcsfindorcreatephonecallData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.PhoneCallData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.UcsfindorcreatephonecallData);
  }
}(this, function(ApiClient, UcsfindorcreatephonecallData) {
  'use strict';




  /**
   * The PhoneCallData model module.
   * @module model/PhoneCallData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PhoneCallData</code>.
   * @alias module:model/PhoneCallData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PhoneCallData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneCallData} obj Optional instance to populate.
   * @return {module:model/PhoneCallData} The populated <code>PhoneCallData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = UcsfindorcreatephonecallData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UcsfindorcreatephonecallData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


