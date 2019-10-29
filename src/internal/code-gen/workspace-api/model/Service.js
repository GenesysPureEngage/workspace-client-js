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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.Service = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Service model module.
   * @module model/Service
   * @version 9.0.000.61.3296
   */

  /**
   * Constructs a new <code>Service</code>.
   * @alias module:model/Service
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Service} obj Optional instance to populate.
   * @return {module:model/Service} The populated <code>Service</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('serviceName')) {
        obj['serviceName'] = ApiClient.convertToType(data['serviceName'], 'String');
      }
      if (data.hasOwnProperty('serviceState')) {
        obj['serviceState'] = ApiClient.convertToType(data['serviceState'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the service.
   * @member {module:model/Service.ServiceNameEnum} serviceName
   */
  exports.prototype['serviceName'] = undefined;
  /**
   * The state of the service - AVAILABLE or UNAVAILABLE
   * @member {module:model/Service.ServiceStateEnum} serviceState
   */
  exports.prototype['serviceState'] = undefined;


  /**
   * Allowed values for the <code>serviceName</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ServiceNameEnum = {
    /**
     * value: "VOICE"
     * @const
     */
    "VOICE": "VOICE",
    /**
     * value: "STATS"
     * @const
     */
    "STATS": "STATS",
    /**
     * value: "IXN"
     * @const
     */
    "IXN": "IXN",
    /**
     * value: "UCS"
     * @const
     */
    "UCS": "UCS"  };

  /**
   * Allowed values for the <code>serviceState</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ServiceStateEnum = {
    /**
     * value: "AVAILABLE"
     * @const
     */
    "AVAILABLE": "AVAILABLE",
    /**
     * value: "UNAVAILABLE"
     * @const
     */
    "UNAVAILABLE": "UNAVAILABLE"  };


  return exports;
}));


