

var travelAssistant = angular.module('travelAssistant',['ngRoute'                                                    
    /*, 'ngCookies' ,
    'travelAssistent.routes.insidePage', 
    'uiGmapGoogleMapApiProvider', 
    'geolocation' */])

.config(['$locationProvider', '$routeProvider', 
          function($locationProvider, $routeProvider){
	//$locationProvider.hashPrefix('!');   ???
	
	$routeProvider
	.when('/homePage', {
		templateUrl:"./app/routes/homePage/home/homePage.html",
		controller:'HomePageController'
	})
	.when('/homePage/contacts', {
		templateUrl:"./app/routes/homePage/contacts/contacts.html",
		controller:'ContactsController'
	})
	.when('/homePage/login', {
		templateUrl:"./app/routes/homePage/login/login.html",
		controller:'LoginUserController'
	})
	.when('/homePage/signUp', {
		templateUrl:"./app/routes/homePage/signUp/signUp.html",
		controller:'SignUpUserController'
	})
	.when('/homePage/:id/edit', {
		templateUrl:"./app/routes/homePage/edit/userEdit.html",
		controller:'EditUserController'
	})
	.otherwise({redirectTo: '/homePage'})
}])
.controller('PageController', function($rootScope, $scope) {
	$scope.log = "Log In";
	

	/*$scope.changeState = function(){
		$scope.hidden = !$scope.hidden;
	}
	if (isLogged){
		$scope.
	}*/

})

/*   .config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAg_ZL1c9NXonjqOM9UKwsk43lUXDZ7jYU',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
})

.controller('geoCtrl', function ($scope, geolocation) {
    geolocation.getLocation().then(function(data){
      $scope.coords = {lat:data.coords.latitude, long:data.coords.longitude};
    });
});
*/

/*.controller("someController", function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });
});*/

travelAssistant.factory('authentication', [
            '$http',
            '$cookies',
            '$q',
            '$location',
            'identity',
            'BASE_URL',
            function($http, $cookies, $q, $location, identity, BASE_URL) {
                
                var AUTHENTICATION_COOKIE_KEY = '!__Authentication_Cookie_Key__!';
                
                function preserveUserData(data) {
                    var accessToken = data.access_token;
                    $http.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
                    $cookies.put(AUTHENTICATION_COOKIE_KEY, accessToken);
                }
                
                function registerUser(user) {
                    var deferred = $q.defer();
                    
                    $http.post(BASE_URL + 'Users/Register', user)
                        .then(function(response) {
                            preserveUserData(response.data);
                            
                            identity.requestUserProfile()
                                .then(function() {
                                    deferred.resolve(response.data);
                                });
                        });
                    
                    return deferred.promise;
                }
                
                function loginUser(user) {
                    var deferred = $q.defer();
                    
                    $http.post(BASE_URL + 'Users/Login', user)
                        .then(function(response) {
                            preserveUserData(response.data);
                            
                            identity.requestUserProfile()
                                .then(function() {
                                    deferred.resolve(response.data);
                                });
                        });
                        
                    return deferred.promise;
                }
                
                function isAuthenticated() {
                    return !!$cookies.get(AUTHENTICATION_COOKIE_KEY);
                }
                
                function logout() {
                    $cookies.remove(AUTHENTICATION_COOKIE_KEY);
                    $http.defaults.headers.common.Authorization = undefined;
                    identity.removeUserProfile();
                    $location.path('/');
                }
                
                function refreshCookie() {
                    if (isAuthenticated()) {
                        $http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get(AUTHENTICATION_COOKIE_KEY);
                        identity.requestUserProfile();
                    }
                }
                
                return {
                    registerUser: registerUser,
                    loginUser: loginUser,
                    isAuthenticated: isAuthenticated,
                    refreshCookie: refreshCookie,
                    logout: logout
                }
        }]);
angular.module('socialNetwork.users.identity', [])
    .factory('identity', [
        '$http',
        '$q',
        'BASE_URL',
        function($http, $q, BASE_URL) {
        
            var deferred = $q.defer();
        
            var currentUser = undefined;
        
            return {
                getCurrentUser: function () {
                    if (currentUser) {
                        return $q.when(currentUser);
                    }
                    else {
                        return deferred.promise;
                    }
                },
                removeUserProfile: function() {
                    currentUser = undefined;
                },
                requestUserProfile: function() {
                    var userProfileDeferred = $q.defer();
                    
                    $http.get(BASE_URL + 'me')
                        .then(function(response) {
                            currentUser = response.data;
                            deferred.resolve(currentUser);
                            userProfileDeferred.resolve();
                        });
                        
                    return userProfileDeferred.promise;
                }
            };
    }]);
/**
 * 
 */
travelAssistant.factory('userService', function($http, $httpParamSerializerJQLike) {
	/*var baseUrl="http://localhost:3000/users";*/
	
	var users = [{name:'testuser', password:-5, email:'abv@abv.abv'},
	             {name:'user 2', password:55, email:'abv@abv.abv'},
	             {name:'user 3', password:33, email:'abv@abv.abv'},
	             {name:'user 4', password:44, email:'abv@abv.abv'},
	             {name:'user 5', password:55, email:'abv@abv.abv'}];
	
	return {
		getAllUsers: function() {
			return $http.get(baseUrl).then(function(response) {
				return response;
			});
		},
		getUserById: function(id) {
			return users[id];
		},
		addNewUser: function(newUser) {
			return $http.post(baseUrl, {newUser:newUser});
		},
		updateById:function(id, updatedData) {
			users[id] = updatedData;
		},
		/*loginUser: function(user){
			return $http.post('login.php', {newUser:newUser});
		},
        sendLoginData: function (data, successCb, failCb) {
                $http({
                    method: 'POST',
                    url: 'login.php',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;'},
                    data: $httpParamSerializerJQLike(data)
                }).then(function successCallback(response) {
                    if (response.data.success == true) {
                        failCounter = 0;
                        successCb(response.data.success)
                    } else {
                        failCb(++failCounter);
                    }
                }, function errorCallback(response) {
                    failCb(++failCounter);
                });
        }*/
	}
});

'use strict';

var mapApp = angular.module('myApp.mapApp', ['ngRoute'])

mapApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/mapApp', {
	templateUrl: '../InsidePage/mapApp.html',
    controller: 'MapCtrl'
    
  });
}])




mapApp.controller('MapCtrl', ['$scope','$window', function($scope, $window) {
   var geolocate; 
	if(!!navigator.geolocation) {
	    
        var map;
    
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        $scope.map = map;
	}
       var geo = navigator.geolocation.getCurrentPosition(function(position) {
        
           geolocate = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
    	    var image = {
    	    		  url: 'pin1.ico',
    	    		  size: new google.maps.Size(90, 90),
    	    		  origin: new google.maps.Point(0, 0),
    	    		  anchor: new google.maps.Point(17, 34),
    	    		  scaledSize: new google.maps.Size(50, 50)
    	    };
            	
    	    var image2 = {
  	    		  url: 'pin2.ico',
  	    		  size: new google.maps.Size(90, 90),
  	    		  origin: new google.maps.Point(0, 0),
  	    		  anchor: new google.maps.Point(17, 34),
  	    		  scaledSize: new google.maps.Size(50, 50)
  	    };
            var initalPosition = new google.maps.Marker({
                position: geolocate,
                map: map,
                title: 'My Place',
            	draggable: true,
            	icon: image,
                animation: google.maps.Animation.DROP,
                animation: google.maps.Animation.BOUNCE
              });
            initalPosition.addListener('click', toggleBounce);
        
            $scope.initalPosition =  initalPosition;
            console.log($scope.initalPosition)
        function toggleBounce() {
          if (initalPosition.getAnimation() == null) {
        	  initalPosition.setAnimation(google.maps.Animation.BOUNCE);
          } else {
        	  initalPosition.setAnimation(null);
          }
        }
            /*var infowindow = new google.maps.InfoWindow({
                map: map,
                position: geolocate,
                content:
                    '<h1>Location pinned from HTML5 Geolocation!</h1>' +
                    '<h2>Latitude: ' + position.coords.latitude + '</h2>' +
                    '<h2>Longitude: ' + position.coords.longitude + '</h2>'
            });*/
            
            map.setCenter(geolocate);
            var request = {
        		    location: geolocate,
        		    radius: '500',
        		    types: ['store']
        		  };
        	 var service = new google.maps.places.PlacesService(map);
        	 $scope.service = service;
        	 console.log(service)
        	 service.nearbySearch(request, callback);
        	 
        	 function callback(results, status, $scope) {
        		  if (status == google.maps.places.PlacesServiceStatus.OK) {
        		    for (var i = 0; i < results.length; i++) {
        		      var place = results[i];
        		      $scope.data = {
        		    		     model: null,
        		    		     availableOptions: [
        		    		       {id: 'place.name', name: 'place.geometry.location'},
        		    		     ]
        		    		    };
        		      
        		      /*console.log($scope.data.availableOptions[0].location)*/
        		      createMarker(results[i]);
        		    }
        		  }
        	 }
        	 var myMarkers = [];
        	 function createMarker(place) {
        	        var placeLoc = place.geometry.location;
        	       
        	        var marker = new google.maps.Marker({
        	          map: map,
        	          position: placeLoc,
        	          icon: image2,
        	          
        	        });
        	       // marker.addListener('click', toggleBounce); // add dbclick & push to array waypoints & create $scope.data object
        	        myMarkers.push(marker)
        	        $scope.myMarkers = myMarkers;
        	        
        	        
        }
        	 return $scope
      }); 	 
    
	
	
	 var directionsService = new google.maps.DirectionsService();
	$scope.directionsService =  directionsService
console.log(directionsService)
	
	   var directionsDisplay = new google.maps.DirectionsRenderer();
	$scope.directionsDisplay = directionsDisplay
console.log(directionsDisplay) 
	 
	  directionsDisplay.setMap(map);
	
	
	$scope.calcRoute = function(geo, $window) {
	
		var start = geolocate;
		console.log(geolocate)
		console.log($scope.myMarkers);
		for (var i=0; i<$scope.myMarkers.length; i++) {
			google.maps.event.addListener($scope.myMarkers[i], 'dblclick', function (e) {
				  console.log(e);
				  var end = event.latLng;
				  console.log(end);
			}, false)
		 
    }
		var request = {
				origin: start,
				destination: end,
				travelMode: 'WALKING'
				 };
				 directionsService.route(request, function(result, status) {
		    if (status == 'OK') {
		     $scope.a= directionsDisplay.setDirections(result);
		    }
	});	
		
	}       
	      

	
	
	/*
	} else {
        document.getElementById('map').innerHTML = 'No Geolocation Support.';
    }*/
    
}]);
  

	
/**
 * var formSection = document.getElementById("form");

formSection.addEventListener('focus', function(e){
	var target = e.target;
	if (target.tagName.toLowerCase()== "input" 
			|| target.tagName.toLowerCase()=="textarea") {
		var label = target.previousElementSibling;
		label.style.transition = "0.5s ease";
		label.style.transform = "translate(0px, -1.8em)";
	}
	
}, true);

}, false);
 */

travelAssistant.controller("ContactsController",
		['$scope', 'userService', '$http', '$location',
		 function ContactsController($scope, userService, $http, $location){
			$scope.user = {};
			
			$scope.userAjaxMessage = function() {
				
				var user = $scope.user.name;
				var email = $scope.user.email;
				var message = $scope.user.message;
		
					var data = {
							name: user,
							email: email,
							message: message
					}
					$http({
						url: '../server/getMessage.php',
						data: data,
						method: 'POST',
						dataType: "json",
						headers: {'Content-Type': 'application/json'}
					}).then(function(data){
						if(data.status == 200) {
							alert("success");
							$location.path('/homePage');
						} else {
							alert("Not success");
						}
					})
				
				$scope.newUser = {};
			}
			
			/*label.style.transition = "0.5s ease";
			label.style.transform = "translate(0px, -1.8em)";*/
		
}])
/**
 * 
 */
travelAssistant.controller("EditUserController",
		['$scope', 'userService', '$http',
		 function EditUserController($scope, userService, $http){
	/*$scope.users = userService.getUserById($routeParams.id);
	$scope.userId = $routeParams.id;
	$scope.update = function() {
		userService.updateById($routeParams.id, $scope.users);
		$location.url('/homePage/' + $routeParams.id);
	}*/
	$scope.makeNewPass = function() {
		/*$location.url('/homePage/' + $routeParams.id);*/
		
		var user = $scope.user.name;
		var pass = $scope.user.password;
		var passRepeat = $scope.user.passRepeat;
		if (pass === passRepeat){
			var data = {
					name: user,
					password: pass,
			}
		} else {
			console.log('error');
		}
		
		$http({
			url: '../server/update.php',
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
	
	}
	
}])
/**
 * 
 */
travelAssistant.controller("HomePageController",
		['$scope', 'userService', '$http',
		 function HomePageController($scope, userService, $http){
			
			
		}])

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