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
    root.VismaSignClient.InviteeGroupEntry = factory(root.VismaSignClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InviteeGroupEntry model module.
   * @module model/InviteeGroupEntry
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>InviteeGroupEntry</code>.
   * @alias module:model/InviteeGroupEntry
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InviteeGroupEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InviteeGroupEntry} obj Optional instance to populate.
   * @return {module:model/InviteeGroupEntry} The populated <code>InviteeGroupEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('email_address')) {
        obj['email_address'] = ApiClient.convertToType(data['email_address'], 'String');
      }
      if (data.hasOwnProperty('msisdn')) {
        obj['msisdn'] = ApiClient.convertToType(data['msisdn'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} email_address
   */
  exports.prototype['email_address'] = undefined;
  /**
   * @member {String} msisdn
   */
  exports.prototype['msisdn'] = undefined;



  return exports;
}));


