(function() {
"use strict";

angular.module('common', ['ngMessages'])
.constant('ApiPath', "https://guarded-crag-35517.herokuapp.com")
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
