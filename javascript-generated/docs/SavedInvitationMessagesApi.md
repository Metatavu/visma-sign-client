# VismaSignClient.SavedInvitationMessagesApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSavedEmailMessages**](SavedInvitationMessagesApi.md#getSavedEmailMessages) | **GET** /saved-invitation-message/email/ | Gets saved email messages
[**getSavedSmsMessages**](SavedInvitationMessagesApi.md#getSavedSmsMessages) | **GET** /saved-invitation-message/sms/ | Gets saved sms messages


<a name="getSavedEmailMessages"></a>
# **getSavedEmailMessages**
> SavedEmailMessages getSavedEmailMessages()

Gets saved email messages

Gets saved email messages

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.clientId = 'YOUR CLIENT ID';
ApiKeyAuth.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.SavedInvitationMessagesApi();
apiInstance.getSavedEmailMessages().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SavedEmailMessages**](SavedEmailMessages.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getSavedSmsMessages"></a>
# **getSavedSmsMessages**
> SavedSmsMessages getSavedSmsMessages()

Gets saved sms messages

Gets saved sms messages

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.clientId = 'YOUR CLIENT ID';
ApiKeyAuth.clientSecret = 'YOUR CLIENT SECRET';

var apiInstance = new VismaSignClient.SavedInvitationMessagesApi();
apiInstance.getSavedSmsMessages().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**SavedSmsMessages**](SavedSmsMessages.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

