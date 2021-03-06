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
    define(['ApiClient', 'model/InviteeGroupEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InviteeGroupEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.InviteeGroup = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.InviteeGroupEntry);
  }
}(this, function(ApiClient, InviteeGroupEntry) {
  'use strict';




  /**
   * The InviteeGroup model module.
   * @module model/InviteeGroup
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>InviteeGroup</code>.
   * @alias module:model/InviteeGroup
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>InviteeGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InviteeGroup} obj Optional instance to populate.
   * @return {module:model/InviteeGroup} The populated <code>InviteeGroup</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [InviteeGroupEntry]);
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/InviteeGroupEntry>} entries
   */
  exports.prototype['entries'] = undefined;



  return exports;
}));


