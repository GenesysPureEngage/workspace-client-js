/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    root.WorkspaceApi.Target = factory(root.WorkspaceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Target model module.
   * @module model/Target
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Target</code>.
   * @alias module:model/Target
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Target</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Target} obj Optional instance to populate.
   * @return {module:model/Target} The populated <code>Target</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DBID')) {
        obj['DBID'] = ApiClient.convertToType(data['DBID'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('employeeID')) {
        obj['employeeID'] = ApiClient.convertToType(data['employeeID'], 'String');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('switchName')) {
        obj['switchName'] = ApiClient.convertToType(data['switchName'], 'String');
      }
      if (data.hasOwnProperty('availability')) {
        obj['availability'] = ApiClient.convertToType(data['availability'], Object);
      }
    }
    return obj;
  }

  /**
   * DBID of the object
   * @member {Number} DBID
   */
  exports.prototype['DBID'] = undefined;
  /**
   * For agents firstname and lastname (or username if neither is defined), for other types the name field is used.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The type of the target - agent, agent-group, acd-queue, route-point, skill or custom-contact.
   * @member {module:model/Target.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * First name - only applicable to agents.
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name - only applicable to agents.
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Employee id - only applicable to agents.
   * @member {String} employeeID
   */
  exports.prototype['employeeID'] = undefined;
  /**
   * Username - only applicable to agents.
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;
  /**
   * Only applicable to acd-queue and route-point
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Only applicable to acd-queue and route-point
   * @member {String} switchName
   */
  exports.prototype['switchName'] = undefined;
  /**
   * The structure depends on the target type. For agents, availability includes channel details. For acd-queues and route-points, waiting calls. For agent-groups, the number of ready agents.
   * @member {Object} availability
   */
  exports.prototype['availability'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "agent"
     * @const
     */
    "agent": "agent",
    /**
     * value: "agent-group"
     * @const
     */
    "agent-group": "agent-group",
    /**
     * value: "acd-queue"
     * @const
     */
    "acd-queue": "acd-queue",
    /**
     * value: "route-point"
     * @const
     */
    "route-point": "route-point",
    /**
     * value: "skill"
     * @const
     */
    "skill": "skill",
    /**
     * value: "custom-contact"
     * @const
     */
    "custom-contact": "custom-contact"  };


  return exports;
}));


