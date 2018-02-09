# VismaSignClient.DocumentsApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocument**](DocumentsApi.md#createDocument) | **POST** /document/ | Creates new document


<a name="createDocument"></a>
# **createDocument**
> createDocument(body, opts)

Creates new document

Creates new document

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new VismaSignClient.DocumentsApi();

var body = new VismaSignClient.Document(); // Document | Payload

var opts = { 
  'contentMD5': "contentMD5_example", // String | 
  '_date': "_date_example" // String | 
};
apiInstance.createDocument(body, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Document**](Document.md)| Payload | 
 **contentMD5** | **String**|  | [optional] 
 **_date** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

