/**
 * 
 */
travelAssistant.controller("LoginUserController", function($scope, $rootScope, $http, userService){
	var data =  {name: 'mmm', password: 'mmm'};
	$scope.sendAjax = function() {
		$http({
			url: '../server/login.php',
			data: data,
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'}
		}).then(function successCallback(response) {
            if (response.data.success == true) {
                /*  failCounter = 0;*/
                  successCb(response.data.success)
              } else {
                  /*failCb(++failCounter);*/'data++';
              }
          }, function errorCallback(response) {
            /*  failCb(++failCounter);*/"error";
          });
	}
	
})