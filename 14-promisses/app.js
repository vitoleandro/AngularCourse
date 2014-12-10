(function(){
  "use strict";

  angular.module("promisesApp",[])
    .controller("PromisesCtrl",["$scope", "UserService", function($scope, UserService){
      $scope.buscarDados = function() {
        UserService.buscarUsuarios()
          .then(
          function(dados){
            alert("usuarios: "+ dados);
          },
          function(erro){
            alert("erro: "+ erro);
          });
      }
    }])
    .factory("UserService",["$q", function($q){

      function buscarUsuarios() {

        var retorno = $q.defer();

        setTimeout(function(){
          retorno.resolve("lista de usuarios");
        },2000);

        return retorno.promise;
      }

      return {
        buscarUsuarios: buscarUsuarios
      }
    }]);


})();