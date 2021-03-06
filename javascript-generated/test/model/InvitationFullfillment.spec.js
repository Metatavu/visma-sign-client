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
    instance = new VismaSignClient.InvitationFullfillment();
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

  describe('InvitationFullfillment', function() {
    it('should create an instance of InvitationFullfillment', function() {
      // uncomment below and update the code to test InvitationFullfillment
      //var instane = new VismaSignClient.InvitationFullfillment();
      //expect(instance).to.be.a(VismaSignClient.InvitationFullfillment);
    });

    it('should have the property returnUrl (base name: "returnUrl")', function() {
      // uncomment below and update the code to test the property returnUrl
      //var instane = new VismaSignClient.InvitationFullfillment();
      //expect(instance).to.be();
    });

    it('should have the property identifier (base name: "identifier")', function() {
      // uncomment below and update the code to test the property identifier
      //var instane = new VismaSignClient.InvitationFullfillment();
      //expect(instance).to.be();
    });

    it('should have the property authService (base name: "authService")', function() {
      // uncomment below and update the code to test the property authService
      //var instane = new VismaSignClient.InvitationFullfillment();
      //expect(instance).to.be();
    });

  });

}));
