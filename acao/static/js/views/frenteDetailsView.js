var FrenteDetailsView = function () {
	var self = this;
	this.frentesTemplate = $("#frenteDetailsViewTemplate").html();
	//this.frentesParlamentaresTemplate = $("#frenteParlamentaresDetailsViewTemplate").html();

	this.parlamentarModel = new Parlamentar();

	this.frenteCreateParlamentarView = new FrenteCreateParlamentarView();
	this.frenteCreateParlamentarView.load();
}


FrenteDetailsView.prototype.render = function(frente_details) {
	var self = this;
    var compiledFrente = _.template(this.frentesTemplate);
    //return compiled(frente_details);
    $("#frenteDetailsView").html(compiledFrente(frente_details));


   	$("#frenteParlamentaresDetailsView tbody tr").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
			console.log(id_frente_clicado);
			console.log("FOI ESSE ID");
			self.showParlamentarDetails(id_parlamentar_clicado);
			//window.location.href = "/frente/"+id_frente_clicado+"/";
	});

	$("#create_frenteParlamentar").click(function(e){
			id_frente = e.currentTarget.id;
			console.log(id_frente);
			self.frenteCreateParlamentarView.show();

			console.log("OPAAAAA TERMINOU");
	});
}


FrenteDetailsView.prototype.show = function() {
	$("#frenteDetailsView").show();
};

FrenteDetailsView.prototype.hide = function() {
	$("#frenteDetailsView").hide();
};

FrenteDetailsView.prototype.showParlamentarDetails = function(id_frente_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		if (resultado='true') {
			self.parlamentarDetailsView.render(resultado);
			self.hide();
			self.parlamentarDetailsView.show();
		}
	    else{
	    	console.log("VAI");
	    };
	}

	this.parlamentarModel.loadDetails(id_frente_clicado, sucess_function);
};




