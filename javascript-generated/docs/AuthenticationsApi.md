# VismaSignClient.AuthenticationsApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuthenticationMethods**](AuthenticationsApi.md#getAuthenticationMethods) | **GET** /auth/methods | Gets authentication methods


<a name="getAuthenticationMethods"></a>
# **getAuthenticationMethods**
> AuthenticationMethods getAuthenticationMethods(opts)

Gets authentication methods

Gets authentication methods

### Example
```javascript
var VismaSignClient = require('visma-sign-client');

var apiInstance = new VismaSignClient.AuthenticationsApi();

var opts = { 
  'includeAllIdProviders': true // Boolean | By default, only Finnish authentication methods are provided. By adding the GET parameter value includeAllIdProviders=true to the request, Nordic authentication methods will also be included in the response.
};
apiInstance.getAuthenticationMethods(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeAllIdProviders** | **Boolean**| By default, only Finnish authentication methods are provided. By adding the GET parameter value includeAllIdProviders&#x3D;true to the request, Nordic authentication methods will also be included in the response. | [optional] 

### Return type

[**AuthenticationMethods**](AuthenticationMethods.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

