/**
 * Visma-Sign API
 * Swagger documentation for Visma-Sign API.
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/InternalServerError', 'model/SavedEmailMessages', 'model/SavedSmsMessages'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/SavedEmailMessages'), require('../model/SavedSmsMessages'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.SavedInvitationMessagesApi = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.BadRequest, root.VismaSignClient.Forbidden, root.VismaSignClient.InternalServerError, root.VismaSignClient.SavedEmailMessages, root.VismaSignClient.SavedSmsMessages);
  }
}(this, function(ApiClient, BadRequest, Forbidden, InternalServerError, SavedEmailMessages, SavedSmsMessages) {
  'use strict';

  /**
   * SavedInvitationMessages service.
   * @module api/SavedInvitationMessagesApi
   * @version 0.0.6
   */

  /**
   * Constructs a new SavedInvitationMessagesApi. 
   * @alias module:api/SavedInvitationMessagesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Gets saved email messages
     * Gets saved email messages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SavedEmailMessages} and HTTP response
     */
    this.getSavedEmailMessagesWithHttpInfo = function() {
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = SavedEmailMessages;

      return this.apiClient.callApi(
        '/saved-invitation-message/email/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets saved email messages
     * Gets saved email messages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SavedEmailMessages}
     */
    this.getSavedEmailMessages = function() {
      return this.getSavedEmailMessagesWithHttpInfo()
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Gets saved sms messages
     * Gets saved sms messages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SavedSmsMessages} and HTTP response
     */
    this.getSavedSmsMessagesWithHttpInfo = function() {
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = SavedSmsMessages;

      return this.apiClient.callApi(
        '/saved-invitation-message/sms/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets saved sms messages
     * Gets saved sms messages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SavedSmsMessages}
     */
    this.getSavedSmsMessages = function() {
      return this.getSavedSmsMessagesWithHttpInfo()
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
