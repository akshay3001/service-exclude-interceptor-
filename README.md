# Interceptors

This repo explains how to exclude single service from getting intercepted. It makes use of HttpBackend class of Angular.

Interceptors sit between the HttpClient interface and the HttpBackend.

When injected, HttpBackend dispatches requests directly to the backend, without going through the interceptor chain. (Taken from Angular.io official documentation) 

Reference - 
https://angular.io/api/common/http/HttpBackend

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-q6xasx)
