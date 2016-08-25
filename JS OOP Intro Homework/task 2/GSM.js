function GSM(model) {
	var _model = model;
	var _hasSimCard = true;
	var _simMobileNumber = 0;
	var _outgoingCallsDuration = 0;
	var _lastIncomingCall = 0;
	var _lastOutgoingCall = 0;
	
	this.getModel = function() {
		return _model;
	}
	this.setModel = function(newModel) {
		_model = newModel;
	}
	this.getHasSimCard = function() {
		return _hasSimCard;
	}
	this.setHasSimCard = function(newHasSimCard) {
		_hasSimCard = newHasSimCard;
	}
	this.getSimMobileNumber = function() {
		return __simMobileNumber;
	}
	this.setSimMobileNumber = function(newSimMobileNumber) {
		__simMobileNumber = newSimMobileNumber;
	}
	this.getOutgoingCallsDuration = function () {
        return _outgoingCallsDuration;
	}
	this.setOutgoingCallsDuration = function (newOutgoingCallsDuration) {
        _outgoingCallsDuration = newOutgoingCallsDuration;
    }
    this.getLastIncomingCall = function () {
        return _lastIncomingCall;
    }
    this.setLastIncomingCall = function (newLastIncomingCall) {
        _lastIncomingCall = newLastIncomingCall;
    }
    this.getLastOutgoingCall = function () {
        return _lastOutgoingCall;
    }
    this.setLastOutgoingCall = function (newLastOutgoingCall) {
        _lastOutgoingCall = newLastOutgoingCallSet;
    }
}

GSM.prototype.insertSimCard = function(simMobileNumber){
	var num =  /^(?=\d{10}$)(08)\d+/;
	if (num.exec(simMobileNumber)) {
		this.setSimMobileNumber(simMobileNumber);
        this.setHasSimCard(true);
	}
}
GSM.prototype.removeSimCard = function(setHasSimCard) {
	this.setHasSimCard(false);

}
GSM.prototype.call = function(receiver, duration) {
	 if ((this.getHasSimCard() == true) && (receiver.getHasSimCard() == true)) {
	        if (this.getSimMobileNumber() == receiver.getSimMobileNumber()) {
	            console.log(this.getSimMobileNumber() + " е един и същи номер c " + receiver.getSimMobileNumber());
	            return false;
	        } else if (!duration.getDuration()) {
	            throw new Error("The duration must be between 0 and 120.");
	        }
	    }

	    this.setLastOutgoingCall(duration.getDuration());
	    receiver.setLastIncomingCall(duration.getDuration());
	    this.setOutgoingCallsDuration(this.getOutgoingCallsDuration() + this.getLastOutgoingCall());
}
GSM.prototype.getSumForCall = function(duration) {
	return duration.getPriceForMinute() * this.getOutgoingCallsDuration();
}
GSM.prototype.printInfoForTheLastOutgoingCall = function () {
    return "Duration of last outgoing call: " + this.getLastOutgoingCall();
}

GSM.prototype.printInfoForTheLastIncomingCall = function () {
    return "Duration of last incoming call: " + this.getLastIncomingCall();
}
GSM.prototype.getInfo = function () {
    console.log("Does " + this.getModel() + " have SIM card: " + this.getHasSimCard());
    console.log(this.getModel() + "'s mobile number is: " + this.getSimMobileNumber());
    console.log(this.getModel() + "'s last outgoing call's duration is: " + this.getLastOutgoingCall());
    console.log(this.getModel() + "'s last incoming call's duration is: " + this.getLastIncomingCall());
    console.log(this.getModel() + "'s sum for all outgoing calls so far is: " + this.getSumForCall(firstCall));
}