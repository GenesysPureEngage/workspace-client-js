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
    define(['ApiClient', 'model/CurrentSessionData', 'model/CurrentSessionStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CurrentSessionData'), require('./CurrentSessionStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CurrentSession = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.CurrentSessionData, root.WorkspaceApi.CurrentSessionStatus);
  }
}(this, function(ApiClient, CurrentSessionData, CurrentSessionStatus) {
  'use strict';




  /**
   * The CurrentSession model module.
   * @module model/CurrentSession
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>CurrentSession</code>.
   * @alias module:model/CurrentSession
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CurrentSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentSession} obj Optional instance to populate.
   * @return {module:model/CurrentSession} The populated <code>CurrentSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = CurrentSessionStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = CurrentSessionData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CurrentSessionStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/CurrentSessionData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


