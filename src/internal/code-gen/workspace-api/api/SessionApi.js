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
    define(['ApiClient', 'model/ApiErrorResponse', 'model/ApiSuccessResponse', 'model/ChannelsData', 'model/ChannelsData1', 'model/ChannelsData2', 'model/ConfigResponse', 'model/CurrentSession', 'model/Devices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiErrorResponse'), require('../model/ApiSuccessResponse'), require('../model/ChannelsData'), require('../model/ChannelsData1'), require('../model/ChannelsData2'), require('../model/ConfigResponse'), require('../model/CurrentSession'), require('../model/Devices'));
  } else {
    // Browser globals (root is window)
    if (!root.WorkspaceApi) {
      root.WorkspaceApi = {};
    }
    root.WorkspaceApi.SessionApi = factory(root.WorkspaceApi.ApiClient, root.WorkspaceApi.ApiErrorResponse, root.WorkspaceApi.ApiSuccessResponse, root.WorkspaceApi.ChannelsData, root.WorkspaceApi.ChannelsData1, root.WorkspaceApi.ChannelsData2, root.WorkspaceApi.ConfigResponse, root.WorkspaceApi.CurrentSession, root.WorkspaceApi.Devices);
  }
}(this, function(ApiClient, ApiErrorResponse, ApiSuccessResponse, ChannelsData, ChannelsData1, ChannelsData2, ConfigResponse, CurrentSession, Devices) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 9.0.000.97.4639
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:api/SessionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Activate channels
     * Activate the specified channels using the provided resources. If the channels are successfully activated, Workspace sends additional information about the state of active resources (DNs, channels) via events. The resources you provide are associated with the agent for the duration of the session. You should send this request after making an [/initialize-workspace](/reference/workspace/Session/index.html#initializeWorkspace) request and getting the WorkspaceInitializationComplete message through CometD.
     * @param {module:model/ChannelsData} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.activateChannelsWithHttpInfo = function(channelsData) {
      var postBody = channelsData;

      // verify the required parameter 'channelsData' is set
      if (channelsData === undefined || channelsData === null) {
        throw new Error("Missing the required parameter 'channelsData' when calling activateChannels");
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
        '/activate-channels', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Activate channels
     * Activate the specified channels using the provided resources. If the channels are successfully activated, Workspace sends additional information about the state of active resources (DNs, channels) via events. The resources you provide are associated with the agent for the duration of the session. You should send this request after making an [/initialize-workspace](/reference/workspace/Session/index.html#initializeWorkspace) request and getting the WorkspaceInitializationComplete message through CometD.
     * @param {module:model/ChannelsData} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.activateChannels = function(channelsData) {
      return this.activateChannelsWithHttpInfo(channelsData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Activate open media channels
     * Activate the specified channels using the provided resources. You can only send this request if you have already made an [/activate-channels](/reference/workspace/Session/index.html#activateChannels) request.
     * @param {module:model/ChannelsData2} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.activateMediaWithHttpInfo = function(channelsData) {
      var postBody = channelsData;

      // verify the required parameter 'channelsData' is set
      if (channelsData === undefined || channelsData === null) {
        throw new Error("Missing the required parameter 'channelsData' when calling activateMedia");
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
        '/media/activate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Activate open media channels
     * Activate the specified channels using the provided resources. You can only send this request if you have already made an [/activate-channels](/reference/workspace/Session/index.html#activateChannels) request.
     * @param {module:model/ChannelsData2} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.activateMedia = function(channelsData) {
      return this.activateMediaWithHttpInfo(channelsData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Activate voice channel
     * Activate the voice channel using the provided resources. You can only send this request if you have already made an [/activate-channels](/reference/workspace/Session/index.html#activateChannels) request.
     * @param {module:model/ChannelsData1} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.activateVoiceWithHttpInfo = function(channelsData) {
      var postBody = channelsData;

      // verify the required parameter 'channelsData' is set
      if (channelsData === undefined || channelsData === null) {
        throw new Error("Missing the required parameter 'channelsData' when calling activateVoice");
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
        '/voice/activate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Activate voice channel
     * Activate the voice channel using the provided resources. You can only send this request if you have already made an [/activate-channels](/reference/workspace/Session/index.html#activateChannels) request.
     * @param {module:model/ChannelsData1} channelsData 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.activateVoice = function(channelsData) {
      return this.activateVoiceWithHttpInfo(channelsData)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deactivate open media channels
     * Deactivate the open media channels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deactivateMediaWithHttpInfo = function() {
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
        '/media/deactivate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deactivate open media channels
     * Deactivate the open media channels.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deactivateMedia = function() {
      return this.deactivateMediaWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deactivate voice channel
     * Deactivate the voice channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.deactivateVoiceWithHttpInfo = function() {
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
        '/voice/deactivate', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deactivate voice channel
     * Deactivate the voice channel.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.deactivateVoice = function() {
      return this.deactivateVoiceWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get business attribute hierarchy
     * Get the business attribute hierarchy for the specified business attribute.
     * @param {Number} id The unique ID of the business attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.getBusinessAttributeHierarchyWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getBusinessAttributeHierarchy");
      }


      var pathParams = {
        'id': id
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
        '/configuration/business-attribute/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get business attribute hierarchy
     * Get the business attribute hierarchy for the specified business attribute.
     * @param {Number} id The unique ID of the business attribute.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.getBusinessAttributeHierarchy = function(id) {
      return this.getBusinessAttributeHierarchyWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get configuration settings
     * Get all configuration items needed by the user interface. This includes action codes, business attributes, transactions, and settings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.types A comma delimited list of types used to specify what content should be returned. If not specified the default is &#x60;actionCodes, agentGroups,settings&#x60;. Valid values are &#x60;actionCodes&#x60;, &#x60;agentGroups&#x60;, &#x60;settings&#x60;, &#x60;workspaceTransactions&#x60;, and &#x60;businessAttributes&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ConfigResponse} and HTTP response
     */
    this.getConfigurationWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'types': opts['types'],
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
      var returnType = ConfigResponse;

      return this.apiClient.callApi(
        '/configuration', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get configuration settings
     * Get all configuration items needed by the user interface. This includes action codes, business attributes, transactions, and settings.
     * @param {Object} opts Optional parameters
     * @param {String} opts.types A comma delimited list of types used to specify what content should be returned. If not specified the default is &#x60;actionCodes, agentGroups,settings&#x60;. Valid values are &#x60;actionCodes&#x60;, &#x60;agentGroups&#x60;, &#x60;settings&#x60;, &#x60;workspaceTransactions&#x60;, and &#x60;businessAttributes&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ConfigResponse}
     */
    this.getConfiguration = function(opts) {
      return this.getConfigurationWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get information about the current user
     * Get information about the current user, including any existing media logins, calls, and interactions. The returned user information includes state recovery information about the active session. You can make this request at startup to check for an existing session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CurrentSession} and HTTP response
     */
    this.getCurrentSessionWithHttpInfo = function() {
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
      var returnType = CurrentSession;

      return this.apiClient.callApi(
        '/current-session', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get information about the current user
     * Get information about the current user, including any existing media logins, calls, and interactions. The returned user information includes state recovery information about the active session. You can make this request at startup to check for an existing session.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CurrentSession}
     */
    this.getCurrentSession = function() {
      return this.getCurrentSessionWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get DNs for a place
     * Get all DNs attached to the specified place.
     * @param {String} placeName The name of the place.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.placeStatus Return the information if place is used by an agent.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Devices} and HTTP response
     */
    this.getDevicesForPlaceWithHttpInfo = function(placeName, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'placeName' is set
      if (placeName === undefined || placeName === null) {
        throw new Error("Missing the required parameter 'placeName' when calling getDevicesForPlace");
      }


      var pathParams = {
        'placeName': placeName
      };
      var queryParams = {
        'placeStatus': opts['placeStatus'],
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
      var returnType = Devices;

      return this.apiClient.callApi(
        '/configuration/places/{placeName}/dns', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get DNs for a place
     * Get all DNs attached to the specified place.
     * @param {String} placeName The name of the place.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.placeStatus Return the information if place is used by an agent.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Devices}
     */
    this.getDevicesForPlace = function(placeName, opts) {
      return this.getDevicesForPlaceWithHttpInfo(placeName, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get and register an auth token
     * Retrieve the authorization token using the authorization code. Workspace then registers the token and prepares the user&#39;s environment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code The authorization code. You must include this parameter for the [Authorization Code Grant flow](/reference/authentication/).
     * @param {String} opts.redirectUri The same redirect URI you used in the initial login step. You must include this parameter for the [Authorization Code Grant flow](/reference/authentication/).
     * @param {String} opts.state The state parameter provide by the auth service on redirect that should be used to validate. This parameter must be provided if the include_state parameter is sent with the /login request.
     * @param {Boolean} opts.optimizeConfig This parameter allows to activate optimize config mode. When this mode is activated the content of some event is modified and format about KVPList.
     * @param {String} opts.authorization Bearer authorization. For example, \&quot;Authorization&amp;colon; Bearer access_token\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.initializeWorkspaceWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'code': opts['code'],
        'redirect_uri': opts['redirectUri'],
        'state': opts['state'],
        'optimize_config': opts['optimizeConfig'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ApiSuccessResponse;

      return this.apiClient.callApi(
        '/initialize-workspace', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get and register an auth token
     * Retrieve the authorization token using the authorization code. Workspace then registers the token and prepares the user&#39;s environment.
     * @param {Object} opts Optional parameters
     * @param {String} opts.code The authorization code. You must include this parameter for the [Authorization Code Grant flow](/reference/authentication/).
     * @param {String} opts.redirectUri The same redirect URI you used in the initial login step. You must include this parameter for the [Authorization Code Grant flow](/reference/authentication/).
     * @param {String} opts.state The state parameter provide by the auth service on redirect that should be used to validate. This parameter must be provided if the include_state parameter is sent with the /login request.
     * @param {Boolean} opts.optimizeConfig This parameter allows to activate optimize config mode. When this mode is activated the content of some event is modified and format about KVPList.
     * @param {String} opts.authorization Bearer authorization. For example, \&quot;Authorization&amp;colon; Bearer access_token\&quot;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.initializeWorkspace = function(opts) {
      return this.initializeWorkspaceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Login (HTTP session only)
     * Starts the OAuth 2 flow for the Authorization Code grant type and returns a redirect to the Authentication service. For more information, see the [Authentication API](/reference/authentication/).
     * @param {String} redirectUri The URI the Authentication API uses to redirect the user after authentication.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type The application type requesting the login.
     * @param {String} opts.locale The current locale of the app.
     * @param {Boolean} opts.includeState Flag denoting whether a state parameter should be generated and included in the redirect.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.loginWithHttpInfo = function(redirectUri, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'redirectUri' is set
      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling login");
      }


      var pathParams = {
      };
      var queryParams = {
        'redirect_uri': redirectUri,
        'type': opts['type'],
        'locale': opts['locale'],
        'include_state': opts['includeState'],
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
      var returnType = null;

      return this.apiClient.callApi(
        '/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Login (HTTP session only)
     * Starts the OAuth 2 flow for the Authorization Code grant type and returns a redirect to the Authentication service. For more information, see the [Authentication API](/reference/authentication/).
     * @param {String} redirectUri The URI the Authentication API uses to redirect the user after authentication.
     * @param {Object} opts Optional parameters
     * @param {String} opts.type The application type requesting the login.
     * @param {String} opts.locale The current locale of the app.
     * @param {Boolean} opts.includeState Flag denoting whether a state parameter should be generated and included in the redirect.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.login = function(redirectUri, opts) {
      return this.loginWithHttpInfo(redirectUri, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Log out and end the session
     * End the current agent&#39;s session. This request logs out the agent on all activated channels, ends the HTTP session, and cleans up related resources. Genesys recommends that you first disconnect CometD and then make this request. After you end the session, you&#39;ll need to make a login request before making any new calls to the API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiSuccessResponse} and HTTP response
     */
    this.logoutWithHttpInfo = function() {
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
        '/logout', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Log out and end the session
     * End the current agent&#39;s session. This request logs out the agent on all activated channels, ends the HTTP session, and cleans up related resources. Genesys recommends that you first disconnect CometD and then make this request. After you end the session, you&#39;ll need to make a login request before making any new calls to the API.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiSuccessResponse}
     */
    this.logout = function() {
      return this.logoutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Log out and end the session
     * Ends the current agent&#39;s session. This request logs out the agent on all activated channels, ends the HTTP session, and cleans up related resources. Genesys recommends that you first disconnect CometD and then make this request. After you end the session, you&#39;ll need to make a login request before making any new calls to the API.
     * @param {Object} opts Optional parameters
     * @param {String} opts.redirectUri The URI the Authentication API uses to redirect the user after logout.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.logoutRedirectWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'redirect_uri': opts['redirectUri'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/html'];
      var returnType = null;

      return this.apiClient.callApi(
        '/logout', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Log out and end the session
     * Ends the current agent&#39;s session. This request logs out the agent on all activated channels, ends the HTTP session, and cleans up related resources. Genesys recommends that you first disconnect CometD and then make this request. After you end the session, you&#39;ll need to make a login request before making any new calls to the API.
     * @param {Object} opts Optional parameters
     * @param {String} opts.redirectUri The URI the Authentication API uses to redirect the user after logout.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.logoutRedirect = function(opts) {
      return this.logoutRedirectWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
