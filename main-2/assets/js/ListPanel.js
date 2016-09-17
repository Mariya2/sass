/**
 * 
 */
function ListPanel ($el) {
	var _el = $el;
	var _data = [];
	var _url = "server/list.php";
	var _deleteUrl = 'server/delete.php';
	
	this.getEl = function(){
		return _el;
	};
	this.getData = function(){
		return _data;
	};
	this.getUrl = function(){
		return _url;
	};
	this.getDeleteUrl = function(){
		return _deleteUrl;
	};
	this.setEl = function(newEl){
		_el=newEl;
	};
}
ListPanel.prototype.init = function() {
	var _this = this;
	_this.getEl().on('panel-load', function() {
		_this.loadData();
	});
	
	
	
	$('#add-new').on('click', function() {
		$(document).trigger('show-panel', {panel: 'edit-panel'});
	});
	
	
	_this.getEl().find('table').on('click', '.btn-delete', function(e) {
		var index = $(this).closest('tr').data('index');
		
		$.get(_this.getDeleteUrl() + '?key=' + index).then(function() {
			_this.loadData();
		});
	})

	
	_this.getEl().find('table').on('click', '.btn-edit', function(e) {
		var e = e;
		var index = $(this).closest('tr').data('index');
		$(document).trigger('show-panel', {panel: 'edit-panel', data: index})
	});
}

ListPanel.prototype.dataToRows = function(data) {
	var html = '';
	for (var i in data) {
		html +='<tr data-index="' + i + '">' +
			'<td class="td-numbers">'+ (parseInt(i)+1) + "</td>" +
			'<td  class="td-category">'+ data[i].category + "</td>" +
			'<td class="td-author">'+ data[i].author + "</td>" +
			'<td class="td-quote">'+ data[i].quote + "</td>" +
			'<td class="td-active">'+ data[i].active + "</td>" +
			'<td><a href="javascript:void(0)" class="btn-edit">edit</a></td><td><a class="btn-delete" href="javascript:void(0)">delete</a></td>' + '</tr>';
	}
	return html;
}
ListPanel.prototype.loadData = function() {
	var _this = this;
	$.getJSON(_this.getUrl()).then(function(data){
		if (data !=[]) {
			data.success = true;
		}
		if(data.success) {
			console.log("success");
			sessionStorage.logged = 1;
			_this.getData().push(data);
			var tbody = _this.getEl().find('tbody');
			tbody.html('').append(_this.dataToRows(data));
				
		} else {
			alert(data.error);
		}
	});
}

/*ListPanel.prototype.sorting = function() {
	var _this = this;
	$.getJSON(_this.getUrl()).then(function(data){
		if (data !=[]) {
			data.success = true;
		}
		if(data.success) {
			_this.getData().push(data);
			var tbody = _this.getEl().find('tbody');
			tbody.html('').append(_this.dataToRows(data));
			sessionStorage.logged = 1;
				
		} else {
			alert(data.error);
		}
	});
}

ListPanel.prototype.pagination = function(){
	var page = 10;
	$(document).on("click", function(e){
		e.target
	});
	var sortBy = 
}*/
