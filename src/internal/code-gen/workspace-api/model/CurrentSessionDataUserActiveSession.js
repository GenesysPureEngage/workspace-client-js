/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Call', 'model/CurrentSessionDataUserActiveSessionDn'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Call'), require('./CurrentSessionDataUserActiveSessionDn'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CurrentSessionDataUserActiveSession = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Call, root.WorkspaceApi.CurrentSessionDataUserActiveSessionDn);
  }
}(this, function(ApiClient, Call, CurrentSessionDataUserActiveSessionDn) {
  'use strict';




  /**
   * The CurrentSessionDataUserActiveSession model module.
   * @module model/CurrentSessionDataUserActiveSession
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CurrentSessionDataUserActiveSession</code>.
   * @alias module:model/CurrentSessionDataUserActiveSession
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CurrentSessionDataUserActiveSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentSessionDataUserActiveSession} obj Optional instance to populate.
   * @return {module:model/CurrentSessionDataUserActiveSession} The populated <code>CurrentSessionDataUserActiveSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dn')) {
        obj['dn'] = CurrentSessionDataUserActiveSessionDn.constructFromObject(data['dn']);
      }
      if (data.hasOwnProperty('calls')) {
        obj['calls'] = ApiClient.convertToType(data['calls'], [Call]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CurrentSessionDataUserActiveSessionDn} dn
   */
  exports.prototype['dn'] = undefined;
  /**
   * An array containing any active calls.
   * @member {Array.<module:model/Call>} calls
   */
  exports.prototype['calls'] = undefined;



  return exports;
}));

