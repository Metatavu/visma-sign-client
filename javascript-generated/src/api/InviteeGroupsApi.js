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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/InternalServerError', 'model/InviteeGroups'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/InternalServerError'), require('../model/InviteeGroups'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.InviteeGroupsApi = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.BadRequest, root.VismaSignClient.Forbidden, root.VismaSignClient.InternalServerError, root.VismaSignClient.InviteeGroups);
  }
}(this, function(ApiClient, BadRequest, Forbidden, InternalServerError, InviteeGroups) {
  'use strict';

  /**
   * InviteeGroups service.
   * @module api/InviteeGroupsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new InviteeGroupsApi. 
   * @alias module:api/InviteeGroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Gets invitee groups
     * Gets invitee groups
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InviteeGroups} and HTTP response
     */
    this.getInviteeGroupsWithHttpInfo = function() {
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
      var returnType = InviteeGroups;

      return this.apiClient.callApi(
        '/invitee-group/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets invitee groups
     * Gets invitee groups
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InviteeGroups}
     */
    this.getInviteeGroups = function() {
      return this.getInviteeGroupsWithHttpInfo()
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
