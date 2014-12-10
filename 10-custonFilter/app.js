/**
 * Created by leandro on 10/12/14.
 */
(function(){
  "use strict";

  angular.module("customFilter",["ngSanitize"])
    .controller("ListaController", ["$scope", function($scope){
      $scope.tarefas = [
        {text: "aprender x", status: "feito"},
        {text: "aprender y", status: "fazendo"},
        {text: "aprender c", status: "feito"},
        {text: "aprender v", status: "fazendo"}
      ];

      $scope.adicionarTarefa = function() {
        $scope.tarefas.push({text: $scope.novaTarefa, status: "fazendo"});
      };
    }]);

  // filter que retorna uma funcao que retorna um valor
  angular.module("customFilter")
    .filter("estaFeito", [function(){
      return function(value,status){
        if(status === "feito"){
          return "<strong>"+ valor +"</strong>" "<span class='label label-success'>" + status + "</span>";
        }else if(status === "fazendo") {
          return "<strong>"+ valor +"</strong>" "<span class='label label-warning'>" + status + "</span>";
        }
      }
    }]);
})();
