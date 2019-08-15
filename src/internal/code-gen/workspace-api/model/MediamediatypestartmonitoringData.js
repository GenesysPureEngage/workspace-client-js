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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypestartmonitoringData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypestartmonitoringData model module.
   * @module model/MediamediatypestartmonitoringData
   * @version 9.0.000.51.3082
   */

  /**
   * Constructs a new <code>MediamediatypestartmonitoringData</code>.
   * @alias module:model/MediamediatypestartmonitoringData
   * @class
   * @param agentId {String} The unique ID of the agent to monitor.
   * @param monitoringMode {module:model/MediamediatypestartmonitoringData.MonitoringModeEnum} The monitoring mode.
   * @param monitoringNextInteractionType {module:model/MediamediatypestartmonitoringData.MonitoringNextInteractionTypeEnum} The monitoring interaction type.
   */
  var exports = function(agentId, monitoringMode, monitoringNextInteractionType) {
    var _this = this;

    _this['agentId'] = agentId;
    _this['monitoringMode'] = monitoringMode;
    _this['monitoringNextInteractionType'] = monitoringNextInteractionType;
  };

  /**
   * Constructs a <code>MediamediatypestartmonitoringData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypestartmonitoringData} obj Optional instance to populate.
   * @return {module:model/MediamediatypestartmonitoringData} The populated <code>MediamediatypestartmonitoringData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
      if (data.hasOwnProperty('monitoringMode')) {
        obj['monitoringMode'] = ApiClient.convertToType(data['monitoringMode'], 'String');
      }
      if (data.hasOwnProperty('monitoringNextInteractionType')) {
        obj['monitoringNextInteractionType'] = ApiClient.convertToType(data['monitoringNextInteractionType'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique ID of the agent to monitor.
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;
  /**
   * The monitoring mode.
   * @member {module:model/MediamediatypestartmonitoringData.MonitoringModeEnum} monitoringMode
   */
  exports.prototype['monitoringMode'] = undefined;
  /**
   * The monitoring interaction type.
   * @member {module:model/MediamediatypestartmonitoringData.MonitoringNextInteractionTypeEnum} monitoringNextInteractionType
   */
  exports.prototype['monitoringNextInteractionType'] = undefined;


  /**
   * Allowed values for the <code>monitoringMode</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MonitoringModeEnum = {
    /**
     * value: "Monitor"
     * @const
     */
    "Monitor": "Monitor",
    /**
     * value: "Coach"
     * @const
     */
    "Coach": "Coach",
    /**
     * value: "Bargein"
     * @const
     */
    "Bargein": "Bargein"  };

  /**
   * Allowed values for the <code>monitoringNextInteractionType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MonitoringNextInteractionTypeEnum = {
    /**
     * value: "NextInteraction"
     * @const
     */
    "NextInteraction": "NextInteraction",
    /**
     * value: "AllInteractions"
     * @const
     */
    "AllInteractions": "AllInteractions"  };


  return exports;
}));


