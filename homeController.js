//homeController.js
var app = angular.module('myApp');
app.controller('HomeController', 
function($scope, $rootScope, $stateParams, $state, LoginService) {
$scope.user = $rootScope.userName;
});
1
2
3
4
5
6
7
8
//homeController.js
var app = angular.module('myApp');
 
  app.controller('HomeController', 
  function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.user = $rootScope.userName;
    
  });