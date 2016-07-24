'use strict';

/**
 * @ngdoc function
 * @name golfClientApp.controller:GeneralCtrl
 * @description
 * # GeneralCtrl
 * Controller of the golfClientApp
 */
angular.module('golfClientApp')
  .controller('GeneralCtrl', function ($mdSidenav) {

    this.toggleSideNav = function (){
  		$mdSidenav('left').toggle();
  	}
  	
  });
