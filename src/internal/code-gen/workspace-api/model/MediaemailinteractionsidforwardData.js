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
    define(['ApiClient', 'model/Kvpair'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Kvpair'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.MediaemailinteractionsidforwardData = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.Kvpair);
  }
}(this, function(ApiClient, Kvpair) {
  'use strict';




  /**
   * The MediaemailinteractionsidforwardData model module.
   * @module model/MediaemailinteractionsidforwardData
   * @version v9.0.000.20.2204
   */

  /**
   * Constructs a new <code>MediaemailinteractionsidforwardData</code>.
   * @alias module:model/MediaemailinteractionsidforwardData
   * @class
   * @param queue {String} the name of the queue to submit the forward email
   * @param from {String} the address mail of from.
   */
  var exports = function(queue, from) {
    var _this = this;

    _this['queue'] = queue;
    _this['from'] = from;








  };

  /**
   * Constructs a <code>MediaemailinteractionsidforwardData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaemailinteractionsidforwardData} obj Optional instance to populate.
   * @return {module:model/MediaemailinteractionsidforwardData} The populated <code>MediaemailinteractionsidforwardData</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('queue')) {
        obj['queue'] = ApiClient.convertToType(data['queue'], 'String');
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
      if (data.hasOwnProperty('body')) {
        obj['body'] = ApiClient.convertToType(data['body'], 'String');
      }
      if (data.hasOwnProperty('bodyAsPlainText')) {
        obj['bodyAsPlainText'] = ApiClient.convertToType(data['bodyAsPlainText'], 'String');
      }
      if (data.hasOwnProperty('mime')) {
        obj['mime'] = ApiClient.convertToType(data['mime'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
      if (data.hasOwnProperty('userData')) {
        obj['userData'] = ApiClient.convertToType(data['userData'], [Kvpair]);
      }
    }
    return obj;
  }

  /**
   * the name of the queue to submit the forward email
   * @member {String} queue
   */
  exports.prototype['queue'] = undefined;
  /**
   * the address mail of from.
   * @member {String} from
   */
  exports.prototype['from'] = undefined;
  /**
   * The addresses mail of to.
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
   * The message to send. Html body
   * @member {String} body
   */
  exports.prototype['body'] = undefined;
  /**
   * The message to send. Plain text body
   * @member {String} bodyAsPlainText
   */
  exports.prototype['bodyAsPlainText'] = undefined;
  /**
   * Multipurpose internet mail extensions of email
   * @member {String} mime
   */
  exports.prototype['mime'] = undefined;
  /**
   * The subject value
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;
  /**
   * A key/value pairs list of user data.
   * @member {Array.<module:model/Kvpair>} userData
   */
  exports.prototype['userData'] = undefined;



  return exports;
}));


