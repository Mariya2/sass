var $ = jQuery;
$(document).ready(function () { 
	
	function getRandNumbers(){
		var limit = 30;
		var data = [];
		for(var i=0; i<3; i++){
			var num = Math.floor(Math.random()*limit);
			data.push(num);
		}
		return data;
	}
	var result = getRandNumbers();
	var quotes = [];
var urlGET = "server/getForDemo.php?id1="+result[0]+"&id2="+result[1]+"&id3="+result[2];
var urlPost = "server/getForDemo.php";
var data = {
		id1: result[0],
		id2: result[1],
		id3: result[2]
}

$.ajax({
	contentType: "application/json",
	method: "POST",
	dataType: "json",
	data: data,
	url: urlPost,
	success: function (response) {
		console.log(response);
		alert("success");
        if (response == 'success') {
        	var a = json.parse(response);
        	console.log(a);
            /*window.location.replace("../Project/compose.html");
            $(".inner-container").css("height", "400px");*/
        }
    }
})/*.then(function(data){
	quotes.push(data);
	
	alert(quotes[1].author);
	if(data.success){
		
		console.log(data);
		var html = '';
			for(var i in data) {
				html += "<dd>"+data[i].quote+"</dd>"+
					"<dt>"+data[i].author+"</dt>";
			}
			var dl = $(".jumbotron dl");
		dl.html("").append(html);
	} else {
		alert("error");
	}
})*/
/*
	$.get(url).then(function(data){
	alert(data);
		if(data !== "") {
			return data;
			var html = '';
			for(var i in data) {
				html += "<dd>"+data[i].quote+"</dd>"+
					"<dt>"+data[i].author+"</dt>";
			}
			var dl = $(".jumbotron dl");
		dl.html("").append(html);
		} else {
			alert("not success");
		}
	}, "json")*/
})
