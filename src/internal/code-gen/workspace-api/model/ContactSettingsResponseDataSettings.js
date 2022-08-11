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
    define(['ApiClient', 'model/ContactSettingsResponseDataSettingsPhoneNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContactSettingsResponseDataSettingsPhoneNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ContactSettingsResponseDataSettings = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ContactSettingsResponseDataSettingsPhoneNumber);
  }
}(this, function(ApiClient, ContactSettingsResponseDataSettingsPhoneNumber) {
  'use strict';




  /**
   * The ContactSettingsResponseDataSettings model module.
   * @module model/ContactSettingsResponseDataSettings
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>ContactSettingsResponseDataSettings</code>.
   * @alias module:model/ContactSettingsResponseDataSettings
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ContactSettingsResponseDataSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactSettingsResponseDataSettings} obj Optional instance to populate.
   * @return {module:model/ContactSettingsResponseDataSettings} The populated <code>ContactSettingsResponseDataSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ContactSettingsResponseDataSettingsPhoneNumber.constructFromObject(data['phoneNumber']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ContactSettingsResponseDataSettingsPhoneNumber} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;



  return exports;
}));

