/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.51.3082
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
    define(['ApiClient', 'model/TargetsResponseData', 'model/TargetsResponseStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TargetsResponseData'), require('./TargetsResponseStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.TargetsResponse = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.TargetsResponseData, root.WorkspaceApi.TargetsResponseStatus);
  }
}(this, function(ApiClient, TargetsResponseData, TargetsResponseStatus) {
  'use strict';




  /**
   * The TargetsResponse model module.
   * @module model/TargetsResponse
   * @version 9.0.000.51.3082
   */

  /**
   * Constructs a new <code>TargetsResponse</code>.
   * @alias module:model/TargetsResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TargetsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetsResponse} obj Optional instance to populate.
   * @return {module:model/TargetsResponse} The populated <code>TargetsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = TargetsResponseData.constructFromObject(data['data']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = TargetsResponseStatus.constructFromObject(data['status']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TargetsResponseData} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {module:model/TargetsResponseStatus} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


