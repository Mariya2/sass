function Employee (name) {
	var _name = name;
	var _currentTask = '';
	var _hoursLeft = 8;
	
	this.getName = function() {
		return _name;
	}
	this.setName = function(newName) {
		if (newName == ''){
			throw new Error ("Enter valid Name!");
		} else {
			_name = newName;
		}
	}
	this.getCurrentTask = function() {
		return _currentTask;
	}
	this.setCurrentTask = function(newCurrentTask) {
		_currentTask = newCurrentTask;
	}
	this.getHoursLeft = function() {
		return _hoursLeft;
	}
	this.setHoursLeft = function(newHoursLeft) {
		if (newHoursLeft < 0){
			throw new Error ("Enter valid Hours!");
		} else {
			_hoursLeft = newHoursLeft;
		}
	}
}

Employee.prototype.work = function() {
	if(this.getCurrentTask() !=  ""){

		var differens = Math.abs(this.getCurrentTask().getWorkingHours() - this.getHoursLeft());

		if(this.getCurrentTask().getWorkingHours() > this.getHoursLeft()){
			this.getCurrentTask().setWorkingHours(differens);
			 this.setHoursLeft(0);
		}else {
			this.getCurrentTask().setWorkingHours(0);
			 this.setHoursLeft(differens);
		}
	}
}
Employee.prototype.showReport = function() {
	console.log("The name of Employee is " + this.getName() + "."
			+ "\n" + "Name of current Task is " + this.getCurrentTask().getName() + "."
			+ "\n" + "Remaining hours of employee is " + this.getHoursLeft() + "." 
			+ "\n" + "Remaining hours of employee's tasks " + this.getCurrentTask().getWorkingHours() + ".");
}