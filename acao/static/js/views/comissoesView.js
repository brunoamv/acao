var ComissoesView = function () {
	this.template = $("#comissoesViewTemplate").html();

	this.comissaoDetailsView = new ComissaoDetailsView();
	this.comissaoCreateView = new ComissaoCreateView();
	this.comissaoModel = new Comissao();
//
	this.fetchData();
}

ComissoesView.prototype.show = function() {
	$("#comissoesView").show();
};

ComissoesView.prototype.hide = function() {
	$("#comissoesView").hide();
};

ComissoesView.prototype.load = function() {
    var items = [];
    console.log("opa");
    $("#comissoesView").html(_.template(this.template,{items:items}));
	
};

ComissoesView.prototype.fetchData = function() {
	var self = this;

	var sucess_function = function(resultado) {


		$("#tableRowSpinner").hide();
		
		lista_comissoes = resultado['comissoes'];
		
		for(x in lista_comissoes){
			$('#table_comissoes tbody').append(new ComissaoView().render(lista_comissoes[x]));
		}

		$("#table_comissoes tbody tr").click(function(e){
			id_comissao_clicado = e.currentTarget.id;
			console.log(id_comissao_clicado);
			self.showComissaoDetails(id_comissao_clicado);
			//window.location.href = "/comissao/"+id_comissao_clicado+"/";
		});

		$("#create_comissao").click(function(e){
			id_comissao_clicado = e.currentTarget.id;
					self.hide();
					self.comissaoCreateView.load();
					self.comissaoCreateView.show();
		});
//
//		//$("#table_comissoes tbody tr .fa fa-check").click(function(e){
//		//	id_comissao_clicado = e.currentTarget.id;
//		//	window.location.href = "/comissao/update/";
//		//});
//
//		//$("#table_comissoes tbody tr.fa fa-remove").click(function(e){
//		//	id_comissao_clicado = e.currentTarget.id;
//		//	window.location.href = "/comissao/delete/";
		//});


	}
	this.comissaoModel.load(sucess_function);
};

ComissoesView.prototype.showComissaoDetails = function(id_comissao_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		console.log(resultado);
		self.comissaoDetailsView.render(resultado);
		self.hide();
		self.comissaoDetailsView.show();
	}

	this.comissaoModel.loadDetails(id_comissao_clicado, sucess_function);
};

ComissoesView.prototype.showCreateDetails = function() {
		


};
