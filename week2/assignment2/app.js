(function() {
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    const toBuyCtrl = this;

    toBuyCtrl.list = ShoppingListCheckOffService.getToBuy();
    toBuyCtrl.buy = function(index) {
      ShoppingListCheckOffService.buy(index);
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    const alreadyCtrl = this;

    alreadyCtrl.list = ShoppingListCheckOffService.getBought();
  };

  function ShoppingListCheckOffService() {
    const service = this;
    service.toBuy = initialData();
    service.bought = [];

    service.getToBuy = function() {
      return service.toBuy;
    };

    service.getBought = function() {
      return service.bought;
    };

    service.buy = function(index) {
      const item = service.toBuy.splice(index, 1).pop();
      service.bought.push(item);
    };
  };

  function initialData() {
    return [
    {name: "apples", quantity: 10},
    {name: "oranges", quantity: 10},
    {name: "bananas", quantity: 10},
    {name: "mangos", quantity: 10},
    {name: "kiwis", quantity: 10}
    ];
  };
})();
