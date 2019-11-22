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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.IxnReasonCode = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The IxnReasonCode model module.
   * @module model/IxnReasonCode
   * @version 9.0.000.64.3341
   */

  /**
   * Constructs a new <code>IxnReasonCode</code>.
   * A collection of key/value pairs.
   * @alias module:model/IxnReasonCode
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>IxnReasonCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IxnReasonCode} obj Optional instance to populate.
   * @return {module:model/IxnReasonCode} The populated <code>IxnReasonCode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reasonSystemName')) {
        obj['reasonSystemName'] = ApiClient.convertToType(data['reasonSystemName'], 'String');
      }
      if (data.hasOwnProperty('reasonDescription')) {
        obj['reasonDescription'] = ApiClient.convertToType(data['reasonDescription'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} reasonSystemName
   */
  exports.prototype['reasonSystemName'] = undefined;
  /**
   * @member {String} reasonDescription
   */
  exports.prototype['reasonDescription'] = undefined;
  /**
   * @member {Number} reason
   */
  exports.prototype['reason'] = undefined;



  return exports;
}));


