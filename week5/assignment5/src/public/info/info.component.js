(function () {
  "use strict";

  angular.module('public')
    .component('myInfo', {
      templateUrl: 'src/public/info/info.html',
      bindings: {
        user: '<'
      },
      controller: InfoController
    });

  InfoController.$inject = ['SignupService'];
  function InfoController(SignupService) {
    const $ctrl = this;

    $ctrl.user = SignupService.getUser();
  }

})();
