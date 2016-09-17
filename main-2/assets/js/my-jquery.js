
$(function() {
	$("form").on("submit", function(e){
		e.preventDefault();
	})
	$("a").not("a#demo").on("click", function(e){
		e.preventDefault();
	})
	
	var panelManager = new PanelManager();
	var headerPanel = new HeaderPanel($('#header-panel'));
	var signPanel = new SignPanel($("#signin-panel"));
	var loginPanel = new LoginPanel($("#login-panel"));
	var listPanel = new ListPanel($("#list-panel"));
	var editPanel = new EditPanel($("#edit-panel"));
	headerPanel.init();
	signPanel.init();
	listPanel.init();
	editPanel.init();
	loginPanel.init();
	panelManager.init();
	
	
	$(".sign").on("click", function(){
		$(document).trigger("show-panel", {panel: "signin-panel"});
	})
	$(".log").on("click", function(){
		$(document).trigger("show-panel", {panel: "login-panel"});
		$('#login-form').get(0).reset();
	})
	$('#return-btn').on('click', function(){
		$(document).trigger("show-panel", {panel: "list-panel"});
		listPanel.loadData();
	})
	$("#header").on("click", function(){
		$(document).trigger("show-panel", {panel: "header-panel"});
	})

	/*$("#author-sort").on("click", function() {
		listPanel.sorting();
	})*/
})