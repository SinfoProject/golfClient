'use strict';

/**
 * @ngdoc function
 * @name golfClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the golfClientApp
 */
angular.module('golfClientApp')
  .controller('MainCtrl', function ($http) {
    
  	var vm = this;
  	
  	$http.get('http://localhost:7000/game')
  		.then(function (data){
  		vm.games = data.data;
  	});

  });