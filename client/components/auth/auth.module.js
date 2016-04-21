'use strict';

angular.module('coursePlannerApp.auth', [
  'coursePlannerApp.constants',
  'coursePlannerApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
