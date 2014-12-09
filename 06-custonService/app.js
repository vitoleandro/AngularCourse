(function(){
  'use strict';

  angular.module("CustonService",[]);

  angular.module("CustonService")
    .controller("Controller1", ["$scope","UserService", function($scope,UserService){
      $scope.getMensagem = function() {
        return UserService.getMensagem()
      }
    }]);

  angular.module("CustonService")
    .controller("Controller2", ["$scope","UserService", function($scope,UserService){
      $scope.getMensagem = function() {
        return UserService.getMensagem()
      }
    }]);

    angular.module("CustonService")
      .controller("ServicoSetterCtrl", ["$scope","UserService", function($scope, UserService){

        $scope.setMensagem = function() {
          UserService.setMensagem($scope.novaMensagem);
        };

      }]);

    angular.module("CustonService")
      .factory("UserService", function(){
        var mensagem = 'Olá!';

        function getMensagem() {
          return mensagem;
        }

        function setMensagem(msg) {
          mensagem = msg;
        }

        return {
          getMensagem: getMensagem,
          setMensagem: setMensagem
        }
      });
})();