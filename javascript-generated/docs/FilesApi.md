# VismaSignClient.FilesApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addDocumentFile**](FilesApi.md#addDocumentFile) | **POST** /document/{documentId}/files | Adds file to document
[**getDocumentFile**](FilesApi.md#getDocumentFile) | **GET** /document/{documentId}/files/{fileIndex} | Finds document file


<a name="addDocumentFile"></a>
# **addDocumentFile**
> addDocumentFile(body, documentId, opts)

Adds file to document

Adds file to document

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure authorization
defaultClient.clientId = 'YOUR CLIENT ID';
defaultClient.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.FilesApi();

var body = B; // Blob | Payload

var documentId = "documentId_example"; // String | document id

var opts = { 
  'filename': "filename_example" // String | filename for the file
};
apiInstance.addDocumentFile(body, documentId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Blob**| Payload | 
 **documentId** | **String**| document id | 
 **filename** | **String**| filename for the file | [optional] 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/pdf
 - **Accept**: application/json;charset=utf-8

<a name="getDocumentFile"></a>
# **getDocumentFile**
> &#39;Blob&#39; getDocumentFile(documentId, fileIndex)

Finds document file

Finds document file

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure authorization
defaultClient.clientId = 'YOUR CLIENT ID';
defaultClient.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.FilesApi();

var documentId = "documentId_example"; // String | document id

var fileIndex = 56; // Number | file index

apiInstance.getDocumentFile(documentId, fileIndex).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| document id | 
 **fileIndex** | **Number**| file index | 

### Return type

**&#39;Blob&#39;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/pdf

