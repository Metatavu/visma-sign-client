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
    root.VismaSignClient.SavedSmsMessage = factory(root.VismaSignClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SavedSmsMessage model module.
   * @module model/SavedSmsMessage
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>SavedSmsMessage</code>.
   * @alias module:model/SavedSmsMessage
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SavedSmsMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SavedSmsMessage} obj Optional instance to populate.
   * @return {module:model/SavedSmsMessage} The populated <code>SavedSmsMessage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('edited_on')) {
        obj['edited_on'] = ApiClient.convertToType(data['edited_on'], 'String');
      }
      if (data.hasOwnProperty('edited_by')) {
        obj['edited_by'] = ApiClient.convertToType(data['edited_by'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} edited_on
   */
  exports.prototype['edited_on'] = undefined;
  /**
   * @member {String} edited_by
   */
  exports.prototype['edited_by'] = undefined;



  return exports;
}));


