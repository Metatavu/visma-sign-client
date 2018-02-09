# VismaSignClient.InvitationsApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDocumentInvitation**](InvitationsApi.md#createDocumentInvitation) | **POST** /document/{documentId}/invitations | Create invitations for document
[**fullfillInvitation**](InvitationsApi.md#fullfillInvitation) | **POST** /invitation/{invitationId}/signature | Fulfills invitation
[**getInvitationStatus**](InvitationsApi.md#getInvitationStatus) | **GET** /invitation/{invitationId} | Finds invitation status
[**remindSingleInvitee**](InvitationsApi.md#remindSingleInvitee) | **POST** /invitation/{invitationId}/remind | Reminds single invitee


<a name="createDocumentInvitation"></a>
# **createDocumentInvitation**
> [InvitationCreateResponse] createDocumentInvitation(body, documentId)

Create invitations for document

Create invitations for document

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure authorization
defaultClient.clientId = 'YOUR CLIENT ID';
defaultClient.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.InvitationsApi();

var body = [new VismaSignClient.InvitationCreate()]; // [InvitationCreate] | Payload

var documentId = "documentId_example"; // String | document id

apiInstance.createDocumentInvitation(body, documentId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[InvitationCreate]**](InvitationCreate.md)| Payload | 
 **documentId** | **String**| document id | 

### Return type

[**[InvitationCreateResponse]**](InvitationCreateResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="fullfillInvitation"></a>
# **fullfillInvitation**
> fullfillInvitation(body, invitationId)

Fulfills invitation

Fulfills invitation

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure authorization
defaultClient.clientId = 'YOUR CLIENT ID';
defaultClient.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.InvitationsApi();

var body = new VismaSignClient.InvitationFullfillment(); // InvitationFullfillment | Payload

var invitationId = "invitationId_example"; // String | invitation id

apiInstance.fullfillInvitation(body, invitationId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**InvitationFullfillment**](InvitationFullfillment.md)| Payload | 
 **invitationId** | **String**| invitation id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getInvitationStatus"></a>
# **getInvitationStatus**
> InvitationStatus getInvitationStatus(invitationId)

Finds invitation status

Finds invitation status

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure authorization
defaultClient.clientId = 'YOUR CLIENT ID';
defaultClient.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.InvitationsApi();

var invitationId = "invitationId_example"; // String | invitation id

apiInstance.getInvitationStatus(invitationId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitationId** | **String**| invitation id | 

### Return type

[**InvitationStatus**](InvitationStatus.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="remindSingleInvitee"></a>
# **remindSingleInvitee**
> remindSingleInvitee(invitationId)

Reminds single invitee

Reminds single invitee

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure authorization
defaultClient.clientId = 'YOUR CLIENT ID';
defaultClient.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.InvitationsApi();

var invitationId = "invitationId_example"; // String | invitation id

apiInstance.remindSingleInvitee(invitationId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invitationId** | **String**| invitation id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

