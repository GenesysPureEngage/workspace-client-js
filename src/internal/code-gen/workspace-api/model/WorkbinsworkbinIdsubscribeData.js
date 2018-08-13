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
    root.WorkspaceApi.WorkbinsworkbinIdsubscribeData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WorkbinsworkbinIdsubscribeData model module.
   * @module model/WorkbinsworkbinIdsubscribeData
   * @version v9.0.000.20.2204
   */

  /**
   * Constructs a new <code>WorkbinsworkbinIdsubscribeData</code>.
   * @alias module:model/WorkbinsworkbinIdsubscribeData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>WorkbinsworkbinIdsubscribeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WorkbinsworkbinIdsubscribeData} obj Optional instance to populate.
   * @return {module:model/WorkbinsworkbinIdsubscribeData} The populated <code>WorkbinsworkbinIdsubscribeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ownerId')) {
        obj['ownerId'] = ApiClient.convertToType(data['ownerId'], 'String');
      }
      if (data.hasOwnProperty('notifyPropertyChanges')) {
        obj['notifyPropertyChanges'] = ApiClient.convertToType(data['notifyPropertyChanges'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Id of the owner of the workbin
   * @member {String} ownerId
   */
  exports.prototype['ownerId'] = undefined;
  /**
   * Default value false. If presente and set to true, Interaction Server will notify the subvscriber about property changes for interaction located in the workbin.
   * @member {Boolean} notifyPropertyChanges
   */
  exports.prototype['notifyPropertyChanges'] = undefined;



  return exports;
}));


