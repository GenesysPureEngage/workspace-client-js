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
    define(['ApiClient', 'model/Target'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Target'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.TargetsResponseData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Target);
  }
}(this, function(ApiClient, Target) {
  'use strict';




  /**
   * The TargetsResponseData model module.
   * @module model/TargetsResponseData
   * @version 9.0.000.50.3037
   */

  /**
   * Constructs a new <code>TargetsResponseData</code>.
   * @alias module:model/TargetsResponseData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TargetsResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetsResponseData} obj Optional instance to populate.
   * @return {module:model/TargetsResponseData} The populated <code>TargetsResponseData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targets')) {
        obj['targets'] = ApiClient.convertToType(data['targets'], [Target]);
      }
      if (data.hasOwnProperty('totalMatches')) {
        obj['totalMatches'] = ApiClient.convertToType(data['totalMatches'], 'Number');
      }
    }
    return obj;
  }

  /**
   * An array containing target results
   * @member {Array.<module:model/Target>} targets
   */
  exports.prototype['targets'] = undefined;
  /**
   * The total number of matches to the query.
   * @member {Number} totalMatches
   */
  exports.prototype['totalMatches'] = undefined;



  return exports;
}));


