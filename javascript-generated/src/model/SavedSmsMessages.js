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
    define(['ApiClient', 'model/SavedSmsMessage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SavedSmsMessage'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.SavedSmsMessages = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.SavedSmsMessage);
  }
}(this, function(ApiClient, SavedSmsMessage) {
  'use strict';




  /**
   * The SavedSmsMessages model module.
   * @module model/SavedSmsMessages
   * @version 0.0.4
   */

  /**
   * Constructs a new <code>SavedSmsMessages</code>.
   * @alias module:model/SavedSmsMessages
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SavedSmsMessages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedSmsMessages} obj Optional instance to populate.
   * @return {module:model/SavedSmsMessages} The populated <code>SavedSmsMessages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email_messages')) {
        obj['email_messages'] = ApiClient.convertToType(data['email_messages'], [SavedSmsMessage]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SavedSmsMessage>} email_messages
   */
  exports.prototype['email_messages'] = undefined;



  return exports;
}));


