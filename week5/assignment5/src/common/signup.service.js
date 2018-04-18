(function() {
  angular.module('common')
    .service('SignupService', SignupService);

  SignupService.$inject = ['MenuService'];
  function SignupService(MenuService) {
    const service = this;

    service.user = {};

    service.signup = function (user) {
      const promise = MenuService.getMenuItem(user.item);

      promise.then(function (response) {
        service.user = user;
        service.user.favMenuItem = response;
      });

      return promise;
    };

    service.getUser = function() {
      return service.user;
    };
  }
})();
