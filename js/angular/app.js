angular.module('TinyBlocks.controllers',[]);
angular.module('TinyBlocks.services',[]);
angular.module('TinyBlocks.directives',[]);
var app = angular.module('TinyBlocks', [
	'TinyBlocks.services',
	'TinyBlocks.controllers',
	'TinyBlocks.directives',
	// 'ui.router', 
	// 'templates',
	// 'ngResource',
	// 'ngMaterial'
]);

// app.config([
// 	'$stateProvider', 
// 	'$urlRouterProvider', 
// 	'$locationProvider', 
// 	function($stateProvider, $urlRouterProvider, $locationProvider){
// 	 	$stateProvider
// 	 	.state('app', {
//  			abstract: true,
// 			url: '/',
// 			templateUrl: 'home/index.html',
// 			controller: 'ApplicationController',
// 			resolve: {
// 				currentUser: ['$q','$http',function($q, $http) {
// 					return $http.get("/api/v1/users/me.json");
// 				}]
// 			}
// 		})
// 		.state('app.home', {
//  			url: 'home',
// 			templateUrl: 'home/landing.html',
// 		})
// 	 	.state('app.sign_up', {
// 			url: 'sign_up',
// 			templateUrl: 'users/sign_up.html',
// 			controller: 'SignupController'
// 		})
// 		.state('app.sign_in', {
// 			url: 'sign_in',
// 			templateUrl: 'users/sign_in.html',
// 			controller: 'SigninController'
// 		})
// 		.state('dashboard', {
// 			abstract: true,
// 			url: '/dashboard',
// 			templateUrl: 'dashboard/layout.html',
// 			controller: 'DashboardController',
// 			resolve: {
// 				currentUser: ['$q','$http',function($q, $http) {
// 					return $http.get("/api/v1/users/me.json");
// 				}],
// 				unAuthorized: ['currentUser', '$q', function(currentUser, $q){
// 					console.log(currentUser.data);
// 					if (!currentUser.data || !currentUser.data.id){
// 						return $q.reject("Not Authorized");
// 					}
// 				}] 
// 			}
// 		})
// 		.state('dashboard.index', {
// 			url: '/index',
// 			templateUrl: 'dashboard/index.html',
// 			controller: 'DashboardController',
// 		})
// 		.state('dashboard.new', {
// 			url: '/new',
// 			templateUrl: 'dashboard/new.html',
// 			controller: 'DashboardController',
// 		})
// 	 	$urlRouterProvider.otherwise('/home');
// 		$locationProvider.html5Mode({
// 			 enabled:true,
// 			 requireBase: false
// 		 });
// }]);

// app.run(['$transitions', '$state', function ($transitions, $state) {  
//   // $transitions.onStart({}, ()=>{
//   //     authorizeUser();
//   // });  

//   $transitions.onError({}, ($transition$) => {
//   	console.log($transition$._error.detail == 'Not Authorized');
//   	if ($transition$._error.detail == 'Not Authorized') {
//       $state.go('app.sign_in');
//     }
//   });

//   $transitions.onSuccess({}, function(transition) {
//   	w3 = new W3();
// 	  w3.init_when_ready();
// 	  w3.init_after_load();
// 	});
// }]);