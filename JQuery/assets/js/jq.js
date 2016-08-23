/**
 * 
 */

$(function(){
	var winWidth = $(window).innerWidth();
	winWidth = winWidth+"px";
	var winHeight = $(window).innerHeight();
	winHeight = winHeight+"px";
	$("#space").css({width: winWidth,
	height: winHeight});
	$('body').on("keypress", function(e){
		if(e.keyCode == "110") {
			$("#michena").toggle('fast', 'linear')
		}
		if(e.keyCode == "109") {
			$("#michena").animate({
				height: "100px",
				width: "250px"
			}, 500, function(){
				$("#michena").animate({
					height: "200px",
					width: "200px"
				})
			});
		}
		if(e.keyCode == "98") {
			$("#michena").animate({
				height: "50px",
				width: "320px",
				}, 1000, function(){
				$("#michena").animate({
					height: "200px",
					width: "200px",
				})
			});
		}
		if(e.keyCode == "118") {
			var jump = $("#michena").css('bottom');
			$("#michena").animate({
				bottom: "200px",
				width: "130px"
			}, 500, function(){
				$("#michena").animate({
					bottom: "50px",
					width: "200px"
				})
			});
		}
	})
var i = 20;
	function callback(){
		$('#bullet').css({"left": "0"});
		i--;
		if (i < 0) {
			alert("game over");
			return;
		}
		$(".bullets").html(i);
	}
	
	function movement(){
		$('#strelec').animate({bottom: winHeight}, 1000).animate({bottom: '100px'}, 1000);	
		$('#bullet').animate({left: "-" + winWidth}, 1000, callback);
		
	};
	
	for (var j=20; j>=0; j--){
	movement();
	}
	var targetBullet = $('#bullet').css.left;
	var targetMonkey = $('#monkey').target;
});

