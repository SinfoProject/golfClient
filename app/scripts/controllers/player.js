'use strict';

/**
 * @ngdoc function
 * @name golfClientApp.controller:PlayerCtrl
 * @description
 * # PlayerCtrl
 * Controller of the golfClientApp
 */
angular.module('golfClientApp')
  .controller('PlayerCtrl', function ($http,$routeParams,$timeout) {
    
  	var vm = this;
  	vm.results = [];
  	vm.penalties = [];
  	vm.shots = [];

  	$http.get('http://localhost:7000/player/'+$routeParams.playerId)
  		.then(function (data){
  		vm.player = data.data;
  		vm.setDefautls(vm.player.holesPlayers);

  		$http.get('http://localhost:7000/game/'+vm.player.gameId)
	  		.then(function (data){
	  		vm.game = data.data;
	  		var holes = new Array();
			for(var i = 1; i<=vm.game.nHoles; i++){
				holes.push(i);
			}
			vm.holes = holes;
	  	});
  	});

  	vm.setDefautls = function(holes){
  		var i;
  		for( i in holes){
  			var hole = holes[i];
  			var aux = parseInt(i)+1;
			// if(hole.shot){
			// 	vm.shots[aux] = hole.shot;
			// }
			vm.shots[aux] = hole.shot;
			vm.penalties[aux] = hole.penalty;
			// if(hole.penalty){
			// 	vm.penalties[aux] = hole.penalty;
			// }
  		}
  	}

	vm.setValues = function (i){
		vm.selected = i;
	}

	vm.calculate = function (i){
		vm.penalties[i] = vm.penalties[i] 	? vm.penalties[i] : 0;
		vm.shots[i] 	= vm.shots[i] 		? vm.shots[i] 	  : 0;
		$http.put(
			'http://localhost:7000/player/'+$routeParams.playerId+'/hole',
			{
		    hole:i,
		    shot:vm.shots[i],
		    penalty : vm.penalties[i]
		}
		).then(function (data){
			vm.results[i] 	= (vm.shots[i] + vm.penalties[i]);
			console.log(data);
		});
	}

  });
