var employee = new Employee("Gosho");
var task = new Task("planting trees", 8);
employee.setCurrentTask(task);
employee.setHoursLeft(2);
employee.work();
employee.showReport();