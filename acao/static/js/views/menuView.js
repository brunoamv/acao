var MenuView = function (contentView) {
	var self = this;

    var items = [];
	var template = $("#menuViewTemplate").html();

	this.contentView = contentView;
	console.log(this.contentView);

    $("#menuView").html(_.template(template,{items:items}));

    $(".menuLink").click(function(e){
    	self.contentView.dashboardView.hide();
        self.contentView.frentesView.hide();
        self.contentView.frentesView.frenteDetailsView.hide();
    });

    $("#dashboardMenuLink").click(function(e){
    	self.contentView.dashboardView.show();

    });

    $("#frentesMenuLink").click(function(e){
    	self.contentView.frentesView.show();
    });
}