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
    define(['ApiClient', 'model/BadRequest', 'model/Categories', 'model/Category', 'model/Forbidden', 'model/InternalServerError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BadRequest'), require('../model/Categories'), require('../model/Category'), require('../model/Forbidden'), require('../model/InternalServerError'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.CategoriesApi = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.BadRequest, root.VismaSignClient.Categories, root.VismaSignClient.Category, root.VismaSignClient.Forbidden, root.VismaSignClient.InternalServerError);
  }
}(this, function(ApiClient, BadRequest, Categories, Category, Forbidden, InternalServerError) {
  'use strict';

  /**
   * Categories service.
   * @module api/CategoriesApi
   * @version 0.0.5
   */

  /**
   * Constructs a new CategoriesApi. 
   * @alias module:api/CategoriesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Creates new category
     * Creates new category
     * @param {module:model/Category} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.createCategoryWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createCategory");
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
        '/category/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creates new category
     * Creates new category
     * @param {module:model/Category} body Payload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.createCategory = function(body) {
      return this.createCategoryWithHttpInfo(body)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Deletes category
     * Deletes category
     * @param {String} categoryId category id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteCategoryWithHttpInfo = function(categoryId) {
      var postBody = null;

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling deleteCategory");
      }


      var pathParams = {
        'categoryId': categoryId
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
        '/category/{categoryId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes category
     * Deletes category
     * @param {String} categoryId category id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteCategory = function(categoryId) {
      return this.deleteCategoryWithHttpInfo(categoryId)
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Gets categories
     * Gets categories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Categories} and HTTP response
     */
    this.getCategoriesWithHttpInfo = function() {
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
      var returnType = Categories;

      return this.apiClient.callApi(
        '/category/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Gets categories
     * Gets categories
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Categories}
     */
    this.getCategories = function() {
      return this.getCategoriesWithHttpInfo()
        .then(function(response_and_data) {
          if (response_and_data.response.statusCode === 201 && response_and_data.response.headers['location']) {
            return {'location': response_and_data.response.headers['location']};
          }
          return response_and_data.data;
        });
    }


    /**
     * Updates category
     * Updates category
     * @param {module:model/Category} body Payload
     * @param {String} categoryId category id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.updateCategoryWithHttpInfo = function(body, categoryId) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateCategory");
      }

      // verify the required parameter 'categoryId' is set
      if (categoryId === undefined || categoryId === null) {
        throw new Error("Missing the required parameter 'categoryId' when calling updateCategory");
      }


      var pathParams = {
        'categoryId': categoryId
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
        '/category/{categoryId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates category
     * Updates category
     * @param {module:model/Category} body Payload
     * @param {String} categoryId category id
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.updateCategory = function(body, categoryId) {
      return this.updateCategoryWithHttpInfo(body, categoryId)
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
