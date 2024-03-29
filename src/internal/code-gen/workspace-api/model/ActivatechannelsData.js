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
    root.WorkspaceApi.ActivatechannelsData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ActivatechannelsData model module.
   * @module model/ActivatechannelsData
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>ActivatechannelsData</code>.
   * @alias module:model/ActivatechannelsData
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ActivatechannelsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivatechannelsData} obj Optional instance to populate.
   * @return {module:model/ActivatechannelsData} The populated <code>ActivatechannelsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
      if (data.hasOwnProperty('placeName')) {
        obj['placeName'] = ApiClient.convertToType(data['placeName'], 'String');
      }
      if (data.hasOwnProperty('dn')) {
        obj['dn'] = ApiClient.convertToType(data['dn'], 'String');
      }
      if (data.hasOwnProperty('queueName')) {
        obj['queueName'] = ApiClient.convertToType(data['queueName'], 'String');
      }
      if (data.hasOwnProperty('agentWorkMode')) {
        obj['agentWorkMode'] = ApiClient.convertToType(data['agentWorkMode'], 'String');
      }
      if (data.hasOwnProperty('dynamicPhoneNumber')) {
        obj['dynamicPhoneNumber'] = ApiClient.convertToType(data['dynamicPhoneNumber'], 'String');
      }
      if (data.hasOwnProperty('autoCompleteCall')) {
        obj['autoCompleteCall'] = ApiClient.convertToType(data['autoCompleteCall'], 'Boolean');
      }
      if (data.hasOwnProperty('channels')) {
        obj['channels'] = ApiClient.convertToType(data['channels'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The unique ID of the agent.
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * The name of the place to use for the agent. You must provide either the place name or DN.
   * @member {String} placeName
   */
  exports.prototype['placeName'] = undefined;
  /**
   * The DN (number) to use for the agent. You must provide either the place name or DN.
   * @member {String} dn
   */
  exports.prototype['dn'] = undefined;
  /**
   * The queue name.
   * @member {String} queueName
   */
  exports.prototype['queueName'] = undefined;
  /**
   * The workmode.
   * @member {module:model/ActivatechannelsData.AgentWorkModeEnum} agentWorkMode
   */
  exports.prototype['agentWorkMode'] = undefined;
  /**
   * An optional dynamic phone number to use for the agent.
   * @member {String} dynamicPhoneNumber
   */
  exports.prototype['dynamicPhoneNumber'] = undefined;
  /**
   * Specifies if calls should automatically be completed for the session. Defaults to true if not provided.
   * @member {Boolean} autoCompleteCall
   */
  exports.prototype['autoCompleteCall'] = undefined;
  /**
   * An array of strings that correspond to the channels you want to activate.
   * @member {Array.<String>} channels
   */
  exports.prototype['channels'] = undefined;


  /**
   * Allowed values for the <code>agentWorkMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AgentWorkModeEnum = {
    /**
     * value: "AutoIn"
     * @const
     */
    "AutoIn": "AutoIn",
    /**
     * value: "ManualIn"
     * @const
     */
    "ManualIn": "ManualIn"  };


  return exports;
}));


