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
    define(['ApiClient', 'model/VoicereadyData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicereadyData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.RetrieveData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicereadyData);
  }
}(this, function(ApiClient, VoicereadyData) {
  'use strict';




  /**
   * The RetrieveData model module.
   * @module model/RetrieveData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>RetrieveData</code>.
   * @alias module:model/RetrieveData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RetrieveData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RetrieveData} obj Optional instance to populate.
   * @return {module:model/RetrieveData} The populated <code>RetrieveData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicereadyData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicereadyData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


