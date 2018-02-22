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
    root.WorkspaceApi.MediaemailinteractionsidsendData = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MediaemailinteractionsidsendData model module.
   * @module model/MediaemailinteractionsidsendData
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MediaemailinteractionsidsendData</code>.
   * @alias module:model/MediaemailinteractionsidsendData
   * @class
   * @param queue {String} Queue for sending email.
   * @param from {String} from address.
   * @param to {Array.<String>} to addresses
   */
  var exports = function(queue, from, to) {
    var _this = this;

    _this['queue'] = queue;





    _this['from'] = from;
    _this['to'] = to;



  };

  /**
   * Constructs a <code>MediaemailinteractionsidsendData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaemailinteractionsidsendData} obj Optional instance to populate.
   * @return {module:model/MediaemailinteractionsidsendData} The populated <code>MediaemailinteractionsidsendData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
      }
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('bodyAsPlaintText')) {
        obj['bodyAsPlaintText'] = ApiClient.convertToType(data['bodyAsPlaintText'], 'String');
      }
      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'String');
      }
      if (data.hasOwnProperty('to')) {
        obj['to'] = ApiClient.convertToType(data['to'], ['String']);
      }
      if (data.hasOwnProperty('cc')) {
        obj['cc'] = ApiClient.convertToType(data['cc'], ['String']);
      }
      if (data.hasOwnProperty('bcc')) {
        obj['bcc'] = ApiClient.convertToType(data['bcc'], ['String']);
      }
      if (data.hasOwnProperty('useReviewer')) {
        obj['useReviewer'] = ApiClient.convertToType(data['useReviewer'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Queue for sending email.
   * @member {String} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * HTML body of email.
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * Plain text body of email.
   * @member {String} bodyAsPlaintText
   */
  exports.prototype['bodyAsPlaintText'] = undefined;
  /**
   * Multipurpose internet mail extensions of email.
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;
  /**
   * Subject of email.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * Subject of email.
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * from address.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * to addresses
   * @member {Array.<String>} to
   */
  exports.prototype['to'] = undefined;
  /**
   * cc addresses
   * @member {Array.<String>} cc
   */
  exports.prototype['cc'] = undefined;
  /**
   * bcc addresses
   * @member {Array.<String>} bcc
   */
  exports.prototype['bcc'] = undefined;
  /**
   * Indicate the agent is reviewer.
   * @member {Boolean} useReviewer
   */
  exports.prototype['useReviewer'] = undefined;



  return exports;
}));

