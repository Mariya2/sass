function Grid() {
	var _rows = 20;
	var _cols = 20;
	var _squareSize = 25;
	
	this.getRows = function() {
		return _rows;
	}
	this.setRows = function(newRows) {
		_rows = newRows;
	}
	this.getCols = function() {
		return _cols;
	}
	this.setCols = function(newCols) {
		_cols = newCols;
	}
	this.getSquareSize = function() {
		return _squareSize;
	}
	this.setSquareSize = function(newSquareSize) {
		_squareSize = newSquareSize;
	}
	
}
Grid.prototype.makeMatrix = function() {
		var gameBoardContainer = document.getElementById("gameboard");
		
		for (i = 0; i < this.getRows(); i++) {
			for (j = 0; j < this.getCols(); j++) {
				var square = document.createElement("div");
				gameBoardContainer.appendChild(square);
				square.id = j +"-"+ i;			
				
				var topPosition = j * this.getSquareSize();
				var leftPosition = i * this.getSquareSize();			
				
				square.style.top = topPosition + 'px';
				square.style.left = leftPosition + 'px';						
				}
		}
}