/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 9.0.000.61.3296
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
    root.WorkspaceApi.MediamediatypeinteractionsidsendurlData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidsendurlData model module.
   * @module model/MediamediatypeinteractionsidsendurlData
   * @version 9.0.000.61.3296
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidsendurlData</code>.
   * @alias module:model/MediamediatypeinteractionsidsendurlData
   * @class
   * @param url {String} The URL to send to the chat participants.
   */
  var exports = function(url) {
    var _this = this;

    _this['url'] = url;

  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidsendurlData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidsendurlData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidsendurlData} The populated <code>MediamediatypeinteractionsidsendurlData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
    }
    return obj;
  }

  /**
   * The URL to send to the chat participants.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * Defines which participants in the chat can see the URL.
   * @member {module:model/MediamediatypeinteractionsidsendurlData.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "All"
     * @const
     */
    "All": "All",
    /**
     * value: "Agent"
     * @const
     */
    "Agent": "Agent",
    /**
     * value: "Supervisor"
     * @const
     */
    "Supervisor": "Supervisor"  };


  return exports;
}));


