var MenuView = function (contentView) {
	var self = this;

    var items = [];
	var template = $("#menuViewTemplate").html();

	this.contentView = contentView;
	console.log(this.contentView);

    $("#menuView").html(_.template(template,{items:items}));

    $(".menuLink").click(function(e){
    	self.contentView.dashboardView.hide();
        self.contentView.parlamentaresView.hide();
        self.contentView.parlamentaresView.parlamentarDetailsView.hide();
        self.contentView.parlamentaresView.parlamentarCreateView.hide();
        self.contentView.parlamentaresView.parlamentarUpdateView.hide();
        self.contentView.comissoesView.hide();
        self.contentView.comissoesView.comissaoDetailsView.hide();
        self.contentView.comissoesView.comissaoCreateView.hide();
        self.contentView.comissoesView.comissaoUpdateView.hide();
        self.contentView.frentesView.hide();
        self.contentView.frentesView.frenteDetailsView.hide();
        self.contentView.frentesView.frenteCreateView.hide();
        self.contentView.frentesView.frenteUpdateView.hide();
    });

    $("#dashboardMenuLink").click(function(e){
    	self.contentView.dashboardView.show();

    });

    $("#parlamentarMenuLink").click(function(e){
        self.contentView.parlamentaresView.show();
    });

    $("#comissoesMenuLink").click(function(e){
        self.contentView.comissoesView.show();
    });

    $("#frentesMenuLink").click(function(e){
    	self.contentView.frentesView.show();
    });



}