/**
 * Workspace API
 * Application API used by Workspace Web Edition
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
    root.WorkspaceApi.UcssetcallnoteData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcssetcallnoteData model module.
   * @module model/UcssetcallnoteData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcssetcallnoteData</code>.
   * @alias module:model/UcssetcallnoteData
   * @class
   * @param interactionId {String} The id of the interaction
   * @param note {String} The note to be set
   */
  var exports = function(interactionId, note) {
    var _this = this;

    _this['interactionId'] = interactionId;
    _this['note'] = note;
  };

  /**
   * Constructs a <code>UcssetcallnoteData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcssetcallnoteData} obj Optional instance to populate.
   * @return {module:model/UcssetcallnoteData} The populated <code>UcssetcallnoteData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('interactionId')) {
        obj['interactionId'] = ApiClient.convertToType(data['interactionId'], 'String');
      }
      if (data.hasOwnProperty('note')) {
        obj['note'] = ApiClient.convertToType(data['note'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the interaction
   * @member {String} interactionId
   */
  exports.prototype['interactionId'] = undefined;
  /**
   * The note to be set
   * @member {String} note
   */
  exports.prototype['note'] = undefined;



  return exports;
}));


