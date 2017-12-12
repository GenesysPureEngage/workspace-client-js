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
    root.WorkspaceApi.MediachatinteractionsidsendmessageData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediachatinteractionsidsendmessageData model module.
   * @module model/MediachatinteractionsidsendmessageData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MediachatinteractionsidsendmessageData</code>.
   * @alias module:model/MediachatinteractionsidsendmessageData
   * @class
   * @param message {String} The message to send to the chat
   */
  var exports = function(message) {
    var _this = this;

    _this['message'] = message;

  };

  /**
   * Constructs a <code>MediachatinteractionsidsendmessageData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidsendmessageData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidsendmessageData} The populated <code>MediachatinteractionsidsendmessageData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('extension')) {
        obj['extension'] = ApiClient.convertToType(data['extension'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * The message to send to the chat
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * A key/value pairs list of additional data.
   * @member {Array.<module:model/Kvpair>} extension
   */
  exports.prototype['extension'] = undefined;



  return exports;
}));


