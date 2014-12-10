/**
 * Created by leandro on 10/12/14.
 */
(function(){
  "use strict";

  angular.module("mensagemModule",[])
    .directive("btMensagem", [function(){
      return {
        restrict: "E",
        transclude: true,
        scope: {
          titulo: "@",
          alertar: "&"
        },
        template: "<h3>{{titulo}}</h3><p ng-transclude></p><button ng-click='alertar()'>Alertar</button>"
      }
    }]);
})();
