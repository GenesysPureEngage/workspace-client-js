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
    define(['ApiClient', 'model/VoicestartmonitoringData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicestartmonitoringData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.StartMonitoringData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.VoicestartmonitoringData);
  }
}(this, function(ApiClient, VoicestartmonitoringData) {
  'use strict';




  /**
   * The StartMonitoringData model module.
   * @module model/StartMonitoringData
   * @version v9.0.000.20.2204
   */

  /**
   * Constructs a new <code>StartMonitoringData</code>.
   * @alias module:model/StartMonitoringData
   * @class
   * @param data {module:model/VoicestartmonitoringData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>StartMonitoringData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StartMonitoringData} obj Optional instance to populate.
   * @return {module:model/StartMonitoringData} The populated <code>StartMonitoringData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicestartmonitoringData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VoicestartmonitoringData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


