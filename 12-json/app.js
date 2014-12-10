/**
 * Created by leandro on 10/12/14.
 */
(function(){
  "use strict";

  angular.module("jsonApp",[])
    .controller("MainController",["$scope","$http", function($scope,$http){

      $scope.times = [];

      $scope.carregaJSON = function() {
        $http.get("times.json")
          .then(function(resposta){
            $scope.times = resposta.data;
          });
      };

    }]);
})();
