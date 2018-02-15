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
    define(['ApiClient', 'model/AuthenticationMethod'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AuthenticationMethod'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.AuthenticationMethods = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.AuthenticationMethod);
  }
}(this, function(ApiClient, AuthenticationMethod) {
  'use strict';




  /**
   * The AuthenticationMethods model module.
   * @module model/AuthenticationMethods
   * @version 0.0.5
   */

  /**
   * Constructs a new <code>AuthenticationMethods</code>.
   * @alias module:model/AuthenticationMethods
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AuthenticationMethods</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationMethods} obj Optional instance to populate.
   * @return {module:model/AuthenticationMethods} The populated <code>AuthenticationMethods</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('methods')) {
        obj['methods'] = ApiClient.convertToType(data['methods'], [AuthenticationMethod]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AuthenticationMethod>} methods
   */
  exports.prototype['methods'] = undefined;



  return exports;
}));


