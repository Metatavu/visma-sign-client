# visma-sign-client

VismaSignClient - JavaScript client for visma-sign-client
Swagger documentation for Visma-Sign API.
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install visma-sign-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your visma-sign-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('visma-sign-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var VismaSignClient = require('visma-sign-client');

var api = new VismaSignClient.AuthenticationsApi()

var opts = { 
  'includeAllIdProviders': true // {Boolean} By default, only Finnish authentication methods are provided. By adding the GET parameter value includeAllIdProviders=true to the request, Nordic authentication methods will also be included in the response.
};
api.getAuthenticationMethods(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://www.onnistuu.fi/api/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*VismaSignClient.AuthenticationsApi* | [**getAuthenticationMethods**](docs/AuthenticationsApi.md#getAuthenticationMethods) | **GET** /auth/methods | Gets authentication methods
*VismaSignClient.CategoriesApi* | [**createCategory**](docs/CategoriesApi.md#createCategory) | **POST** /category/ | Creates new category
*VismaSignClient.CategoriesApi* | [**deleteCategory**](docs/CategoriesApi.md#deleteCategory) | **DELETE** /category/{categoryId} | Deletes category
*VismaSignClient.CategoriesApi* | [**getCategories**](docs/CategoriesApi.md#getCategories) | **GET** /category/ | Gets categories
*VismaSignClient.CategoriesApi* | [**updateCategory**](docs/CategoriesApi.md#updateCategory) | **PATCH** /category/{categoryId} | Updates category
*VismaSignClient.DocumentsApi* | [**cancelDocument**](docs/DocumentsApi.md#cancelDocument) | **POST** /document/{documentId}/cancel | Cancels document
*VismaSignClient.DocumentsApi* | [**createDocument**](docs/DocumentsApi.md#createDocument) | **POST** /document/ | Creates new document
*VismaSignClient.DocumentsApi* | [**deleteDocument**](docs/DocumentsApi.md#deleteDocument) | **DELETE** /document/{documentId} | Deletes document
*VismaSignClient.DocumentsApi* | [**getDocumentStatus**](docs/DocumentsApi.md#getDocumentStatus) | **GET** /document/{documentId} | Finds document status
*VismaSignClient.DocumentsApi* | [**remindDocumentInvitees**](docs/DocumentsApi.md#remindDocumentInvitees) | **POST** /document/{documentId}/remind | Remaind all document invitees
*VismaSignClient.DocumentsApi* | [**searchDocuments**](docs/DocumentsApi.md#searchDocuments) | **GET** /document/ | Search documents
*VismaSignClient.FilesApi* | [**addDocumentFile**](docs/FilesApi.md#addDocumentFile) | **POST** /document/{documentId}/files | Adds file to document
*VismaSignClient.FilesApi* | [**getDocumentFile**](docs/FilesApi.md#getDocumentFile) | **GET** /document/{documentId}/files/{fileIndex} | Finds document file
*VismaSignClient.InvitationsApi* | [**createDocumentInvitation**](docs/InvitationsApi.md#createDocumentInvitation) | **POST** /document/{documentId}/invitations | Create invitations for document
*VismaSignClient.InvitationsApi* | [**fullfillInvitation**](docs/InvitationsApi.md#fullfillInvitation) | **POST** /invitation/{invitationId}/signature | Fulfills invitation
*VismaSignClient.InvitationsApi* | [**getInvitationStatus**](docs/InvitationsApi.md#getInvitationStatus) | **GET** /invitation/{invitationId} | Finds invitation status
*VismaSignClient.InvitationsApi* | [**remindSingleInvitee**](docs/InvitationsApi.md#remindSingleInvitee) | **POST** /invitation/{invitationId}/remind | Reminds single invitee
*VismaSignClient.InviteeGroupsApi* | [**getInviteeGroups**](docs/InviteeGroupsApi.md#getInviteeGroups) | **GET** /invitee-group/ | Gets invitee groups
*VismaSignClient.SavedInvitationMessagesApi* | [**getSavedEmailMessages**](docs/SavedInvitationMessagesApi.md#getSavedEmailMessages) | **GET** /saved-invitation-message/email/ | Gets saved email messages
*VismaSignClient.SavedInvitationMessagesApi* | [**getSavedSmsMessages**](docs/SavedInvitationMessagesApi.md#getSavedSmsMessages) | **GET** /saved-invitation-message/sms/ | Gets saved sms messages


## Documentation for Models

 - [VismaSignClient.Affiliate](docs/Affiliate.md)
 - [VismaSignClient.AuthenticationMethod](docs/AuthenticationMethod.md)
 - [VismaSignClient.AuthenticationMethods](docs/AuthenticationMethods.md)
 - [VismaSignClient.BadRequest](docs/BadRequest.md)
 - [VismaSignClient.Categories](docs/Categories.md)
 - [VismaSignClient.Category](docs/Category.md)
 - [VismaSignClient.Document](docs/Document.md)
 - [VismaSignClient.DocumentDocument](docs/DocumentDocument.md)
 - [VismaSignClient.DocumentFile](docs/DocumentFile.md)
 - [VismaSignClient.DocumentInvitationStatus](docs/DocumentInvitationStatus.md)
 - [VismaSignClient.DocumentSearchResult](docs/DocumentSearchResult.md)
 - [VismaSignClient.DocumentStatus](docs/DocumentStatus.md)
 - [VismaSignClient.Forbidden](docs/Forbidden.md)
 - [VismaSignClient.InlineResponse200](docs/InlineResponse200.md)
 - [VismaSignClient.InternalServerError](docs/InternalServerError.md)
 - [VismaSignClient.InvitationCreate](docs/InvitationCreate.md)
 - [VismaSignClient.InvitationCreateInviter](docs/InvitationCreateInviter.md)
 - [VismaSignClient.InvitationCreateMessages](docs/InvitationCreateMessages.md)
 - [VismaSignClient.InvitationCreateOrder](docs/InvitationCreateOrder.md)
 - [VismaSignClient.InvitationCreateResponse](docs/InvitationCreateResponse.md)
 - [VismaSignClient.InvitationFullfillment](docs/InvitationFullfillment.md)
 - [VismaSignClient.InvitationStatus](docs/InvitationStatus.md)
 - [VismaSignClient.InvitationStatusDocument](docs/InvitationStatusDocument.md)
 - [VismaSignClient.InviteeGroup](docs/InviteeGroup.md)
 - [VismaSignClient.InviteeGroupEntry](docs/InviteeGroupEntry.md)
 - [VismaSignClient.InviteeGroups](docs/InviteeGroups.md)
 - [VismaSignClient.NotFound](docs/NotFound.md)
 - [VismaSignClient.NotImplemented](docs/NotImplemented.md)
 - [VismaSignClient.SavedEmailMessage](docs/SavedEmailMessage.md)
 - [VismaSignClient.SavedEmailMessages](docs/SavedEmailMessages.md)
 - [VismaSignClient.SavedSmsMessage](docs/SavedSmsMessage.md)
 - [VismaSignClient.SavedSmsMessages](docs/SavedSmsMessages.md)


## Documentation for Authorization


### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header
