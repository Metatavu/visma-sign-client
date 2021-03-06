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
    define(['ApiClient', 'model/DocumentFile', 'model/DocumentInvitationStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentFile'), require('./DocumentInvitationStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.VismaSignClient) {
      root.VismaSignClient = {};
    }
    root.VismaSignClient.DocumentStatus = factory(root.VismaSignClient.ApiClient, root.VismaSignClient.DocumentFile, root.VismaSignClient.DocumentInvitationStatus);
  }
}(this, function(ApiClient, DocumentFile, DocumentInvitationStatus) {
  'use strict';




  /**
   * The DocumentStatus model module.
   * @module model/DocumentStatus
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>DocumentStatus</code>.
   * @alias module:model/DocumentStatus
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>DocumentStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentStatus} obj Optional instance to populate.
   * @return {module:model/DocumentStatus} The populated <code>DocumentStatus</code> instance.
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
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('files')) {
        obj['files'] = ApiClient.convertToType(data['files'], [DocumentFile]);
      }
      if (data.hasOwnProperty('invitations')) {
        obj['invitations'] = ApiClient.convertToType(data['invitations'], [DocumentInvitationStatus]);
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
   * @member {module:model/DocumentStatus.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Array.<module:model/DocumentFile>} files
   */
  exports.prototype['files'] = undefined;
  /**
   * @member {Array.<module:model/DocumentInvitationStatus>} invitations
   */
  exports.prototype['invitations'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "new"
     * @const
     */
    "new": "new",
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "signed"
     * @const
     */
    "signed": "signed",
    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted",
    /**
     * value: "cancelled"
     * @const
     */
    "cancelled": "cancelled"  };


  return exports;
}));


