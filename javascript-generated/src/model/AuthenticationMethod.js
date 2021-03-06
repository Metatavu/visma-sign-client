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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.AuthenticationMethod = factory(root.VismaSignClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AuthenticationMethod model module.
   * @module model/AuthenticationMethod
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>AuthenticationMethod</code>.
   * @alias module:model/AuthenticationMethod
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>AuthenticationMethod</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthenticationMethod} obj Optional instance to populate.
   * @return {module:model/AuthenticationMethod} The populated <code>AuthenticationMethod</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} image
   */
  exports.prototype['image'] = undefined;



  return exports;
}));


