/**
 * 
 */
function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem) {
	var _year = year;
	var _price = price;
	var _isNotebook = isNotebook;
	var _hardDiskMemory = hardDiskMemory;
	var _freeMemory = freeMemory;
	var _operationSystem = operationSystem;
	
	this.getYear = function() {
		return _year;
	}
	this.getPrice = function() {
		return _price;
	}
	this.getIsNotebook = function() {
		return _isNotebook;
	}
	this.getHardDiskMemory = function() {
		return _hardDiskMemory;
	}
	this.getFreeMemory = function() {
		return _freeMemory;
	}
	this.getOperationSystem = function() {
		return _operationSystem;
	}
	this.setYear = function(newYear) {
		_year = newYear;
	}
	this.setPrice = function(newPrice) {
		_price = newPrice;
	}
	this.setIsNotebook = function(newIsNotebook) {
		_isNotebook = newIsNotebook;
	}
	this.setHardDiskMemory = function(newHardDiskMemory) {
		_hardDiskMemory = newHardDiskMemory;
	}
	this.setFreeMemory = function(newFreeMemory) {
		_freeMemory = newFreeMemory;
	}
	this.setOperationSystem = function(newOperationSystem) {
		_operationSystem = newOperationSystem;
	}
	
}

Computer.prototype.useMemory = function(memory) {
	if(parseInt(memory) > parseInt(this.getHardDiskMemory)){
		throw new Error ( "Not enough free memory!");
	}
	var usedMemory = parseInt(this.getHardDiskMemory) - parseInt(this.getFreeMemory);
	return usedMemory;
}
Computer.prototype.getInfo = function() { 
	return 'The configuration of '+' ' + ' is ' + this.getYear() + 
	', ' + this.getPrice() + this.getIsNotebook() +', '+ this.getHardDiskMemory() +
	', ' + this.getFreeMemory() + ', ' + this.getOperationSystem() +
	'. Use Memory is '+ Computer.prototype.useMemory();
}