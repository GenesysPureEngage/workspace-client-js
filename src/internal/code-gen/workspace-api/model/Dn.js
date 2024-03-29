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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.Dn = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Dn model module.
   * @module model/Dn
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>Dn</code>.
   * @alias module:model/Dn
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Dn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dn} obj Optional instance to populate.
   * @return {module:model/Dn} The populated <code>Dn</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
      if (data.hasOwnProperty('agentState')) {
        obj['agentState'] = ApiClient.convertToType(data['agentState'], 'String');
      }
      if (data.hasOwnProperty('agentWorkMode')) {
        obj['agentWorkMode'] = ApiClient.convertToType(data['agentWorkMode'], 'String');
      }
    }
    return obj;
  }

  /**
   * The directory number (phone number).
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * The agent ID used to log in.
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * The current state. Valid values are `LoggedOut`, `LoggedIn`, `Ready`, or `NotReady`.
   * @member {String} agentState
   */
  exports.prototype['agentState'] = undefined;
  /**
   * The current workmode. This value can be either `AuxWork` or `AfterCallWork` if the agent's state is Not Ready, or `AutoIn` or `ManualIn` if the agent's state is Ready.
   * @member {String} agentWorkMode
   */
  exports.prototype['agentWorkMode'] = undefined;



  return exports;
}));


