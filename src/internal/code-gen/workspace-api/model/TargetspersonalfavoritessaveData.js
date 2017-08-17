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
    define(['ApiClient', 'model/TargetInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TargetInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.TargetspersonalfavoritessaveData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.TargetInformation);
  }
}(this, function(ApiClient, TargetInformation) {
  'use strict';




  /**
   * The TargetspersonalfavoritessaveData model module.
   * @module model/TargetspersonalfavoritessaveData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TargetspersonalfavoritessaveData</code>.
   * @alias module:model/TargetspersonalfavoritessaveData
   * @class
   * @param category {String} category of the favorite target
   * @param target {module:model/TargetInformation} The personal favorite target
   */
  var exports = function(category, target) {
    var _this = this;

    _this['category'] = category;
    _this['target'] = target;
  };

  /**
   * Constructs a <code>TargetspersonalfavoritessaveData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetspersonalfavoritessaveData} obj Optional instance to populate.
   * @return {module:model/TargetspersonalfavoritessaveData} The populated <code>TargetspersonalfavoritessaveData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = TargetInformation.constructFromObject(data['target']);
      }
    }
    return obj;
  }

  /**
   * category of the favorite target
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The personal favorite target
   * @member {module:model/TargetInformation} target
   */
  exports.prototype['target'] = undefined;



  return exports;
}));

