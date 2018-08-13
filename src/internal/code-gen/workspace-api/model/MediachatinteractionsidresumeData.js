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
    root.WorkspaceApi.MediachatinteractionsidresumeData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediachatinteractionsidresumeData model module.
   * @module model/MediachatinteractionsidresumeData
   * @version v9.0.000.20.2204
   */

  /**
   * Constructs a new <code>MediachatinteractionsidresumeData</code>.
   * @alias module:model/MediachatinteractionsidresumeData
   * @class
   * @param nickname {String} The nickname.
   */
  var exports = function(nickname) {
    var _this = this;

    _this['nickname'] = nickname;
  };

  /**
   * Constructs a <code>MediachatinteractionsidresumeData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediachatinteractionsidresumeData} obj Optional instance to populate.
   * @return {module:model/MediachatinteractionsidresumeData} The populated <code>MediachatinteractionsidresumeData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nickname')) {
        obj['nickname'] = ApiClient.convertToType(data['nickname'], 'String');
      }
    }
    return obj;
  }

  /**
   * The nickname.
   * @member {String} nickname
   */
  exports.prototype['nickname'] = undefined;



  return exports;
}));


