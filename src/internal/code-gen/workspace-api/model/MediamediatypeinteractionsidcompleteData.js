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
    define(['ApiClient', 'model/ReasonOnComplete'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReasonOnComplete'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediamediatypeinteractionsidcompleteData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ReasonOnComplete);
  }
}(this, function(ApiClient, ReasonOnComplete) {
  'use strict';




  /**
   * The MediamediatypeinteractionsidcompleteData model module.
   * @module model/MediamediatypeinteractionsidcompleteData
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new <code>MediamediatypeinteractionsidcompleteData</code>.
   * @alias module:model/MediamediatypeinteractionsidcompleteData
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>MediamediatypeinteractionsidcompleteData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediamediatypeinteractionsidcompleteData} obj Optional instance to populate.
   * @return {module:model/MediamediatypeinteractionsidcompleteData} The populated <code>MediamediatypeinteractionsidcompleteData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reasonOnStop')) {
        obj['reasonOnStop'] = ReasonOnComplete.constructFromObject(data['reasonOnStop']);
      }
      if (data.hasOwnProperty('reasonOnPlaceInQueue')) {
        obj['reasonOnPlaceInQueue'] = ReasonOnComplete.constructFromObject(data['reasonOnPlaceInQueue']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ReasonOnComplete} reasonOnStop
   */
  exports.prototype['reasonOnStop'] = undefined;
  /**
   * @member {module:model/ReasonOnComplete} reasonOnPlaceInQueue
   */
  exports.prototype['reasonOnPlaceInQueue'] = undefined;



  return exports;
}));


