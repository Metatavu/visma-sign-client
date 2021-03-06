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
    define(['ApiClient', 'model/BadRequest', 'model/Forbidden', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Forbidden'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.FilesApi = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.BadRequest, root.VismaSignClient.Forbidden, root.VismaSignClient.InternalServerError);
  }
}(this, function(ApiClient, BadRequest, Forbidden, InternalServerError) {
  'use strict';

  /**
   * Files service.
   * @module api/FilesApi
   * @version 0.0.6
   */

  /**
   * Constructs a new FilesApi. 
   * @alias module:api/FilesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Adds file to document
     * Adds file to document
     * @param {Blob} body Payload
     * @param {String} documentId document id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename filename for the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.addDocumentFileWithHttpInfo = function(body, documentId, opts) {
      opts = opts || {};
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addDocumentFile");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling addDocumentFile");
      }


      var pathParams = {
        'documentId': documentId
      };
      var queryParams = {
        'filename': opts['filename'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/pdf'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      return this.apiClient.callApi(
        '/document/{documentId}/files', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Adds file to document
     * Adds file to document
     * @param {Blob} body Payload
     * @param {String} documentId document id
     * @param {Object} opts Optional parameters
     * @param {String} opts.filename filename for the file
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.addDocumentFile = function(body, documentId, opts) {
      return this.addDocumentFileWithHttpInfo(body, documentId, opts)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Finds document file
     * Finds document file
     * @param {String} documentId document id
     * @param {Number} fileIndex file index
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Blob'} and HTTP response
     */
    this.getDocumentFileWithHttpInfo = function(documentId, fileIndex) {
      var postBody = null;

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling getDocumentFile");
      }

      // verify the required parameter 'fileIndex' is set
      if (fileIndex === undefined || fileIndex === null) {
        throw new Error("Missing the required parameter 'fileIndex' when calling getDocumentFile");
      }


      var pathParams = {
        'documentId': documentId,
        'fileIndex': fileIndex
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
      var accepts = ['application/pdf'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/document/{documentId}/files/{fileIndex}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Finds document file
     * Finds document file
     * @param {String} documentId document id
     * @param {Number} fileIndex file index
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Blob'}
     */
    this.getDocumentFile = function(documentId, fileIndex) {
      return this.getDocumentFileWithHttpInfo(documentId, fileIndex)
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
