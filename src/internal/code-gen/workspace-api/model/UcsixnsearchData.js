/**
 * Workspace API
 * Agent API
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    root.WorkspaceApi.UcsixnsearchData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UcsixnsearchData model module.
   * @module model/UcsixnsearchData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>UcsixnsearchData</code>.
   * @alias module:model/UcsixnsearchData
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UcsixnsearchData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UcsixnsearchData} obj Optional instance to populate.
   * @return {module:model/UcsixnsearchData} The populated <code>UcsixnsearchData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxResults')) {
        obj['maxResults'] = ApiClient.convertToType(data['maxResults'], 'Number');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], ['String']);
      }
      if (data.hasOwnProperty('query')) {
        obj['query'] = ApiClient.convertToType(data['query'], 'String');
      }
      if (data.hasOwnProperty('returnedAttributes')) {
        obj['returnedAttributes'] = ApiClient.convertToType(data['returnedAttributes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * The maximum number of contacts to be returned
   * @member {Number} maxResults
   */
  exports.prototype['maxResults'] = undefined;
  /**
   * The list of agent username for which the search refers to. 
   * @member {Array.<String>} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * The query to do the lucene search for contacts
   * @member {String} query
   */
  exports.prototype['query'] = undefined;
  /**
   * The list of contact attributes to be returned for each contact in response
   * @member {Array.<String>} returnedAttributes
   */
  exports.prototype['returnedAttributes'] = undefined;



  return exports;
}));

