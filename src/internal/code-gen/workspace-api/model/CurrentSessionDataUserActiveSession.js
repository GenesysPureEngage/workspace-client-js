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
    define(['ApiClient', 'model/Call', 'model/Dn', 'model/Media', 'model/Service'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Call'), require('./Dn'), require('./Media'), require('./Service'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.CurrentSessionDataUserActiveSession = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Call, root.WorkspaceApi.Dn, root.WorkspaceApi.Media, root.WorkspaceApi.Service);
  }
}(this, function(ApiClient, Call, Dn, Media, Service) {
  'use strict';




  /**
   * The CurrentSessionDataUserActiveSession model module.
   * @module model/CurrentSessionDataUserActiveSession
   * @version 9.0.000.50.3037
   */

  /**
   * Constructs a new <code>CurrentSessionDataUserActiveSession</code>.
   * @alias module:model/CurrentSessionDataUserActiveSession
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>CurrentSessionDataUserActiveSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CurrentSessionDataUserActiveSession} obj Optional instance to populate.
   * @return {module:model/CurrentSessionDataUserActiveSession} The populated <code>CurrentSessionDataUserActiveSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('autoCompleteCall')) {
        obj['autoCompleteCall'] = ApiClient.convertToType(data['autoCompleteCall'], 'Boolean');
      }
      if (data.hasOwnProperty('currentPlace')) {
        obj['currentPlace'] = ApiClient.convertToType(data['currentPlace'], 'String');
      }
      if (data.hasOwnProperty('dn')) {
        obj['dn'] = Dn.constructFromObject(data['dn']);
      }
      if (data.hasOwnProperty('calls')) {
        obj['calls'] = ApiClient.convertToType(data['calls'], [Call]);
      }
      if (data.hasOwnProperty('media')) {
        obj['media'] = Media.constructFromObject(data['media']);
      }
      if (data.hasOwnProperty('services')) {
        obj['services'] = ApiClient.convertToType(data['services'], [Service]);
      }
    }
    return obj;
  }

  /**
   * Specifies if calls are automatically completed.
   * @member {Boolean} autoCompleteCall
   */
  exports.prototype['autoCompleteCall'] = undefined;
  /**
   * The user's current place.
   * @member {String} currentPlace
   */
  exports.prototype['currentPlace'] = undefined;
  /**
   * @member {module:model/Dn} dn
   */
  exports.prototype['dn'] = undefined;
  /**
   * An array containing any active calls.
   * @member {Array.<module:model/Call>} calls
   */
  exports.prototype['calls'] = undefined;
  /**
   * @member {module:model/Media} media
   */
  exports.prototype['media'] = undefined;
  /**
   * An array containing the current state of any initialized services
   * @member {Array.<module:model/Service>} services
   */
  exports.prototype['services'] = undefined;



  return exports;
}));


