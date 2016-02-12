var FrentesView = function () {
	this.template = $("#frentesViewTemplate").html();

	this.frenteDetailsView = new FrenteDetailsView();
	this.frenteModel = new Frente();

	this.fetchData();
}

FrentesView.prototype.show = function() {
	$("#frentesView").show();
};

FrentesView.prototype.hide = function() {
	$("#frentesView").hide();
};

FrentesView.prototype.load = function() {
    var items = [];

    $("#frentesView").html(_.template(this.template,{items:items}));
	
};

FrentesView.prototype.fetchData = function() {
	var self = this;

	var sucess_function = function(resultado) {

		$("#tableRowSpinner").hide();
		
		lista_frentes = resultado['frentes'];
		
		for(x in lista_frentes){
			$('#tabela_frentes tbody').append(new FrenteView().render(lista_frentes[x]));
		}

		$("#tabela_frentes tbody tr").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			console.log(id_frente_clicado);
			self.showFrenteDetails(id_frente_clicado);
//			window.location.href = "/frente/"+id_frente_clicado+"/";
		});
//
//		//$("#create_frente").click(function(e){
//		//	id_frente_clicado = e.currentTarget.id;
//		//	window.location.href = "/frente/create/";
//		//});
//
//		//$("#tabela_frentes tbody tr .fa fa-check").click(function(e){
//		//	id_frente_clicado = e.currentTarget.id;
//		//	window.location.href = "/frente/update/";
//		//});
//
//		//$("#tabela_frentes tbody tr.fa fa-remove").click(function(e){
//		//	id_frente_clicado = e.currentTarget.id;
//		//	window.location.href = "/frente/delete/";
		//});


	}
	this.frenteModel.load(sucess_function);
};

FrentesView.prototype.showFrenteDetails = function(id_frente_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		console.log(resultado);
		self.frenteDetailsView.render(resultado);
		self.hide();
		self.frenteDetailsView.show();
	}

	this.frenteModel.loadDetails(id_frente_clicado, sucess_function);
};