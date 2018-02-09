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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.VismaSignClient);
  }
}(this, function(expect, VismaSignClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new VismaSignClient.InviteeGroups();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InviteeGroups', function() {
    it('should create an instance of InviteeGroups', function() {
      // uncomment below and update the code to test InviteeGroups
      //var instane = new VismaSignClient.InviteeGroups();
      //expect(instance).to.be.a(VismaSignClient.InviteeGroups);
    });

    it('should have the property inviteeGroups (base name: "invitee_groups")', function() {
      // uncomment below and update the code to test the property inviteeGroups
      //var instane = new VismaSignClient.InviteeGroups();
      //expect(instance).to.be();
    });

  });

}));
