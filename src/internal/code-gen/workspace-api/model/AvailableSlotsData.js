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
    define(['ApiClient', 'model/Slot'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Slot'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.AvailableSlotsData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Slot);
  }
}(this, function(ApiClient, Slot) {
  'use strict';




  /**
   * The AvailableSlotsData model module.
   * @module model/AvailableSlotsData
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>AvailableSlotsData</code>.
   * @alias module:model/AvailableSlotsData
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AvailableSlotsData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AvailableSlotsData} obj Optional instance to populate.
   * @return {module:model/AvailableSlotsData} The populated <code>AvailableSlotsData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('durationMin')) {
        obj['durationMin'] = ApiClient.convertToType(data['durationMin'], 'Number');
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('slots')) {
        obj['slots'] = ApiClient.convertToType(data['slots'], [Slot]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} durationMin
   */
  exports.prototype['durationMin'] = undefined;
  /**
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * @member {Array.<module:model/Slot>} slots
   */
  exports.prototype['slots'] = undefined;



  return exports;
}));

