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
    define(['ApiClient', 'model/DocumentInvitationStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentInvitationStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.Categories = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.DocumentInvitationStatus);
  }
}(this, function(ApiClient, DocumentInvitationStatus) {
  'use strict';




  /**
   * The Categories model module.
   * @module model/Categories
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>Categories</code>.
   * @alias module:model/Categories
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Categories</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Categories} obj Optional instance to populate.
   * @return {module:model/Categories} The populated <code>Categories</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('categories')) {
        obj['categories'] = ApiClient.convertToType(data['categories'], [DocumentInvitationStatus]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/DocumentInvitationStatus>} categories
   */
  exports.prototype['categories'] = undefined;



  return exports;
}));


