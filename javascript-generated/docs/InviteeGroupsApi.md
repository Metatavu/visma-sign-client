# VismaSignClient.InviteeGroupsApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getInviteeGroups**](InviteeGroupsApi.md#getInviteeGroups) | **GET** /invitee-group/ | Gets invitee groups


<a name="getInviteeGroups"></a>
# **getInviteeGroups**
> InviteeGroups getInviteeGroups()

Gets invitee groups

Gets invitee groups

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new VismaSignClient.InviteeGroupsApi();
apiInstance.getInviteeGroups().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InviteeGroups**](InviteeGroups.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

