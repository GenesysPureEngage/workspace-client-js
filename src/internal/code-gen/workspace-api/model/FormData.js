/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: v9.0.000.20.2204
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MediamediatypeinteractionsidadddocumentData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypeinteractionsidadddocumentData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.FormData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypeinteractionsidadddocumentData);
  }
}(this, function(ApiClient, MediamediatypeinteractionsidadddocumentData) {
  'use strict';




  /**
   * The FormData model module.
   * @module model/FormData
   * @version v9.0.000.20.2204
   */

  /**
   * Constructs a new <code>FormData</code>.
   * @alias module:model/FormData
   * @class
   * @param data {module:model/MediamediatypeinteractionsidadddocumentData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>FormData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormData} obj Optional instance to populate.
   * @return {module:model/FormData} The populated <code>FormData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypeinteractionsidadddocumentData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediamediatypeinteractionsidadddocumentData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


