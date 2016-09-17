
function LoginPanel($el) {
	var _el = $el;
	var _url = "server/login.php";
	
	this.getEl = function(){
		return _el;
	};
	this.getUrl = function(){
		return _url;
	};
	this.setEl = function(newEl){
		_el = newEl;
	};
}
LoginPanel.prototype.init = function() {
	ValidationForm("#username", "#password");
	var _this = this;
	$('#login-btn').on("click", function(){
		var username = $("#username").val();
		var pass =  $("#password").val();
		var data = {
				name: username,
				password: pass
		}
		$.ajax({
			method: "POST",
			dataType: "json",
			data: data,
			url: _this.getUrl()
		}).then (function(data){
			if(data.success) {
				$(document).trigger("show-panel", {panel: "list-panel"});
				$("#header .log").html("Log Out");
			sessionStorage.logged = 1;
			} else {
				alert(data.error);
			}
		})
	});
}



