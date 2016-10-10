/**
 * 
 */
travelAssistant.controller("EditUserController", function($scope, userService, $routeParams, $location){
	$scope.users = userService.getUserById($routeParams.id);
	$scope.userId = $routeParams.id;
	$scope.update = function() {
		userService.updateById($routeParams.id, $scope.users);
		$location.url('/homePage/' + $routeParams.id);
	}
	$scope.showUpdate = function(){
		$location.url('/homePage/' + $routeParams.id);
	}
	
})