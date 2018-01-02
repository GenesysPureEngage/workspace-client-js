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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/StatisticsSubscribeData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/InlineResponse2001'), require('../model/InlineResponse2002'), require('../model/StatisticsSubscribeData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.ReportingApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.InlineResponse2001, root.WorkspaceApi.InlineResponse2002, root.WorkspaceApi.StatisticsSubscribeData);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, InlineResponse2001, InlineResponse2002, StatisticsSubscribeData) {
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
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get statistics for given subscriptionId.
     * Get the statistics for the specified subscription ID.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/reporting/subscriptions/{subscriptionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get statistics for given subscriptionId.
     * Get the statistics for the specified subscription ID.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    this.peek = function(subscriptionId) {
      return this.peekWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get statistics for given subscription ids.
     * Get the statistics for the specified subscription ID.
     * @param {String} ids IDs of subscriptions to peek statistics for.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2001} and HTTP response
     */
    this.peekMultipleWithHttpInfo = function(ids) {
      var postBody = null;

      // verify the required parameter 'ids' is set
      if (ids === undefined || ids === null) {
        throw new Error("Missing the required parameter 'ids' when calling peekMultiple");
      }


      var pathParams = {
      };
      var queryParams = {
        'ids': ids,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/reporting/subscriptions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get statistics for given subscription ids.
     * Get the statistics for the specified subscription ID.
     * @param {String} ids IDs of subscriptions to peek statistics for.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    this.peekMultiple = function(ids) {
      return this.peekMultipleWithHttpInfo(ids)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to statistics
     * Subscribe to a group of statistics. The values are returned when you request them using &#x60;/reporting/subscriptions/{subscriptionId}&#x60;.
     * @param {module:model/StatisticsSubscribeData} statisticsSubscribeData The collection of statistics you want to include in your subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
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
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/reporting/subscriptions', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to statistics
     * Subscribe to a group of statistics. The values are returned when you request them using &#x60;/reporting/subscriptions/{subscriptionId}&#x60;.
     * @param {module:model/StatisticsSubscribeData} statisticsSubscribeData The collection of statistics you want to include in your subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    this.subscribe = function(statisticsSubscribeData) {
      return this.subscribeWithHttpInfo(statisticsSubscribeData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unsubscribe from statistics.
     * Unsubscribe from the specified group of statistics.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.unsubscribeWithHttpInfo = function(subscriptionId) {
      var postBody = null;

      // verify the required parameter 'subscriptionId' is set
      if (subscriptionId === undefined || subscriptionId === null) {
        throw new Error("Missing the required parameter 'subscriptionId' when calling unsubscribe");
      }


      var pathParams = {
        'subscriptionId': subscriptionId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/reporting/subscriptions/{subscriptionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unsubscribe from statistics.
     * Unsubscribe from the specified group of statistics.
     * @param {String} subscriptionId The unique ID of the subscription.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.unsubscribe = function(subscriptionId) {
      return this.unsubscribeWithHttpInfo(subscriptionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
