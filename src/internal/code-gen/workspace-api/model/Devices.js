/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.61.3296
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
    define(['ApiClient', 'model/CurrentSessionStatus', 'model/DevicesData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CurrentSessionStatus'), require('./DevicesData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.Devices = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.CurrentSessionStatus, root.WorkspaceApi.DevicesData);
  }
}(this, function(ApiClient, CurrentSessionStatus, DevicesData) {
  'use strict';




  /**
   * The Devices model module.
   * @module model/Devices
   * @version 9.0.000.61.3296
   */

  /**
   * Constructs a new <code>Devices</code>.
   * @alias module:model/Devices
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Devices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Devices} obj Optional instance to populate.
   * @return {module:model/Devices} The populated <code>Devices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = CurrentSessionStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = DevicesData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CurrentSessionStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/DevicesData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


