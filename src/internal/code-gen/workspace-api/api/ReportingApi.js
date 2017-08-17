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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/StatisticsRegisterData', 'model/StatisticsSubscribeData', 'model/UnsubscribeData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/StatisticsRegisterData'), require('../model/StatisticsSubscribeData'), require('../model/UnsubscribeData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReportingApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.StatisticsRegisterData, root.WorkspaceApi.StatisticsSubscribeData, root.WorkspaceApi.UnsubscribeData);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, StatisticsRegisterData, StatisticsSubscribeData, UnsubscribeData) {
  'use strict';

  /**
   * Reporting service.
   * @module api/ReportingApi
   * @version 1.0.0
   */

  /**
   * Constructs a new ReportingApi. 
   * @alias module:api/ReportingApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get peek values for subscriptionId
     * @param {String} subscriptionId id of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.peekWithHttpInfo = function(subscriptionId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling peek");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/reporting/{subscriptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get peek values for subscriptionId
     * @param {String} subscriptionId id of the subscription
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.peek = function(subscriptionId) {
      return this.peekWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to Statistics and store values server side. Values will only be returned on GET /reporting/{subscriptionId}
     * @param {module:model/StatisticsRegisterData} statisticsRegisterData Requested Statistics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.registerWithHttpInfo = function(statisticsRegisterData) {
      var postBody = statisticsRegisterData;

      // verify the required parameter 'statisticsRegisterData' is set
      if (statisticsRegisterData === undefined || statisticsRegisterData === null) {
        throw new Error("Missing the required parameter 'statisticsRegisterData' when calling register");
      }


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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/reporting/register', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to Statistics and store values server side. Values will only be returned on GET /reporting/{subscriptionId}
     * @param {module:model/StatisticsRegisterData} statisticsRegisterData Requested Statistics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.register = function(statisticsRegisterData) {
      return this.registerWithHttpInfo(statisticsRegisterData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to Statistics
     * @param {module:model/StatisticsSubscribeData} statisticsSubscribeData Requested Statistics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.subscribeWithHttpInfo = function(statisticsSubscribeData) {
      var postBody = statisticsSubscribeData;

      // verify the required parameter 'statisticsSubscribeData' is set
      if (statisticsSubscribeData === undefined || statisticsSubscribeData === null) {
        throw new Error("Missing the required parameter 'statisticsSubscribeData' when calling subscribe");
      }


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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/reporting/subscribe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to Statistics
     * @param {module:model/StatisticsSubscribeData} statisticsSubscribeData Requested Statistics
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.subscribe = function(statisticsSubscribeData) {
      return this.subscribeWithHttpInfo(statisticsSubscribeData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unsubscribe to availability notifications for previous search result
     * @param {module:model/UnsubscribeData} unsubscribeData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.unsubscribeWithHttpInfo = function(unsubscribeData) {
      var postBody = unsubscribeData;

      // verify the required parameter 'unsubscribeData' is set
      if (unsubscribeData === undefined || unsubscribeData === null) {
        throw new Error("Missing the required parameter 'unsubscribeData' when calling unsubscribe");
      }


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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/reporting/unsubscribe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unsubscribe to availability notifications for previous search result
     * @param {module:model/UnsubscribeData} unsubscribeData Request parameters.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.unsubscribe = function(unsubscribeData) {
      return this.unsubscribeWithHttpInfo(unsubscribeData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));