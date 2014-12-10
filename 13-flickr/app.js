(function () {
  'use strict';

  angular.module('flickrApp', ['ngMaterial']);

  angular.module('flickrApp')
    .controller("ListaCtrl",['$scope','$http',function($scope,$http){

      $scope.buscando = false;
      $scope.valorBusca = "";
      $scope.resultado = [];

      $scope.buscar = function() {
        $scope.buscando = true;

        $http({
          method: 'GET',
          url: "https://api.flickr.com/services/rest",
          params: {
            method: "flickr.photos.search",
            api_key: "035a1aba3cb73680674d19916a8d0051",
            text: $scope.valorBusca,
            format: "json",
            nojsoncallback: 1
          }
        }).success(function(data){
          $scope.buscando = false;
          $scope.resultado = data;
        }).error(function(error){
          $scope.buscando = false;
          console.error(error);
        });

      }

    }]);
}());