/**
 * 
 */
function HeaderPanel($el) {
	var _el = $el;
	this.getEl = function(){
		return _el;
	};
	this.getEl = function(){
		return _el;
	};
	this.setEl = function(newEl){
		_el = newEl;
	};
}

HeaderPanel.prototype.init = function() {
	var _this = this;
	var author = $("#author").val();
	var quote = $("#quote").val();
	var data = {
			author: author,
			quote: quote,
	}
	/*this.getEl().on('panel-unload', function(){
		_this.getEl().find('form').get(0).reset();
		_this.setKey("");
	});
*/	/*this.getEl().on('panel-load', function(event, key){
		_this.setKey(key);
		$.getJSON(_this.getGetUrl() +'?key+'+_this.getKey()).then(function(data){
			$("#author").val(data.author ? data.author : "");
			$("#quote").val(data.quote ? data.quote : "");
		});
	});*/
	
	
}
