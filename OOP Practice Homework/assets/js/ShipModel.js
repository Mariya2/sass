function ShipModel() {
	var _gameBoard = [
		 				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		 				[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
		 				];
	this.getGameBoard = function() {
		return _gameBoard;
	}
	this.setGameBoard = function(newGameBoard) {
		_gameBoard = newGameBoard;
	}
}