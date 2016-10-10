/**
 * 
 */
travelAssistant.controller("SignUpUserController", function($scope, userService, $http){
	$scope.newUser = {};
	/*var user = $("#s-username").val();
	var pass = $("#s-password").val();
	var email = $("#s-email").val();
	var data = {
			name: user,
			password: pass,
			email: email
	}*/
	var data = {name: 112, password: 'do0',email: "mdm"};
	
	
	$scope.addUserAjax = function() {
		/*userService.addNewUser($scope.newUser);*/
		
			$http({
				url: '../server/insert.php',
				data: data,
				method: 'POST',
				dataType: "json",
				headers: {'Content-Type': 'application/json; charset=UTF-8;'}
			}).then(function(data){
				if(data.success) {
					alert("success");
				} else {
					alert(data.error);
				}
			})
		
		$scope.newUser = {};
	}
	console.log('ctrl sign');
})