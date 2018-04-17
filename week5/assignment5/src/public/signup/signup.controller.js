(function() {
  "use strict";

  angular.module('public')
    .controller('SignupController', SignupController);

  SignupController.$inject = [];
  function SignupController() {
    const $ctrl = this;

    $ctrl.user = {};

    $ctrl.signup = function() {
      console.log($ctrl.user);
    }
  };
})();
