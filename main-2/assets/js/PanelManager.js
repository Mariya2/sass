
function PanelManager() {
	var _panels = ['header-panel', 'login-panel','signin-panel', "list-panel", "edit-panel"];
	var _defaultPanel = 'header-panel';
	
	this.getPanels = function(){
		return _panels;
	};
	this.setPanels = function(newPanels){
		_panels = newPanels;
	};
	this.getDefaultPanel = function(){
		return _defaultPanel;
	};
	this.setDefaultPanel = function(newDefaultPanel){
		_defaultPanel = newDefaultPanel;
	};
}
PanelManager.prototype.show = function(name, data) {
	for (var i in this.getPanels()) {
		var $panel = $('#' + this.getPanels()[i]);
		if (this.getPanels()[i] == name) {
			$panel.show('slow', function() {
				$(this).trigger('panel-load', data);
			});
		} else {
			$panel.hide('slow');
			$panel.trigger('panel-unload');
		}
	}
}
PanelManager.prototype.init = function() {
	if (sessionStorage.logged ==1) {
		this.setDefaultPanel('list-panel');
	}
	this.show(this.getDefaultPanel());
	var _this = this;
	$(document).on('show-panel', function(e, data) {
		_this.show(data.panel, data.data);
	})
}