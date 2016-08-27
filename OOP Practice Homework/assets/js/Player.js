
function Player() {
	var _amo = 20;
	var _hitCount = 0;
	var _misses = 0;
	
	this.getAmo = function() {
		return _amo;
	}
	this.setAmo = function(newAmo) {
		_amo = newAmo;
	}
	this.getHitCount = function() {
		return _hitCount;
	}
	this.setHitCount = function(newHitCount) {
		_hitCount = newHitCount;
	}
	this.getMisses = function() {
		return _misses;
	}
	this.setMisses = function(newMisses) {
		_misses = newMisses;
	}
}

var amo = 20;
var misses = 0;
var hits = 0;
Player.prototype.shoot = function(e) {
	
		if (e.target !== e.currentTarget) {
			var pos = e.target.id.split("-");
			var row = pos[0];
			var col = pos[1];
			var shipModel = new ShipModel();
			var gameBoard = shipModel.getGameBoard();
			amo--;
			
			if (gameBoard[row][col] == 0) {
				e.target.style.background = '#bbb';
				gameBoard[row][col] = 3;
				misses++;
				/*console.log(amo+ "amo;", misses+ "misses;", hits+ "hits;");*/
			
			} else if (gameBoard[row][col] == 1) {
				e.target.style.background = 'red';
				gameBoard[row][col] = 2;
				hits++;
				/*console.log(amo+ "amo;", misses+ "misses;", hits+ "hits;");*/
				
				if (hits == 9) {
					alert("All enemy battleships have been defeated! " +
							"You win! " +
							"Hits shoots - " + hits +
							". Missed shoots - " + misses +
							". Made shoots -"+ (20-amo) + " ");
				}
			} else if (gameBoard[row][col] > 1) {
				alert("Stop wasting your torpedos! You already fired at this location.");
				/*console.log(amo+ "amo;", misses+ "misses;", hits+ "hits;");*/
			}		
			
			if(amo <= 0) {
				alert("All amo have been sooted! " +
						"You lost! " +
						"Hits shoots - " + hits +
						". Missed shoots - " + misses +
						". Made shoots -"+ (20-amo) + " ");
			}
			
	    e.stopPropagation();
	}	
}