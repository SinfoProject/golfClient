'use strict';

/**
 * @ngdoc function
 * @name golfClientApp.controller:GameCtrl
 * @description
 * # GameCtrl
 * Controller of the golfClientApp
 */
angular.module('golfClientApp')
  .controller('GameCtrl', function ($http,$routeParams) {
    var vm = this;

    $http.get('http://localhost:7000/game/'+$routeParams.gameId)
  		.then(function (data){
  			vm.game = data.data;
  			console.log(vm.game.name);
  			vm.players = vm.game.players;
  	});

  });
