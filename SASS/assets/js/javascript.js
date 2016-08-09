/**
 * 
 */
document.addEventListener('DOMContentLoaded', function(){


var theMovie = document.getElementById('the-movie');
var pics = [
            {
	'name': 'Some film with pic1',
	'text': "Some film takes leave from the town of Bikini Bottom in order to track down King Neptune's stolen crown.",
	'image': 'pic1.jpg',
            } ,{
	'name': 'Some film with pic2',
	'text': "Some film 2 takes leave from the town of Bikini Bottom in order to track down King Neptune's stolen crown.",
	'image': 'pic2.jpg',
            }, {
	'name': 'Some film with pic3',
	'text': "Some film 3 takes leave from the town of Bikini Bottom in order to track down King Neptune's stolen crown.",
	'image': 'pic2.jpg',
            
            }];
function createAttr() {
	var pic = document.getElementById("img"); 
	for(var i = 0; i < pics.length; i++) {
		pic.children[i].setAttribute("data-index", i);
	}
}
createAttr();
function changeName(targ) {
	var el = theMovie.firstElementChild;
	el.innerHTML = targ.name;
}
function changeText(targ) {
	var txt = theMovie.children[1];
	txt.innerHTML = targ.text;
}
function changeBackground(i) {
	theMovie.style.background = 'url("assets/img/pic'+(i+1)+'.jpg") no-repeat';
	theMovie.style.backgroundSize = "100%";
}
function changeImage(i) {
	var el = document.getElementById("img").children[i];
	el.style.height = "135px";
}
theMovie.addEventListener('click', function(e){
	var target = e.target;
	if (target.tagName.toLowerCase()== "img") {
		var i = parseInt(target.parentElement.getAttribute('data-index'));
		var targ = pics[i];
		changeName(targ);
		changeText(targ);
		changeBackground(i);
		changeImage(i);
	}
}, false);

var formSection = document.getElementById("form");

formSection.addEventListener('focus', function(e){
	var target = e.target;
	if (target.tagName.toLowerCase()== "input" 
			|| target.tagName.toLowerCase()=="textarea") {
		var label = target.previousElementSibling;
		label.style.transition = "0.5s ease";
		label.style.transform = "translate(0px, -1.8em)";
	}
	
}, true);

}, false);