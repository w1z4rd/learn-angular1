(function() {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = ['SignupService'];
  function SignupController(SignupService) {
    const $ctrl = this;

    $ctrl.user = {};
    $ctrl.success = true;
    $ctrl.show = false;

    $ctrl.signup = function() {
      SignupService.signup($ctrl.user)
        .then(function (response) {
          $ctrl.success = true;
          $ctrl.show = true;
        })
        .catch(function (error) {
          console.log(error);
          $ctrl.success = false;
          $ctrl.show = true;
        });
    };
  }
})();
