(function(){
  "use strict";

  angular.module("customDirectivesApp",["loginModule", "mensagemModule"])
    .controller("AppController",["$scope", function($scope){
      $scope.alertar = function() {
        alert("controller");
      }
    }]);

})();