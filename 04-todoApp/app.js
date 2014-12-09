(function(){
  'use strict';

  angular.module("TodoApp",[])
    .controller("TodoAppCtrl",["$scope", function($scope){

      $scope.tasks = angular.fromJson(localStorage.getItem("tasks") || []);

      $scope.getTaskLength = function() {
        return $scope.tasks.length;
      };

      $scope.saveTasksLocal = function() {
        localStorage.setItem('tasks',angular.toJson($scope.tasks));
      };

      $scope.addTask = function() {
        $scope.tasks.push({text: $scope.newTask, done: false});
        $scope.newTask = "";
        $scope.saveTasksLocal();
      };

      $scope.removeCompleteTask = function() {
        var lastTasks = $scope.tasks;
        $scope.tasks = [];

        angular.forEach(lastTasks,function(task){
          if(!task.done) {
            $scope.tasks.push(task);
          }
        });
        $scope.saveTasksLocal();
      };

    }]);

})();