/**
 * Created by leandro on 10/12/14.
 */
(function(){
  "use strict";

  angular.module("emitBroadcastApp",[])
    .controller("Controlador1",["$scope","$rootScope", function($scope, $rootScope){
      //  Eventos
      $scope.dispararEventoParaBaixo = function() {
        $rootScope.$broadcast("LimparCampos");
        $rootScope.$broadcast("EventoVindoDeCima");
      };
      $scope.rootScopeDizOi = function(){
        $rootScope.$broadcast("LimparCampos");
        $rootScope.$broadcast("OiDoRootScope");
      };
      $scope.rootScopeMandaLimparCampos = function(){
        $rootScope.$broadcast("LimparCampos");
      };

      // ouvintes
      $scope.$on("EventoVindoDeBaixo",function(){ $scope.mensagem = "Evento vindo de baixo" });
      $scope.$on("LimparCampos",function(){ $scope.mensagem = "Evento vindo de baixo" });
      $scope.$on("OiDoRootScope",function(){ $scope.mensagem = "Oi do rootScope" });
    }])
    //Controlador 1A
    .controller("Controlador1A", ["$scope", function($scope){
      $scope.$on("EventoVindoDeCima",function(){ $scope.mensagem = "Evento vindo de cima" });
      $scope.$on("LimparCampos",function(){ $scope.mensagem = "Evento vindo de baixo" });
      $scope.$on("OiDoRootScope",function(){ $scope.mensagem = "Oi do rootScope" });
    }])
    //Controlador1B
    .controller("Controlador1B", ["$scope","$rootScope", function($scope, $rootScope){
      $scope.$on("EventoVindoDeCima",function(){ $scope.mensagem = "Evento vindo de cima" });
      $scope.$on("LimparCampos",function(){ $scope.mensagem = "Evento vindo de baixo" });
      $scope.$on("OiDoRootScope",function(){ $scope.mensagem = "Oi do rootScope" });

      $scope.disparaEventoParaCima = function(){
        $rootScope.$broadcast("LimparCampos");
        $scope.$emit("EventoVindoDeCima");
      };
    }])
    .controller("Controlador2",["$scope", function($scope){
      $scope.$on("LimparCampos",function(){ $scope.mensagem = "Evento vindo de baixo" });
      $scope.$on("OiDoRootScope",function(){ $scope.mensagem = "Oi do rootScope" });
    }])
    .controller("Controlador3",["$scope", function($scope){
      $scope.$on("LimparCampos",function(){ $scope.mensagem = "Evento vindo de baixo" });
      $scope.$on("OiDoRootScope",function(){ $scope.mensagem = "Oi do rootScope" });
    }])
})();
