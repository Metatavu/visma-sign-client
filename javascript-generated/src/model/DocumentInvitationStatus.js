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
    root.VismaSignClient.DocumentInvitationStatus = factory(root.VismaSignClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocumentInvitationStatus model module.
   * @module model/DocumentInvitationStatus
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>DocumentInvitationStatus</code>.
   * @alias module:model/DocumentInvitationStatus
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DocumentInvitationStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentInvitationStatus} obj Optional instance to populate.
   * @return {module:model/DocumentInvitationStatus} The populated <code>DocumentInvitationStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('passphrase')) {
        obj['passphrase'] = ApiClient.convertToType(data['passphrase'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('sms')) {
        obj['sms'] = ApiClient.convertToType(data['sms'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {module:model/DocumentInvitationStatus.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} passphrase
   */
  exports.prototype['passphrase'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} sms
   */
  exports.prototype['sms'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "waiting-for-send"
     * @const
     */
    "waiting-for-send": "waiting-for-send",
    /**
     * value: "sending"
     * @const
     */
    "sending": "sending",
    /**
     * value: "new"
     * @const
     */
    "new": "new",
    /**
     * value: "opened"
     * @const
     */
    "opened": "opened",
    /**
     * value: "signed"
     * @const
     */
    "signed": "signed",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"  };


  return exports;
}));


