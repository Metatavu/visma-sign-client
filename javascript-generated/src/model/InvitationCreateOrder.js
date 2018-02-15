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
    root.VismaSignClient.InvitationCreateOrder = factory(root.VismaSignClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InvitationCreateOrder model module.
   * @module model/InvitationCreateOrder
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>InvitationCreateOrder</code>.
   * @alias module:model/InvitationCreateOrder
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InvitationCreateOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InvitationCreateOrder} obj Optional instance to populate.
   * @return {module:model/InvitationCreateOrder} The populated <code>InvitationCreateOrder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Number');
      }
      if (data.hasOwnProperty('require_before_sending_next_invitations')) {
        obj['require_before_sending_next_invitations'] = ApiClient.convertToType(data['require_before_sending_next_invitations'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Number} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {Boolean} require_before_sending_next_invitations
   */
  exports.prototype['require_before_sending_next_invitations'] = undefined;



  return exports;
}));


