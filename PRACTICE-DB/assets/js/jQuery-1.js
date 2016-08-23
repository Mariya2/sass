
$(function() {
var login = $('#login-form');
var purchases = $('#purchases');
var edit = $('#edit');

var name = $('#name');
var pass = $('#password');

//validation form
function validateForm() {
    var nameReg = /^[A-Za-z]+$/;
    var passReg = /^[A-Za-z0-9]+$/;
    
    var namesVal = $('#name').val();
    var passVal = $("#password").val();
    var inputVal = new Array (namesVal, passVal);
    var inputMessage = new Array ("name", "password");
    $('.error').hide();	
    if(inputVal[0]==""){
    	$('#name').after('<p class="error"> *Please enter your ' + inputMessage[0] + '</p>');
    } else if(!nameReg.test(namesVal)){
        $('#name').after('<p class="error"> *Letters only, 3 words</p>');
    }
	if(inputVal[1]==""){
		$('#password').after('<p class="error"> *Please enter your ' + inputMessage[1] + '</p>');
	} else if(!passReg.test(passVal)){
		/*if(passVal.length<3 || passVal.length>10){}*/
		$('#password').after('<p class="error"> *Letters and numbers only, password have to be with 3-10 chars</p>');
		} else {  $('.error').hide();}
	}
	login.on("submit", function(event){
		validateForm();
		event.preventDefault();
	});
	$('#submit').on('click', function(){
		var login = $("#name").val();
		var password = $('#password').val();
		$.ajax ({
			method: "POST",
			url: "login.php",
			dataType: "JSON",
			data: {
				login: login, pass: password
			},
		}).done(function(response){
				console.log("done");
				alert('wellcome');
				purchases.css("display", "block");
				$("#login").css('display', "none");
		})
	});
	
	///purchases
	$("#add").on('click', function(){
		edit.css("display", "block");
	});
	function validateEditForm() {
		 var pName =  $('#p-name');
		 var pQuantity = $("#p-quanttity");
		 var pPrice = $("#p-price");
		var nameReg = /^[A-Za-z]+$/;
		var numReg = /^[0-9]+$/;  
		var pNameVal = $('#p-name').val();
		var pQuantityVal = $("#p-quanttity").val();
		var pPriceVal = $("#p-price").val();
		    
		var inputVal = new Array (pNameVal, pQuantityVal, pPriceVal);
		var inputMsg = new Array ("name", "quantity", "price");
			
		if(inputVal[0]==""){
		   pName.after('<p class="error"> *Please enter the ' + inputMsg[0] + ' of purchase.</p>');
		} else if(!nameReg.test(pNameVal)){
		  pName.after('<p class="error"> *Write only words</p>');
		}
		if(inputVal[1]==""){
			pQuantity.after('<p class="error"> *Please enter ' + inputMsg[1] + ' of purchase.</p>');
		} else if(!numReg.test(pQuantityVal)){
			pQuantity.after('<p class="error"> *The value have to be number.</p>');
		} else {  $('.error').hide();
		}
		if(inputVal[2]==""){
			pPrice.after('<p class="error"> *Please enter ' + inputMsg[2] + ' of purchase.</p>');
		} else if(!numReg.test(pPriceVal)){
			pPrice.after('<p class="error"> *The value have to be number.</p>');
		} else {  $('.error').hide();
		}
	};
	
	$("#edit-submit").on("submit", function(e){
		validateEditForm();
		e.preventDefault();
	});
	
});

