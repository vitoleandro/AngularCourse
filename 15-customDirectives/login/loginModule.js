/**
 * Created by leandro on 10/12/14.
 */
(function(){
  "use strict";

  angular.module("loginModule",[])
    .directive("painelDeLogin", [function(){
     // <painel-de-login></painel-de-login>
     // retorna ddo
      return {
        restrict: "EA",
        templateUrl: "login/paineldelogin.html"

      }
    }]);
})();
