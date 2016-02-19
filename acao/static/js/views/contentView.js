var ContentView = function () {
    var items = [];
	var template = $("#contentViewTemplate").html();
    $("#contentView").html(_.template(template,{items:items}));

	this.dashboardView = new DashboardView(); 
	this.frentesView = new FrentesView(); 
	this.parlamentaresView = new ParlamentaresView(); 
	this.comissoesView = new ComissoesView(); 



	this.dashboardView.load();
	this.frentesView.load();
	this.parlamentaresView.load();
	this.comissoesView.load();



	this.dashboardView.show();
}