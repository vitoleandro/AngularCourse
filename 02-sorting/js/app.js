(function () {
  'use strict';

  angular.module('abListaCarros', ['ngMaterial']);

  angular.module('abListaCarros')
    .controller("ListaCtrl",['$scope',function($scope){

       $scope.carros = [
         {
          'model': 'BMW X3',
          'price': '41000'
         },
         {
           'model': 'RANGE ROVER EVOQUE',
           'price': '56000'
         },
         {
           'model': 'MITSUBISHI ASX',
           'price': '54000'
         },
         {
           'model': 'INFINITI FX35',
           'price': '54000'
         },
         {
           'model': 'TOYOTA TUNDRA',
           'price': '38000'
         },
         {
           'model': 'VW KONBI',
           'price': '15000'
         },
         {
           'model': 'FORD RANGE',
           'price': '38000'
         }
       ];

    }]);

}());