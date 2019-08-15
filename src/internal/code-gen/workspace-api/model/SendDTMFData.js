/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.51.3082
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
    define(['ApiClient', 'model/OperationId', 'model/VoicecallsidsenddtmfData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./OperationId'), require('./VoicecallsidsenddtmfData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SendDTMFData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.OperationId, root.WorkspaceApi.VoicecallsidsenddtmfData);
  }
}(this, function(ApiClient, OperationId, VoicecallsidsenddtmfData) {
  'use strict';




  /**
   * The SendDTMFData model module.
   * @module model/SendDTMFData
   * @version 9.0.000.51.3082
   */

  /**
   * Constructs a new <code>SendDTMFData</code>.
   * @alias module:model/SendDTMFData
   * @class
   * @param data {module:model/VoicecallsidsenddtmfData} 
   */
  var exports = function(data) {
    var _this = this;


    _this['data'] = data;
  };

  /**
   * Constructs a <code>SendDTMFData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SendDTMFData} obj Optional instance to populate.
   * @return {module:model/SendDTMFData} The populated <code>SendDTMFData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('operationId')) {
        obj['operationId'] = OperationId.constructFromObject(data['operationId']);
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = VoicecallsidsenddtmfData.constructFromObject(data['data']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/OperationId} operationId
   */
  exports.prototype['operationId'] = undefined;
  /**
   * @member {module:model/VoicecallsidsenddtmfData} data
   */
  exports.prototype['data'] = undefined;



  return exports;
}));


