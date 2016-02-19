var FrenteDetailsView = function () {
	var self = this;
	this.frentesTemplate = $("#frenteDetailsViewTemplate").html();
	this.frentesParlamentaresTemplate = $("#frenteParlamentaresDetailsViewTemplate").html();
	this.frentesParlamentaresCreateTemplate = $("#frenteCreateParlamentarViewTemplate").html();


	this.parlamentarModel = new Parlamentar();

	this.fetchData();
	
}

FrenteDetailsView.prototype.fetchData = function() {
	var self = this;

	
};



FrenteDetailsView.prototype.render = function(frente_details) {
	var self = this;
    var compiledFrente = _.template(this.frentesTemplate);
    //return compiled(frente_details);
    $("#frenteDetailsView").html(compiledFrente(frente_details));


   	$("#frenteParlamentaresDetailsView tbody tr").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
			console.log(id_frente_clicado);
			self.showParlamentarDetails(id_parlamentar_clicado);
			//window.location.href = "/frente/"+id_frente_clicado+"/";
	});

	$("#create_frenteParlamentar").click(function(e){
			id_frente = e.currentTarget.id;
			console.log(id_frente);
			self.createParlamentarDetails(id_frente);	
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

FrenteDetailsView.prototype.createParlamentarDetails = function(id_frente) {
	var self = this;

	var sucess_function = function(resultado) {


		$("#tableRowSpinner").hide();
		

		lista_parlamentares = resultado['parlamentares'];
		
		console.log("ATE AQUI");
		console.log(lista_parlamentares);
		console.log(self);
		console.log(self.frentesParlamentaresCreateTemplate);
	//	var parlamentarCreate = _.template(this.frentesParlamentaresCreateTemplate);
		//return compiled(frente_details);
		$("#frenteCreateParlamentarView").html(self.frentesParlamentaresCreateTemplate);



		$('#frenteCreateParlamentarView').show();
//		for(x in lista_parlamentares){
//			$('#frenteCreateParlamentarViewTemplate tbody').append(new ParlamentarView().render(lista_parlamentares[x]));
//		}

	}
	this.parlamentarModel.load(sucess_function);
};


ParlamentaresView.prototype.fetchData = function() {
	

};