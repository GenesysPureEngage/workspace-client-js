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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.TargetsResponseStatus = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TargetsResponseStatus model module.
   * @module model/TargetsResponseStatus
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>TargetsResponseStatus</code>.
   * @alias module:model/TargetsResponseStatus
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TargetsResponseStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TargetsResponseStatus} obj Optional instance to populate.
   * @return {module:model/TargetsResponseStatus} The populated <code>TargetsResponseStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'Number');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * Indicates whether the operation was successful. `0` is a successful synchronous operation; `1` is a successful asynchronous operation; and `2` is a partially successful synchronous operation. If the value is `2` the response includes **data** and **error** objects. All other status codes indicate an error and include a **message** object. See [Getting started](/reference/) for more information about responses and errors.
   * @member {Number} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Provides general information when a request returns an error response. For example, if your request returns a response with error code `500` the message might be `Resource not found.` See [Getting started](/reference/) for more information about responses and errors.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;



  return exports;
}));


