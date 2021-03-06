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
    root.VismaSignClient.InvitationFullfillment = factory(root.VismaSignClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvitationFullfillment model module.
   * @module model/InvitationFullfillment
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>InvitationFullfillment</code>.
   * @alias module:model/InvitationFullfillment
   * @class
   * @param returnUrl {String} User will be returned to this url after signing.
   * @param identifier {String} The SSN of the person who is signing.
   * @param authService {String} The identifier of an authentication method.
   */
  var exports = function(returnUrl, identifier, authService) {
    var _this = this;

    _this['returnUrl'] = returnUrl;
    _this['identifier'] = identifier;
    _this['authService'] = authService;
  };

  /**
   * Constructs a <code>InvitationFullfillment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvitationFullfillment} obj Optional instance to populate.
   * @return {module:model/InvitationFullfillment} The populated <code>InvitationFullfillment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('returnUrl')) {
        obj['returnUrl'] = ApiClient.convertToType(data['returnUrl'], 'String');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('authService')) {
        obj['authService'] = ApiClient.convertToType(data['authService'], 'String');
      }
    }
    return obj;
  }

  /**
   * User will be returned to this url after signing.
   * @member {String} returnUrl
   */
  exports.prototype['returnUrl'] = undefined;
  /**
   * The SSN of the person who is signing.
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * The identifier of an authentication method.
   * @member {String} authService
   */
  exports.prototype['authService'] = undefined;



  return exports;
}));


