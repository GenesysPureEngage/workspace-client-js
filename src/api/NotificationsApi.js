/**
 * Workspace API
 * Application API used by Workspace Web Edition
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiRequestData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiRequestData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.NotificationsApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiRequestData);
  }
}(this, function(ApiClient, ApiRequestData) {
  'use strict';

  /**
   * Notifications service.
   * @module api/NotificationsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new NotificationsApi. 
   * @alias module:api/NotificationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the notifications operation.
     * @callback module:api/NotificationsApi~notificationsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enables subscription to CometD notification API
     * Enables subscription to CometD notification API
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiRequestData} opts.notificationsData 
     * @param {module:api/NotificationsApi~notificationsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.notifications = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['notificationsData'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the notificationsConnect operation.
     * @callback module:api/NotificationsApi~notificationsConnectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribes to CometD notifications
     * Subscribes to CometD notifications
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiRequestData} opts.notificationsData 
     * @param {module:api/NotificationsApi~notificationsConnectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.notificationsConnect = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['notificationsData'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/connect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the notificationsDisconnect operation.
     * @callback module:api/NotificationsApi~notificationsDisconnectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Close CometD notification subscriptions
     * Close CometD notification subscriptions
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiRequestData} opts.notificationsData 
     * @param {module:api/NotificationsApi~notificationsDisconnectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.notificationsDisconnect = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['notificationsData'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/disconnect', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the notificationsHandshake operation.
     * @callback module:api/NotificationsApi~notificationsHandshakeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Subscribes to CometD notifications
     * Subscribes to CometD notifications
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiRequestData} opts.notificationsData 
     * @param {module:api/NotificationsApi~notificationsHandshakeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.notificationsHandshake = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['notificationsData'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/notifications/handshake', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the socketio operation.
     * @callback module:api/NotificationsApi~socketioCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enables subscription to SocketIO notifications
     * Enables subscription to SocketIO notifications
     * @param {Object} opts Optional parameters
     * @param {module:model/ApiRequestData} opts.socketIOData 
     * @param {module:api/NotificationsApi~socketioCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.socketio = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['socketIOData'];


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/socket.io', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
