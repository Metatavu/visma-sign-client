# VismaSignClient.DocumentsApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelDocument**](DocumentsApi.md#cancelDocument) | **POST** /document/{documentId}/cancel | Cancels document
[**createDocument**](DocumentsApi.md#createDocument) | **POST** /document/ | Creates new document
[**deleteDocument**](DocumentsApi.md#deleteDocument) | **DELETE** /document/{documentId} | Deletes document
[**getDocumentStatus**](DocumentsApi.md#getDocumentStatus) | **GET** /document/{documentId} | Finds document status
[**remindDocumentInvitees**](DocumentsApi.md#remindDocumentInvitees) | **POST** /document/{documentId}/remind | Remaind all document invitees
[**searchDocuments**](DocumentsApi.md#searchDocuments) | **GET** /document/ | Search documents


<a name="cancelDocument"></a>
# **cancelDocument**
> cancelDocument(documentId)

Cancels document

Document must have pending or unsent invites to be cancelled. All attached invites will be cancelled as well

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

var documentId = "documentId_example"; // String | document id

apiInstance.cancelDocument(documentId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| document id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="createDocument"></a>
# **createDocument**
> createDocument(body)

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

apiInstance.createDocument(body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Document**](Document.md)| Payload | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="deleteDocument"></a>
# **deleteDocument**
> deleteDocument(documentId)

Deletes document

A document must be cancelled or signed or have no invitations or signatures to be deleted.

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

var documentId = "documentId_example"; // String | document id

apiInstance.deleteDocument(documentId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| document id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getDocumentStatus"></a>
# **getDocumentStatus**
> DocumentStatus getDocumentStatus(documentId)

Finds document status

Finds document status

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

var documentId = "documentId_example"; // String | document id

apiInstance.getDocumentStatus(documentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| document id | 

### Return type

[**DocumentStatus**](DocumentStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="remindDocumentInvitees"></a>
# **remindDocumentInvitees**
> InlineResponse200 remindDocumentInvitees(documentId)

Remaind all document invitees

Remaind all document invitees

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

var documentId = "documentId_example"; // String | document id

apiInstance.remindDocumentInvitees(documentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **documentId** | **String**| document id | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="searchDocuments"></a>
# **searchDocuments**
> DocumentSearchResult searchDocuments(opts)

Search documents

Search documents

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

var opts = { 
  'category': "category_example", // String | Filter by category UUID. Full match
  'name': "name_example", // String | Filter by document name. Partial matches.
  'uuid': "uuid_example", // String | Filter by document UUID. Full match. Can be a comma-separated list.
  'dateFrom': "dateFrom_example", // String | Filter by document creation date. YYYY-MM-DD, inclusive.
  'dateTo': "dateTo_example", // String | Filter by document creation date. YYYY-MM-DD, inclusive.
  'status': "status_example", // String | Filter by document status. Full match
  'participant': "participant_example", // String | Filter by invitee email, invitee phone number or signer name. Partial matches.
  'sortBy': "sortBy_example", // String | Set sort field. Valid choices are created_on (default) and name.
  'sortOder': "sortOder_example", // String | Set sort order. Valid choices are DESC and ASC. Defaults to newest first / alphabetical.
  'offset': 789 // Number | Start at this document number.
};
apiInstance.searchDocuments(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| Filter by category UUID. Full match | [optional] 
 **name** | **String**| Filter by document name. Partial matches. | [optional] 
 **uuid** | **String**| Filter by document UUID. Full match. Can be a comma-separated list. | [optional] 
 **dateFrom** | **String**| Filter by document creation date. YYYY-MM-DD, inclusive. | [optional] 
 **dateTo** | **String**| Filter by document creation date. YYYY-MM-DD, inclusive. | [optional] 
 **status** | **String**| Filter by document status. Full match | [optional] 
 **participant** | **String**| Filter by invitee email, invitee phone number or signer name. Partial matches. | [optional] 
 **sortBy** | **String**| Set sort field. Valid choices are created_on (default) and name. | [optional] 
 **sortOder** | **String**| Set sort order. Valid choices are DESC and ASC. Defaults to newest first / alphabetical. | [optional] 
 **offset** | **Number**| Start at this document number. | [optional] 

### Return type

[**DocumentSearchResult**](DocumentSearchResult.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

