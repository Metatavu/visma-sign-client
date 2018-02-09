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
    define(['ApiClient', 'model/SavedEmailMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SavedEmailMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.SavedEmailMessages = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.SavedEmailMessage);
  }
}(this, function(ApiClient, SavedEmailMessage) {
  'use strict';




  /**
   * The SavedEmailMessages model module.
   * @module model/SavedEmailMessages
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>SavedEmailMessages</code>.
   * @alias module:model/SavedEmailMessages
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SavedEmailMessages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedEmailMessages} obj Optional instance to populate.
   * @return {module:model/SavedEmailMessages} The populated <code>SavedEmailMessages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email_messages')) {
        obj['email_messages'] = ApiClient.convertToType(data['email_messages'], [SavedEmailMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SavedEmailMessage>} email_messages
   */
  exports.prototype['email_messages'] = undefined;



  return exports;
}));

