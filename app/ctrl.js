angular.module('directive')
.controller('homeCtrl', function($scope){
  $scope.info = "Here it is~";
  $scope.ghost = function(x, y){
    console.log(x, y);
  };
});
