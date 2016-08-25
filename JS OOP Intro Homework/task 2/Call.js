/**
 * 
 */
function Call(caller, receiver, duration) {
	var _priceForMinute = 2;
	var _caller = caller;
	var _receiver = receiver;
	var _duration = duration;
	
	this.getPriceForMinute = function() {
		return _priceForMinute;
	}
	this.getCaller = function() {
		return _caller;
	}
	this.getReceiver = function() {
		return _receiver;
	}
	this.getDuration = function() {
		return _duration;
	}
	this.setCaller = function(newCaller) {
		_caller = newCaller;
	}
	this.setReceiver = function(newReceiver) {
		_receiver = newReceiver;
	}
	this.setDuration = function(newDuration) {
		if (newDuration < 0 || newDuration > 120) {
			alert ("Invalid value!");
		} else {
			_duration = newDuration;
		}
	}
}