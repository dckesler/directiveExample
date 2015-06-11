angular.module('directive')
.directive('dirPractice', function(){
  return {
    scope: {
      one: '@',
      two: '=',
      three: '&'
    },
    templateUrl: 'app/directive.html',
    link: function(scope, elem, attrs){
      console.log(attrs);
      elem.on("click", function(){
        console.log("Clicked`");
      });
      console.log(scope.one);
      console.log(scope.two);
      var x = "I want this instead";
      scope.three({pancake: x, waffle: 'Anything'});
    },
    controller: function($scope){

    }
  }
});
