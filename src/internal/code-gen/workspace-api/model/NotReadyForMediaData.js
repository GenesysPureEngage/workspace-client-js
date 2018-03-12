/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
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
    define(['ApiClient', 'model/MediamediatypenotreadyData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediamediatypenotreadyData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.NotReadyForMediaData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MediamediatypenotreadyData);
  }
}(this, function(ApiClient, MediamediatypenotreadyData) {
  'use strict';




  /**
   * The NotReadyForMediaData model module.
   * @module model/NotReadyForMediaData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>NotReadyForMediaData</code>.
   * @alias module:model/NotReadyForMediaData
   * @class
   * @param data {module:model/MediamediatypenotreadyData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>NotReadyForMediaData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NotReadyForMediaData} obj Optional instance to populate.
   * @return {module:model/NotReadyForMediaData} The populated <code>NotReadyForMediaData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MediamediatypenotreadyData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MediamediatypenotreadyData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


