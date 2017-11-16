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
    define(['ApiClient', 'model/AddInteractionToWorkbinData', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/GetWorkbinContentData', 'model/GetWorkbinsContentData', 'model/PullInteractionFromWorkbinData', 'model/SubscribeToWorkbinNotificationsData', 'model/UnsubscribeToWorkbinNotificationsData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddInteractionToWorkbinData'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/GetWorkbinContentData'), require('../model/GetWorkbinsContentData'), require('../model/PullInteractionFromWorkbinData'), require('../model/SubscribeToWorkbinNotificationsData'), require('../model/UnsubscribeToWorkbinNotificationsData'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.WorkbinsApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.AddInteractionToWorkbinData, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.GetWorkbinContentData, root.WorkspaceApi.GetWorkbinsContentData, root.WorkspaceApi.PullInteractionFromWorkbinData, root.WorkspaceApi.SubscribeToWorkbinNotificationsData, root.WorkspaceApi.UnsubscribeToWorkbinNotificationsData);
  }
}(this, function(ApiClient, AddInteractionToWorkbinData, ApiErrorResponse, ApiSuccessResponse, GetWorkbinContentData, GetWorkbinsContentData, PullInteractionFromWorkbinData, SubscribeToWorkbinNotificationsData, UnsubscribeToWorkbinNotificationsData) {
  'use strict';

  /**
   * Workbins service.
   * @module api/WorkbinsApi
   * @version 1.0.0
   */

  /**
   * Constructs a new WorkbinsApi. 
   * @alias module:api/WorkbinsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add an Interaction to a workbin
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/AddInteractionToWorkbinData} addInteractionToWorkbinData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.addInteractionToWorkbinWithHttpInfo = function(workbinId, addInteractionToWorkbinData) {
      var postBody = addInteractionToWorkbinData;

      // verify the required parameter 'workbinId' is set
      if (workbinId === undefined || workbinId === null) {
        throw new Error("Missing the required parameter 'workbinId' when calling addInteractionToWorkbin");
      }

      // verify the required parameter 'addInteractionToWorkbinData' is set
      if (addInteractionToWorkbinData === undefined || addInteractionToWorkbinData === null) {
        throw new Error("Missing the required parameter 'addInteractionToWorkbinData' when calling addInteractionToWorkbin");
      }


      var pathParams = {
        'workbinId': workbinId
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
        '/workbins/{workbinId}/add-interaction', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add an Interaction to a workbin
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/AddInteractionToWorkbinData} addInteractionToWorkbinData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.addInteractionToWorkbin = function(workbinId, addInteractionToWorkbinData) {
      return this.addInteractionToWorkbinWithHttpInfo(workbinId, addInteractionToWorkbinData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the content of a Workbin.
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/GetWorkbinContentData} getWorkbinContentData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getWorkbinContentWithHttpInfo = function(workbinId, getWorkbinContentData) {
      var postBody = getWorkbinContentData;

      // verify the required parameter 'workbinId' is set
      if (workbinId === undefined || workbinId === null) {
        throw new Error("Missing the required parameter 'workbinId' when calling getWorkbinContent");
      }

      // verify the required parameter 'getWorkbinContentData' is set
      if (getWorkbinContentData === undefined || getWorkbinContentData === null) {
        throw new Error("Missing the required parameter 'getWorkbinContentData' when calling getWorkbinContent");
      }


      var pathParams = {
        'workbinId': workbinId
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
        '/workbins/{workbinId}/get-content', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the content of a Workbin.
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/GetWorkbinContentData} getWorkbinContentData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getWorkbinContent = function(workbinId, getWorkbinContentData) {
      return this.getWorkbinContentWithHttpInfo(workbinId, getWorkbinContentData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get All Valid Workbins.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getWorkbinsWithHttpInfo = function() {
      var postBody = null;


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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/workbins/get-workbins', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get All Valid Workbins.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getWorkbins = function() {
      return this.getWorkbinsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get the content of multiple Workbins.
     * @param {module:model/GetWorkbinsContentData} getWorkbinsContentData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getWorkbinsContentWithHttpInfo = function(getWorkbinsContentData) {
      var postBody = getWorkbinsContentData;

      // verify the required parameter 'getWorkbinsContentData' is set
      if (getWorkbinsContentData === undefined || getWorkbinsContentData === null) {
        throw new Error("Missing the required parameter 'getWorkbinsContentData' when calling getWorkbinsContent");
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
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/workbins/get-contents', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the content of multiple Workbins.
     * @param {module:model/GetWorkbinsContentData} getWorkbinsContentData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getWorkbinsContent = function(getWorkbinsContentData) {
      return this.getWorkbinsContentWithHttpInfo(getWorkbinsContentData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Pull an Interaction from a Workbin
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/PullInteractionFromWorkbinData} pullInteractionFromWorkbinData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.pullInteractionFromWorkbinWithHttpInfo = function(workbinId, pullInteractionFromWorkbinData) {
      var postBody = pullInteractionFromWorkbinData;

      // verify the required parameter 'workbinId' is set
      if (workbinId === undefined || workbinId === null) {
        throw new Error("Missing the required parameter 'workbinId' when calling pullInteractionFromWorkbin");
      }

      // verify the required parameter 'pullInteractionFromWorkbinData' is set
      if (pullInteractionFromWorkbinData === undefined || pullInteractionFromWorkbinData === null) {
        throw new Error("Missing the required parameter 'pullInteractionFromWorkbinData' when calling pullInteractionFromWorkbin");
      }


      var pathParams = {
        'workbinId': workbinId
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
        '/workbins/{workbinId}/pull-interaction', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Pull an Interaction from a Workbin
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/PullInteractionFromWorkbinData} pullInteractionFromWorkbinData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.pullInteractionFromWorkbin = function(workbinId, pullInteractionFromWorkbinData) {
      return this.pullInteractionFromWorkbinWithHttpInfo(workbinId, pullInteractionFromWorkbinData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Subscribe to be notified of changes of the content of a Workbin.
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/SubscribeToWorkbinNotificationsData} subscribeToWorkbinNotificationsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.subscribeToWorkbinNotificationsWithHttpInfo = function(workbinId, subscribeToWorkbinNotificationsData) {
      var postBody = subscribeToWorkbinNotificationsData;

      // verify the required parameter 'workbinId' is set
      if (workbinId === undefined || workbinId === null) {
        throw new Error("Missing the required parameter 'workbinId' when calling subscribeToWorkbinNotifications");
      }

      // verify the required parameter 'subscribeToWorkbinNotificationsData' is set
      if (subscribeToWorkbinNotificationsData === undefined || subscribeToWorkbinNotificationsData === null) {
        throw new Error("Missing the required parameter 'subscribeToWorkbinNotificationsData' when calling subscribeToWorkbinNotifications");
      }


      var pathParams = {
        'workbinId': workbinId
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
        '/workbins/{workbinId}/subscribe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Subscribe to be notified of changes of the content of a Workbin.
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/SubscribeToWorkbinNotificationsData} subscribeToWorkbinNotificationsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.subscribeToWorkbinNotifications = function(workbinId, subscribeToWorkbinNotificationsData) {
      return this.subscribeToWorkbinNotificationsWithHttpInfo(workbinId, subscribeToWorkbinNotificationsData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Unsubscribe to the notifications of changes of the content of a Workbin.
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/UnsubscribeToWorkbinNotificationsData} unsubscribeToWorkbinNotificationsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.unsubscribeToWorkbinNotificationsWithHttpInfo = function(workbinId, unsubscribeToWorkbinNotificationsData) {
      var postBody = unsubscribeToWorkbinNotificationsData;

      // verify the required parameter 'workbinId' is set
      if (workbinId === undefined || workbinId === null) {
        throw new Error("Missing the required parameter 'workbinId' when calling unsubscribeToWorkbinNotifications");
      }

      // verify the required parameter 'unsubscribeToWorkbinNotificationsData' is set
      if (unsubscribeToWorkbinNotificationsData === undefined || unsubscribeToWorkbinNotificationsData === null) {
        throw new Error("Missing the required parameter 'unsubscribeToWorkbinNotificationsData' when calling unsubscribeToWorkbinNotifications");
      }


      var pathParams = {
        'workbinId': workbinId
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
        '/workbins/{workbinId}/unsubscribe', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unsubscribe to the notifications of changes of the content of a Workbin.
     * @param {String} workbinId Id of the Workbin
     * @param {module:model/UnsubscribeToWorkbinNotificationsData} unsubscribeToWorkbinNotificationsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.unsubscribeToWorkbinNotifications = function(workbinId, unsubscribeToWorkbinNotificationsData) {
      return this.unsubscribeToWorkbinNotificationsWithHttpInfo(workbinId, unsubscribeToWorkbinNotificationsData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));