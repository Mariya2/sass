/**
 * 
 */
travelAssistant.controller("SignUpUserController", 
		['$scope', 'userService', '$http', '$location',
		 function SignUpUserController($scope, userService, $http, $location){
	$scope.newUser = {};

	$scope.addUserAjax = function() {
		
		var user = $scope.newUser.name;
		var pass = $scope.newUser.password;
		var passRepeat = $scope.newUser.passRepeat;
		var email = $scope.newUser.email;
		if (pass === passRepeat){
			var data = {
					name: user,
					password: pass,
					email: email
			}
		} else {
			console.log('error');
		}
		/*userService.addNewUser($scope.newUser);*/
		
			$http({
				url: '../server/insert.php',
				data: data,
				method: 'POST',
				dataType: "json",
				headers: {'Content-Type': 'application/json'}
			}).then(function(data){
				
				if(data.status == 200) {
					alert("success");
					$location.path('/homePage/login');
				} else {
					alert("Not success");
				}
			})
		
		$scope.newUser = {};
	}
}])