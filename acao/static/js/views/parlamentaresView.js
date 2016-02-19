var ParlamentaresView = function () {
	
	this.template = $("#parlamentaresViewTemplate").html();

	self = this;
	this.parlamentarModel = new Parlamentar();
	this.parlamentarDetailsView = new ParlamentarDetailsView();
	this.parlamentarCreateView = new ParlamentarCreateView(this.parlamentarModel,this);


}

ParlamentaresView.prototype.show = function() {
	$("#parlamentaresView").show();
};

ParlamentaresView.prototype.hide = function() {
	$("#parlamentaresView").hide();
};

ParlamentaresView.prototype.load = function() {
    var self = this;
    var items = [];
    $("#parlamentaresView").html(_.template(this.template,{items:items}));
	self.fetchData();

	//----adwdw NAO SEO PQ PAROU DE FUNFAR fetchData
	var sucess_function = function(resultado) {


		$("#tableRowSpinner").hide();
		
		lista_parlamentares = resultado['parlamentares'];
		
		for(x in lista_parlamentares){
			$('#table_parlamentares tbody').append(new ParlamentarView().render(lista_parlamentares[x]));
		}


		$("#table_parlamentares tbody tr .update_parlamentar").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
			console.log("id_parlamentar_clicado");
			console.log(id_parlamentar_clicado);
			parlamentar_obj = self.parlamentars_dict[id_parlamentar_clicado];
			//self.showFrenteUpdate(id_parlamentar_clicado);
			self.parlamentarUpdateView.render(parlamentar_obj);
			self.hide();
			self.parlamentarUpdateView.show();

		});

		$("#table_parlamentares tbody tr .delete_parlamentar").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
			console.log(id_parlamentar_clicado);
			self.showParlamentarDelete(id_parlamentar_clicado);
		});

		$("#table_parlamentares tbody tr .details_parlamentar").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
			console.log(id_parlamentar_clicado);
			self.showParlamentarDetails(id_parlamentar_clicado);
		});

		$("#create_parlamentar").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
					self.hide();
					self.parlamentarCreateView.load();
					self.parlamentarCreateView.show();
		});
	}
	this.parlamentarModel.load(sucess_function);


};


ParlamentaresView.prototype.fetchData = function() {
   
	console.log("this.fetchData();");
	
};

ParlamentaresView.prototype.showParlamentarDetails = function(id_parlamentar_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		self.parlamentarDetailsView.render(resultado);
		console.log(resultado);
		self.hide();
		self.parlamentarDetailsView.show();
	}

	this.parlamentarModel.loadDetails(id_parlamentar_clicado, sucess_function);
};

ParlamentaresView.prototype.showParlamentarDelete = function(id_parlamentar_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		console.log("DELETADO COM SUCESSO");
		self.load();
		self.show();		
	}

	console.log('id_parlamentar_clicado');
	console.log(id_parlamentar_clicado);

	this.parlamentarModel.deleteParlamentar(id_parlamentar_clicado, sucess_function);
};
