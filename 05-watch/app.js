/**
 * Created by Leandro on 09/12/14.
 */
(function(){
  'use strict';

  angular.module("CalculatorApp",[])
    .controller("CalcCtrl",["$scope", function($scope){
      $scope.price = 100;
      $scope.desconto = 0;
      $scope.finalValue = 0;

      $scope.watcher;
      $scope.isWatching = false;

      $scope.startWatch = function(){
        $scope.isWatching = true;
        $scope.watcher = $scope.$watch('desconto', $scope.changeDesconto)
      };

      $scope.stopWatch = function() {
        $scope.isWatching = false;
        $scope.watcher();
      };

      $scope.changeDesconto = function(newValue, oldValue){
        if(newValue != oldValue) {
          console.log("Alterado de " + oldValue + " para "+ newValue);
          $scope.finalValue = $scope.price - ($scope.price*($scope.desconto/100));
        }
      };

    }]);
})();
