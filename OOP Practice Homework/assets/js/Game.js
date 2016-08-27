document.addEventListener("DOMContentLoaded", function(){
	var grid = new Grid();
	grid.makeMatrix();
	
	var shipModel = new ShipModel();
	
	var gameBoard = shipModel.getGameBoard();

	var player = new Player();
	
	var gameBoardContainer = document.getElementById("gameboard");
		gameBoardContainer.addEventListener("click", function(e){
			player.shoot(e);
	
	}, false);
	
}, false)