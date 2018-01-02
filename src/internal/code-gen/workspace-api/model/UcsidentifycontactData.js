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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.UcsidentifycontactData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The UcsidentifycontactData model module.
   * @module model/UcsidentifycontactData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcsidentifycontactData</code>.
   * @alias module:model/UcsidentifycontactData
   * @class
   * @param mediaType {String} The media type of the interaction
   * @param userData {Array.<module:model/Kvpair>} A key/value pairs list of the user data of the call.
   */
  var exports = function(mediaType, userData) {
    var _this = this;


    _this['mediaType'] = mediaType;


    _this['userData'] = userData;
  };

  /**
   * Constructs a <code>UcsidentifycontactData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsidentifycontactData} obj Optional instance to populate.
   * @return {module:model/UcsidentifycontactData} The populated <code>UcsidentifycontactData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('createContactEnabled')) {
        obj['createContactEnabled'] = ApiClient.convertToType(data['createContactEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('mediaType')) {
        obj['mediaType'] = ApiClient.convertToType(data['mediaType'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('emailAddress')) {
        obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * Indicates if a contact should be created if no matching contact found
   * @member {Boolean} createContactEnabled
   */
  exports.prototype['createContactEnabled'] = undefined;
  /**
   * The media type of the interaction
   * @member {String} mediaType
   */
  exports.prototype['mediaType'] = undefined;
  /**
   * The phone number of the interaction, if interaction is a voice call
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * The email address of the interaction, if interaction is an email
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;
  /**
   * A key/value pairs list of the user data of the call.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;



  return exports;
}));


