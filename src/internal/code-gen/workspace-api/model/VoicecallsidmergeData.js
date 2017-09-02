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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.VoicecallsidmergeData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The VoicecallsidmergeData model module.
   * @module model/VoicecallsidmergeData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>VoicecallsidmergeData</code>.
   * @alias module:model/VoicecallsidmergeData
   * @class
   * @param otherConnId {String} Connection id of the other call to merge with
   */
  var exports = function(otherConnId) {
    var _this = this;

    _this['otherConnId'] = otherConnId;


  };

  /**
   * Constructs a <code>VoicecallsidmergeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoicecallsidmergeData} obj Optional instance to populate.
   * @return {module:model/VoicecallsidmergeData} The populated <code>VoicecallsidmergeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('otherConnId')) {
        obj['otherConnId'] = ApiClient.convertToType(data['otherConnId'], 'String');
      }
      if (data.hasOwnProperty('reasons')) {
        obj['reasons'] = ApiClient.convertToType(data['reasons'], [Kvpair]);
      }
      if (data.hasOwnProperty('extensions')) {
        obj['extensions'] = ApiClient.convertToType(data['extensions'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * Connection id of the other call to merge with
   * @member {String} otherConnId
   */
  exports.prototype['otherConnId'] = undefined;
  /**
   * A key/value pairs list of a data structure that provides additional information associated with this action.
   * @member {Array.<module:model/Kvpair>} reasons
   */
  exports.prototype['reasons'] = undefined;
  /**
   * A key/value pairs list of additional data.
   * @member {Array.<module:model/Kvpair>} extensions
   */
  exports.prototype['extensions'] = undefined;



  return exports;
}));


