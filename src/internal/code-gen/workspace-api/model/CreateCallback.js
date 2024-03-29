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
    define(['ApiClient', 'model/CampaignStatus', 'model/CreateCallbackData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignStatus'), require('./CreateCallbackData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CreateCallback = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.CampaignStatus, root.WorkspaceApi.CreateCallbackData);
  }
}(this, function(ApiClient, CampaignStatus, CreateCallbackData) {
  'use strict';




  /**
   * The CreateCallback model module.
   * @module model/CreateCallback
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>CreateCallback</code>.
   * @alias module:model/CreateCallback
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreateCallback</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateCallback} obj Optional instance to populate.
   * @return {module:model/CreateCallback} The populated <code>CreateCallback</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = CampaignStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = CreateCallbackData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/CampaignStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/CreateCallbackData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


