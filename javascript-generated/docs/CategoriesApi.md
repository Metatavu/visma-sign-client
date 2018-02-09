# VismaSignClient.CategoriesApi

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCategory**](CategoriesApi.md#createCategory) | **POST** /category/ | Creates new category
[**deleteCategory**](CategoriesApi.md#deleteCategory) | **DELETE** /category/{categoryId} | Deletes category
[**getCategories**](CategoriesApi.md#getCategories) | **GET** /category/ | Gets categories
[**updateCategory**](CategoriesApi.md#updateCategory) | **PATCH** /category/{categoryId} | Updates category


<a name="createCategory"></a>
# **createCategory**
> createCategory(body)

Creates new category

Creates new category

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new VismaSignClient.CategoriesApi();

var body = new VismaSignClient.Category(); // Category | Payload

apiInstance.createCategory(body).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Category**](Category.md)| Payload | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="deleteCategory"></a>
# **deleteCategory**
> deleteCategory(categoryId)

Deletes category

Deletes category

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new VismaSignClient.CategoriesApi();

var categoryId = "categoryId_example"; // String | category id

apiInstance.deleteCategory(categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **String**| category id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCategories"></a>
# **getCategories**
> Categories getCategories()

Gets categories

Gets categories

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new VismaSignClient.CategoriesApi();
apiInstance.getCategories().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Categories**](Categories.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateCategory"></a>
# **updateCategory**
> updateCategory(body, categoryId)

Updates category

Updates category

### Example
```javascript
var VismaSignClient = require('visma-sign-client');
var defaultClient = VismaSignClient.ApiClient.instance;

// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ApiKeyAuth.apiKeyPrefix = 'Token';

var apiInstance = new VismaSignClient.CategoriesApi();

var body = new VismaSignClient.Category(); // Category | Payload

var categoryId = "categoryId_example"; // String | category id

apiInstance.updateCategory(body, categoryId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Category**](Category.md)| Payload | 
 **categoryId** | **String**| category id | 

### Return type

null (empty response body)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

