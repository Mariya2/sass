/**
 * 
 */
function EditPanel($el) {
	var _el = $el;
	var _saveUrl = "server/save.php";
	var _getUrl = 'server/get.php';
	var _key = '';
	
	this.getEl = function(){
		return _el;
	};
	this.getSaveUrl = function(){
		return _saveUrl;
	};
	this.getGetUrl = function(){
		return _getUrl;
	};
	this.getKey = function(){
		return _key;
	};
	this.setEl = function(newEl){
		_el = newEl;
	};
	this.setSaveUrl = function(newUrl){
		_saveUrl = newUrl;
	};	
	this.setGetUrl = function(newGetUrl){
		_getUrl = newGetUrl;
	};	
	this.setKey = function(newKey){
		_key = newKey;
	};
}
EditPanel.prototype.init = function() {
	var _this = this;
	$("#save-btn").on('click', function(){
		var category = $("#category").val();
		var author = $("#author").val();
		var quote = $("#quote").val();
		var active = $("#active").val();
				var data = {
				category: category,
				author: author,
				quote: quote,
				active: active
		}
		if(_this.getKey()){
		data.key = _this.getKey();
		}
		$.ajax({
			method: "POST",
			dataType: "json",
			data: data,
			url: _this.getSaveUrl()
		}).then(function(data){
			if(data.success == true) {
				alert("success");
				_this.getEl().find('form').get(0).reset();
				
		} else {
			alert(data.error);
		}
		})
	});
	this.getEl().on('panel-unload', function(){
		_this.getEl().find('form').get(0).reset();
		_this.setKey("");
	});
	this.getEl().on('panel-load', function(event, key){
		_this.setKey(key);
		$.getJSON(_this.getGetUrl() +'?key+'+_this.getKey()).then(function(data){
			$("#category").val(data.category ? data.category : "");
			$("#author").val(data.author ? data.author : "");
			$("#quote").val(data.quote ? data.quote : "");
			$("#active").val(data.active ? data.active : "");
		});
	});
}