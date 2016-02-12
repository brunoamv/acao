var ContentView = function () {
    var items = [];
	var template = $("#contentViewTemplate").html();
    $("#contentView").html(_.template(template,{items:items}));

	this.dashboardView = new DashboardView(); 
	this.frentesView = new FrentesView(); 

	this.dashboardView.load();
	this.frentesView.load();
	
	this.dashboardView.show();
}