(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

// LIST #1 - controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.buyItemsList();

  list1.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }

  list1.isEmpty = function() {
      return !list1.items.length;
  }
}


// LIST #2 - controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.boughtItemsList();

  list2.isEmpty = function() {
      return !list2.items.length;
  }
}


function ShoppingListCheckOffService () {
  
  var service = this;
  var itemsToBuy =  [
                      {name: "Cookies", quantity: 10},
                      {name: "Milk", quantity: 2},
                      {name: "Donuts", quantity: 4},
                      {name: "Chocolate", quantity: 5},
                      {name: "Peanut Butter", quantity: 5},
                      {name: "Pepto Bismol", quantity: 4}
                    ]

  var boughtItems = [];

  service.buyItem = function (itemIndex) {
    boughtItems.push(itemsToBuy.splice(itemIndex, 1)[0]);
  };


  service.buyItemsList = function () {
    return itemsToBuy;
  };

  service.boughtItemsList = function () {
    return boughtItems;
  };
}

})();
