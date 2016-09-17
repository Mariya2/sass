
function SignPanel($el) {
	var _el = $el;
	var _url = "server/insert.php";
	
	this.getEl = function(){
		return _el;
	};
	this.getUrl = function(){
		return _url;
	};
	this.setEl = function(newEl){
		_el=newEl;
	};
	
}

SignPanel.prototype.init = function() {
	ValidationForm("#s-username", "#s-password");
	var _this = this;
	$('#sign-btn').on("click", function(){
		var user = $("#s-username").val();
		var pass = $("#s-password").val();
		var email = $("#s-email").val();
		var data = {
				name: user,
				password: pass,
				email: email
		}
		$.ajax({
			method: "POST",
			dataType: "json",
			data: data,
			url: _this.getUrl()
		}).then (function(data){
			if(data.success) {
				alert("success");
				$(document).trigger("show-panel", {panel: "login-panel"});
			} else {
				alert(data.error);
			}
		})
	});
}