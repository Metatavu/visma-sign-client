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
    define(['ApiClient', 'model/BadRequest', 'model/Document', 'model/DocumentSearchResult', 'model/DocumentStatus', 'model/Forbidden', 'model/InlineResponse200', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Document'), require('../model/DocumentSearchResult'), require('../model/DocumentStatus'), require('../model/Forbidden'), require('../model/InlineResponse200'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.DocumentsApi = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.BadRequest, root.VismaSignClient.Document, root.VismaSignClient.DocumentSearchResult, root.VismaSignClient.DocumentStatus, root.VismaSignClient.Forbidden, root.VismaSignClient.InlineResponse200, root.VismaSignClient.InternalServerError);
  }
}(this, function(ApiClient, BadRequest, Document, DocumentSearchResult, DocumentStatus, Forbidden, InlineResponse200, InternalServerError) {
  'use strict';

  /**
   * Documents service.
   * @module api/DocumentsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new DocumentsApi. 
   * @alias module:api/DocumentsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Cancels document
     * Document must have pending or unsent invites to be cancelled. All attached invites will be cancelled as well
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.cancelDocumentWithHttpInfo = function(documentId) {
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling cancelDocument");
      }


      var pathParams = {
        'documentId': documentId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/document/{documentId}/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancels document
     * Document must have pending or unsent invites to be cancelled. All attached invites will be cancelled as well
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.cancelDocument = function(documentId) {
      return this.cancelDocumentWithHttpInfo(documentId)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Creates new document
     * Creates new document
     * @param {module:model/Document} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createDocumentWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createDocument");
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

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/document/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates new document
     * Creates new document
     * @param {module:model/Document} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createDocument = function(body) {
      return this.createDocumentWithHttpInfo(body)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Deletes document
     * A document must be cancelled or signed or have no invitations or signatures to be deleted.
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDocumentWithHttpInfo = function(documentId) {
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling deleteDocument");
      }


      var pathParams = {
        'documentId': documentId
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
      var returnType = null;

      return this.apiClient.callApi(
        '/document/{documentId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes document
     * A document must be cancelled or signed or have no invitations or signatures to be deleted.
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteDocument = function(documentId) {
      return this.deleteDocumentWithHttpInfo(documentId)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Finds document status
     * Finds document status
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentStatus} and HTTP response
     */
    this.getDocumentStatusWithHttpInfo = function(documentId) {
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentStatus");
      }


      var pathParams = {
        'documentId': documentId
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
      var returnType = DocumentStatus;

      return this.apiClient.callApi(
        '/document/{documentId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Finds document status
     * Finds document status
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentStatus}
     */
    this.getDocumentStatus = function(documentId) {
      return this.getDocumentStatusWithHttpInfo(documentId)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Remaind all document invitees
     * Remaind all document invitees
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse200} and HTTP response
     */
    this.remindDocumentInviteesWithHttpInfo = function(documentId) {
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling remindDocumentInvitees");
      }


      var pathParams = {
        'documentId': documentId
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
      var returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/document/{documentId}/remind', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Remaind all document invitees
     * Remaind all document invitees
     * @param {String} documentId document id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
     */
    this.remindDocumentInvitees = function(documentId) {
      return this.remindDocumentInviteesWithHttpInfo(documentId)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Search documents
     * Search documents
     * @param {Object} opts Optional parameters
     * @param {String} opts.category Filter by category UUID. Full match
     * @param {String} opts.name Filter by document name. Partial matches.
     * @param {String} opts.uuid Filter by document UUID. Full match. Can be a comma-separated list.
     * @param {String} opts.dateFrom Filter by document creation date. YYYY-MM-DD, inclusive.
     * @param {String} opts.dateTo Filter by document creation date. YYYY-MM-DD, inclusive.
     * @param {String} opts.status Filter by document status. Full match
     * @param {String} opts.participant Filter by invitee email, invitee phone number or signer name. Partial matches.
     * @param {String} opts.sortBy Set sort field. Valid choices are created_on (default) and name.
     * @param {String} opts.sortOder Set sort order. Valid choices are DESC and ASC. Defaults to newest first / alphabetical.
     * @param {Number} opts.offset Start at this document number.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DocumentSearchResult} and HTTP response
     */
    this.searchDocumentsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'category': opts['category'],
        'name': opts['name'],
        'uuid': opts['uuid'],
        'date_from': opts['dateFrom'],
        'date_to': opts['dateTo'],
        'status': opts['status'],
        'participant': opts['participant'],
        'sort_by': opts['sortBy'],
        'sort_oder': opts['sortOder'],
        'offset': opts['offset'],
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
      var returnType = DocumentSearchResult;

      return this.apiClient.callApi(
        '/document/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search documents
     * Search documents
     * @param {Object} opts Optional parameters
     * @param {String} opts.category Filter by category UUID. Full match
     * @param {String} opts.name Filter by document name. Partial matches.
     * @param {String} opts.uuid Filter by document UUID. Full match. Can be a comma-separated list.
     * @param {String} opts.dateFrom Filter by document creation date. YYYY-MM-DD, inclusive.
     * @param {String} opts.dateTo Filter by document creation date. YYYY-MM-DD, inclusive.
     * @param {String} opts.status Filter by document status. Full match
     * @param {String} opts.participant Filter by invitee email, invitee phone number or signer name. Partial matches.
     * @param {String} opts.sortBy Set sort field. Valid choices are created_on (default) and name.
     * @param {String} opts.sortOder Set sort order. Valid choices are DESC and ASC. Defaults to newest first / alphabetical.
     * @param {Number} opts.offset Start at this document number.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DocumentSearchResult}
     */
    this.searchDocuments = function(opts) {
      return this.searchDocumentsWithHttpInfo(opts)
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
