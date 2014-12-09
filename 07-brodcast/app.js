(function(){
  "use strict";

  angular.module("broadcastApp",[]);

  angular.module("broadcastApp")
    .controller("Secao1Ctrl", ["$scope", "UserService", function($scope,UserService){

      $scope.total = UserService.pegarTotal();
      $scope.incrementarTotal = function(n) {
        UserService.incrementarTotal(n);
      };

      $scope.$on("ValorModouNoServico", function(){
        $scope.total = UserService.pegarTotal();
      });
    }]);

  angular.module("broadcastApp")
    .controller("Secao2Ctrl", ["$scope","UserService", function($scope,UserService){
      $scope.$on("ValorModouNoServico", function(){
        $scope.total = UserService.pegarTotal();
      });
    }]);

  angular.module("broadcastApp")
    .factory("UserService", ["$rootScope", function($rootScope){

      var total = 10;

      return {
        pegarTotal: function() {
          return total;
        },
        incrementarTotal: function(num) {
          total += num;
          $rootScope.$broadcast("ValorModouNoServico");
        }
      }

    }]);
})();