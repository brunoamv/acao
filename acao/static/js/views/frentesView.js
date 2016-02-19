var FrentesView = function () {
	this.template = $("#frentesViewTemplate").html();

	self = this;
	this.frenteModel = new Frente();
	this.frenteDetailsView = new FrenteDetailsView();
	this.frenteUpdateView = new FrenteUpdateView(this.frenteModel,this);
	this.frenteCreateView = new FrenteCreateView(this.frenteModel,this);

}

FrentesView.prototype.show = function() {				
	$("#frentesView").show();
};

FrentesView.prototype.hide = function() {
	$("#frentesView").hide();
};

FrentesView.prototype.load = function() {
	this.fetchData();
	console.log("FUNCAO LOAD FRENTE");
    var items = [];

    $("#frentesView").html(_.template(this.template,{items:items}));	
};

FrentesView.prototype.fetchData = function() {
	var self = this;
	this.frentes_dict = {}

	var sucess_function = function(resultado) {


		$("#tableRowSpinner").hide();
		
		lista_frentes = resultado['frentes'];
		
		for(x in lista_frentes){
			$('#tabela_frentes tbody').append(new FrenteView().render(lista_frentes[x]));
			self.frentes_dict[lista_frentes[x]['id']] = lista_frentes[x]
		}

		$("#tabela_frentes tbody tr .update").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			console.log("id_frente_clicado");
			console.log(id_frente_clicado);
			frente_obj = self.frentes_dict[id_frente_clicado];
			//self.showFrenteUpdate(id_frente_clicado);
			self.frenteUpdateView.render(frente_obj);
			self.hide();
			self.frenteUpdateView.show();

		});

		$("#tabela_frentes tbody tr .delete").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			console.log(id_frente_clicado);
			self.showFrenteDelete(id_frente_clicado);
		});

		$("#tabela_frentes tbody tr .details").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			console.log(id_frente_clicado);
			self.showFrenteDetails(id_frente_clicado);
			//window.location.href = "/frente/"+id_frente_clicado+"/";
		});

		$("#create_frente").click(function(e){
			id_frente_clicado = e.currentTarget.id;
			self.hide();
			self.frenteCreateView.load();
			self.frenteCreateView.show();
		});


	}
	this.frenteModel.load(sucess_function);
};

FrentesView.prototype.showFrenteDelete = function(id_frente_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		console.log("DELETADO COM SUCESSO");
		self.load();
		self.show();		
	}

	console.log('id_frente_clicado');
	console.log(id_frente_clicado);

	this.frenteModel.deleteFrente(id_frente_clicado, sucess_function);
};

FrentesView.prototype.showFrenteUpdate = function(id_frente_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		self.frenteUpdateView.render(resultado);
		self.hide();
		self.frenteUpdateView.show();
	}

	this.frenteModel.updateFrente(id_frente_clicado, sucess_function);
};


FrentesView.prototype.showFrenteDetails = function(id_frente_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		self.fetchParlamentaresData(id_frente_clicado);
		self.frenteDetailsView.render(resultado);
		self.hide();
		self.frenteDetailsView.show();
	}

	this.frenteModel.loadDetails(id_frente_clicado, sucess_function);
};

FrentesView.prototype.fetchParlamentaresData = function(id_frente_clicado){
	var self = this;
	var sucess_function = function(resultado) {

		lista_parlamentares = resultado['frenteParlametares'];
		
		for(x in lista_parlamentares){
			$('#frenteParlamentaresDetailsView tbody').append(new ParlamentarView().render(lista_parlamentares[x]));
		}
		self.hide();
	}
		this.frenteModel.loadDetails_parlamentares(id_frente_clicado, sucess_function);
};

