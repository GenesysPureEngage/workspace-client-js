/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.49.3020
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
    define(['ApiClient', 'model/CurrentSessionDataUserActiveSession', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CurrentSessionDataUserActiveSession'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CurrentSessionDataUser = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.CurrentSessionDataUserActiveSession, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, CurrentSessionDataUserActiveSession, Kvpair) {
  'use strict';




  /**
   * The CurrentSessionDataUser model module.
   * @module model/CurrentSessionDataUser
   * @version 9.0.000.49.3020
   */

  /**
   * Constructs a new <code>CurrentSessionDataUser</code>.
   * @alias module:model/CurrentSessionDataUser
   * @class
   * @param userName {String} The username.
   * @param employeeId {String} The unique employee ID.
   */
  var exports = function(userName, employeeId) {
    var _this = this;




    _this['userName'] = userName;
    _this['employeeId'] = employeeId;




  };

  /**
   * Constructs a <code>CurrentSessionDataUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentSessionDataUser} obj Optional instance to populate.
   * @return {module:model/CurrentSessionDataUser} The populated <code>CurrentSessionDataUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('dbid')) {
        obj['dbid'] = ApiClient.convertToType(data['dbid'], 'Number');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('employeeId')) {
        obj['employeeId'] = ApiClient.convertToType(data['employeeId'], 'String');
      }
      if (data.hasOwnProperty('defaultPlace')) {
        obj['defaultPlace'] = ApiClient.convertToType(data['defaultPlace'], 'String');
      }
      if (data.hasOwnProperty('agentLogin')) {
        obj['agentLogin'] = ApiClient.convertToType(data['agentLogin'], 'String');
      }
      if (data.hasOwnProperty('userProperties')) {
        obj['userProperties'] = ApiClient.convertToType(data['userProperties'], [Kvpair]);
      }
      if (data.hasOwnProperty('activeSession')) {
        obj['activeSession'] = CurrentSessionDataUserActiveSession.constructFromObject(data['activeSession']);
      }
    }
    return obj;
  }

  /**
   * A unique identifier for the user.
   * @member {Number} dbid
   */
  exports.prototype['dbid'] = undefined;
  /**
   * The user's first name.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * The user's last name.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The username.
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * The unique employee ID.
   * @member {String} employeeId
   */
  exports.prototype['employeeId'] = undefined;
  /**
   * The user's default place.
   * @member {String} defaultPlace
   */
  exports.prototype['defaultPlace'] = undefined;
  /**
   * The agent's login ID.
   * @member {String} agentLogin
   */
  exports.prototype['agentLogin'] = undefined;
  /**
   * @member {Array.<module:model/Kvpair>} userProperties
   */
  exports.prototype['userProperties'] = undefined;
  /**
   * @member {module:model/CurrentSessionDataUserActiveSession} activeSession
   */
  exports.prototype['activeSession'] = undefined;



  return exports;
}));


