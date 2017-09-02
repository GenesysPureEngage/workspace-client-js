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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UcsgetinteractioncontentData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsgetinteractioncontentData model module.
   * @module model/UcsgetinteractioncontentData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcsgetinteractioncontentData</code>.
   * @alias module:model/UcsgetinteractioncontentData
   * @class
   * @param interactionId {String} The id of the interaction
   */
  var exports = function(interactionId) {
    var _this = this;

    _this['interactionId'] = interactionId;
  };

  /**
   * Constructs a <code>UcsgetinteractioncontentData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsgetinteractioncontentData} obj Optional instance to populate.
   * @return {module:model/UcsgetinteractioncontentData} The populated <code>UcsgetinteractioncontentData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interactionId')) {
        obj['interactionId'] = ApiClient.convertToType(data['interactionId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the interaction
   * @member {String} interactionId
   */
  exports.prototype['interactionId'] = undefined;



  return exports;
}));


