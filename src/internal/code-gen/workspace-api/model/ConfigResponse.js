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
    define(['ApiClient', 'model/ConfigResponseData', 'model/TargetsResponseStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConfigResponseData'), require('./TargetsResponseStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ConfigResponse = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ConfigResponseData, root.WorkspaceApi.TargetsResponseStatus);
  }
}(this, function(ApiClient, ConfigResponseData, TargetsResponseStatus) {
  'use strict';




  /**
   * The ConfigResponse model module.
   * @module model/ConfigResponse
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>ConfigResponse</code>.
   * @alias module:model/ConfigResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ConfigResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfigResponse} obj Optional instance to populate.
   * @return {module:model/ConfigResponse} The populated <code>ConfigResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ConfigResponseData.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = TargetsResponseStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ConfigResponseData} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/TargetsResponseStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


