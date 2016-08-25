
	var gsm = new GSM("Samsung");
	gsm.insertSimCard("0897123456");
	var gsm1 = new GSM("iPhone");
	gsm1.insertSimCard("0888123456");
	
	var firstCall = new Call(gsm, gsm1, 130);
	var secondCall = new Call(gsm, gsm1, 65);
	
	firstCall.setReceiver(gsm);
	secondCall.setCaller(gsm1);
	
	gsm.call(gsm1, firstCall);
	gsm.call(gsm1, secondCall);
	gsm.call(gsm, secondCall);
	console.log(gsm.getModel());
	gsm.getInfo(gsm);
	console.log(gsm1.getModel());
	gsm1.getInfo(gsm1);