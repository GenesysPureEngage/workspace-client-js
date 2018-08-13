/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: v9.0.000.20.2204
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    root.WorkspaceApi.WorkbinsgetcontentsData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WorkbinsgetcontentsData model module.
   * @module model/WorkbinsgetcontentsData
   * @version v9.0.000.20.2204
   */

  /**
   * Constructs a new <code>WorkbinsgetcontentsData</code>.
   * @alias module:model/WorkbinsgetcontentsData
   * @class
   * @param workbinIds {String} comma-separated list of Workbin Ids
   */
  var exports = function(workbinIds) {
    var _this = this;

    _this['workbinIds'] = workbinIds;

  };

  /**
   * Constructs a <code>WorkbinsgetcontentsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkbinsgetcontentsData} obj Optional instance to populate.
   * @return {module:model/WorkbinsgetcontentsData} The populated <code>WorkbinsgetcontentsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('workbinIds')) {
        obj['workbinIds'] = ApiClient.convertToType(data['workbinIds'], 'String');
      }
      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
      }
    }
    return obj;
  }

  /**
   * comma-separated list of Workbin Ids
   * @member {String} workbinIds
   */
  exports.prototype['workbinIds'] = undefined;
  /**
   * Id of the owner of the workbins
   * @member {String} ownerId
   */
  exports.prototype['ownerId'] = undefined;



  return exports;
}));


