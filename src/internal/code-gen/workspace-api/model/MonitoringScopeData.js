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
    define(['ApiClient', 'model/MonitoringScopeDataData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MonitoringScopeDataData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MonitoringScopeData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.MonitoringScopeDataData);
  }
}(this, function(ApiClient, MonitoringScopeDataData) {
  'use strict';




  /**
   * The MonitoringScopeData model module.
   * @module model/MonitoringScopeData
   * @version 9.0.000.50.3037
   */

  /**
   * Constructs a new <code>MonitoringScopeData</code>.
   * @alias module:model/MonitoringScopeData
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>MonitoringScopeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MonitoringScopeData} obj Optional instance to populate.
   * @return {module:model/MonitoringScopeData} The populated <code>MonitoringScopeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = MonitoringScopeDataData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/MonitoringScopeDataData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


