/**
 * Created by leandro on 09/12/14.
 */
(function(){
  "use strict";

  angular.module("RoutingApp",["ngRoute"])
    .config(["$routeProvider", function($routeProvider){
      $routeProvider
        .when("/pagina1", {
          controller: "Pagina1Ctrl",
          templateUrl: "partials/pagina1.html"
        })
        .when("/pagina1/:nome", {
          controller: "Pagina1Ctrl",
          templateUrl: "partials/pagina1.html"
        })
        .when("/pagina2", {
          controller: "Pagina2Ctrl",
          templateUrl: "partials/pagina2.html"
        })
        .when("/pagina2/:nome", {
          controller: "Pagina2Ctrl",
          templateUrl: "partials/pagina2.html"
        })
        .when("/pagina3", {
          controller: "Pagina3Ctrl",
          templateUrl: "partials/pagina3.html"
        })
        .when("/pagina3/:nome", {
          controller: "Pagina3Ctrl",
          templateUrl: "partials/pagina3.html"
        })
        .otherwise('/pagina1');
    }]);

  angular.module("RoutingApp")
    .controller("Pagina1Ctrl", ["$scope", "$routeParams", function($scope, $routeParams){
      $scope.nome = $routeParams.nome;
    }]);

  angular.module("RoutingApp")
    .controller("Pagina2Ctrl", ["$scope", "$routeParams", function($scope, $routeParams){
      $scope.nome = $routeParams.nome;
    }]);

  angular.module("RoutingApp")
    .controller("Pagina3Ctrl", ["$scope", "$routeParams", function($scope, $routeParams){
      $scope.nome = $routeParams.nome;
    }]);

})();
