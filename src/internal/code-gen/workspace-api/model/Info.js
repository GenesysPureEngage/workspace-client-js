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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.Info = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Info model module.
   * @module model/Info
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>Info</code>.
   * @alias module:model/Info
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Info</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Info} obj Optional instance to populate.
   * @return {module:model/Info} The populated <code>Info</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('changeset')) {
        obj['changeset'] = ApiClient.convertToType(data['changeset'], 'String');
      }
    }
    return obj;
  }

  /**
   * server version
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * changeset
   * @member {String} changeset
   */
  exports.prototype['changeset'] = undefined;



  return exports;
}));


