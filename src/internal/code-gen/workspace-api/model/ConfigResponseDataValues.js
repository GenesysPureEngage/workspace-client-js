/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.50.3037
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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ConfigResponseDataValues = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The ConfigResponseDataValues model module.
   * @module model/ConfigResponseDataValues
   * @version 9.0.000.50.3037
   */

  /**
   * Constructs a new <code>ConfigResponseDataValues</code>.
   * @alias module:model/ConfigResponseDataValues
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ConfigResponseDataValues</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigResponseDataValues} obj Optional instance to populate.
   * @return {module:model/ConfigResponseDataValues} The populated <code>ConfigResponseDataValues</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('userProperties')) {
        obj['userProperties'] = ApiClient.convertToType(data['userProperties'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * @member {Array.<module:model/Kvpair>} userProperties
   */
  exports.prototype['userProperties'] = undefined;



  return exports;
}));


