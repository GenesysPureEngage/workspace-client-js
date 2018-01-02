/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/WorkbinsworkbinIdsubscribeData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WorkbinsworkbinIdsubscribeData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SubscribeToWorkbinNotificationsData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.WorkbinsworkbinIdsubscribeData);
  }
}(this, function(ApiClient, WorkbinsworkbinIdsubscribeData) {
  'use strict';




  /**
   * The SubscribeToWorkbinNotificationsData model module.
   * @module model/SubscribeToWorkbinNotificationsData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>SubscribeToWorkbinNotificationsData</code>.
   * @alias module:model/SubscribeToWorkbinNotificationsData
   * @class
   * @param data {module:model/WorkbinsworkbinIdsubscribeData} 
   */
  var exports = function(data) {
    var _this = this;

    _this['data'] = data;
  };

  /**
   * Constructs a <code>SubscribeToWorkbinNotificationsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscribeToWorkbinNotificationsData} obj Optional instance to populate.
   * @return {module:model/SubscribeToWorkbinNotificationsData} The populated <code>SubscribeToWorkbinNotificationsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = WorkbinsworkbinIdsubscribeData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/WorkbinsworkbinIdsubscribeData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


