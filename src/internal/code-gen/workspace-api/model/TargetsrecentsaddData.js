/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.50.3037
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
    define(['ApiClient', 'model/RecentData', 'model/TargetInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RecentData'), require('./TargetInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.TargetsrecentsaddData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.RecentData, root.WorkspaceApi.TargetInformation);
  }
}(this, function(ApiClient, RecentData, TargetInformation) {
  'use strict';




  /**
   * The TargetsrecentsaddData model module.
   * @module model/TargetsrecentsaddData
   * @version 9.0.000.50.3037
   */

  /**
   * Constructs a new <code>TargetsrecentsaddData</code>.
   * @alias module:model/TargetsrecentsaddData
   * @class
   * @param target {module:model/TargetInformation} 
   * @param recentInformation {module:model/RecentData} 
   */
  var exports = function(target, recentInformation) {
    var _this = this;

    _this['target'] = target;
    _this['recentInformation'] = recentInformation;
  };

  /**
   * Constructs a <code>TargetsrecentsaddData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetsrecentsaddData} obj Optional instance to populate.
   * @return {module:model/TargetsrecentsaddData} The populated <code>TargetsrecentsaddData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('target')) {
        obj['target'] = TargetInformation.constructFromObject(data['target']);
      }
      if (data.hasOwnProperty('recentInformation')) {
        obj['recentInformation'] = RecentData.constructFromObject(data['recentInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/TargetInformation} target
   */
  exports.prototype['target'] = undefined;
  /**
   * @member {module:model/RecentData} recentInformation
   */
  exports.prototype['recentInformation'] = undefined;



  return exports;
}));


