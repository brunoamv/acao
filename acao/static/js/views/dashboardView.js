var DashboardView = function () {
	this.template = $("#dashboardViewTemplate").html();
}

DashboardView.prototype.show = function() {
	$("#dashboardView").show();
};

DashboardView.prototype.hide = function() {
	$("#dashboardView").hide();
};

DashboardView.prototype.load = function() {
    var items = [];

    $("#dashboardView").html(_.template(this.template,{items:items}));
	
};