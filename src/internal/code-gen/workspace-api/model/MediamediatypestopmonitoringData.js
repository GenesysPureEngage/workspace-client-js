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
    root.WorkspaceApi.MediamediatypestopmonitoringData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypestopmonitoringData model module.
   * @module model/MediamediatypestopmonitoringData
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>MediamediatypestopmonitoringData</code>.
   * @alias module:model/MediamediatypestopmonitoringData
   * @class
   * @param agentId {String} The unique ID of the agent to stop monitoring.
   */
  var exports = function(agentId) {
    var _this = this;

    _this['agentId'] = agentId;
  };

  /**
   * Constructs a <code>MediamediatypestopmonitoringData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypestopmonitoringData} obj Optional instance to populate.
   * @return {module:model/MediamediatypestopmonitoringData} The populated <code>MediamediatypestopmonitoringData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('agentId')) {
        obj['agentId'] = ApiClient.convertToType(data['agentId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The unique ID of the agent to stop monitoring.
   * @member {String} agentId
   */
  exports.prototype['agentId'] = undefined;



  return exports;
}));


