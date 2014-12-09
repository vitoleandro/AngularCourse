/**
 * Created by Leandro Vitor on 08/12/14.
 */
(function(){
  'use strict';

  angular.module("shoppingCart", [])
    .controller("CartCtrl", ["$scope",function($scope){

      $scope.items = [
        { "titulo": "Calça Jeans", "quantidade": 10, "preco": 100 },
        { "titulo": "Camiseta", "quantidade": 5, "preco": 100 },
        { "titulo": "Tênis", "quantidade": 2, "preco": 100 }
      ];

      $scope.remove = function(index) {
        $scope.items.splice(index, 1);
      };

      $scope.getTotal = function() {
        var total = 0;
        angular.forEach($scope.items, function(item) {
          total += (item.preco * item.quantidade);
        });
        return total;
      };

    }]);

})();
