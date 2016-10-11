
travelAssistant.controller("LoginUserController", 
		['$scope', 'userService', '$http', '$location', '$sessionStorage',
		 function LoginUserController($scope, userService, $http, $location, $sessionStorage){
	
	$scope.sendAjax = function() {
		var user = $scope.user.name;
		var pass = $scope.user.password;
		var data = {
				name: user,
				password: pass
		};

		$http({
			url: '../server/login.php',
			data: data,
			method: 'POST',
			dataType: "json",
			headers: {'Content-Type': 'application/json'}
		}).then(function(data){
			console.log(data);
			if(data.status == 200) {
				alert("success");
				$sessionStorage.logged = 1;
				$location.path('/homePage/contacts');
				
			} else {
				alert("Not success");
			}
		})
		
		$scope.user={};
		
	}
}])