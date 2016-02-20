var ComissoesView = function () {
	this.template = $("#comissoesViewTemplate").html();

	this.comissaoModel = new Comissao();
	this.comissaoDetailsView = new ComissaoDetailsView();
	this.comissaoCreateView = new ComissaoCreateView(this.comissaoModel,this);
	this.comissaoUpdateView = new ComissaoUpdateView(this.comissaoModel,this);
//
}

ComissoesView.prototype.show = function() {
	$("#comissoesView").show();
};

ComissoesView.prototype.hide = function() {
	$("#comissoesView").hide();
};

ComissoesView.prototype.load = function() {
    var items = [];
	this.fetchData();
    console.log("opa");
    $("#comissoesView").html(_.template(this.template,{items:items}));
	
};

ComissoesView.prototype.fetchData = function() {
	this.comissao_dict = {}
	var self = this;

	var sucess_function = function(resultado) {


		$("#tableRowSpinner").hide();
		
		lista_comissoes = resultado['comissoes'];
		
		for(x in lista_comissoes){
			$('#table_comissoes tbody').append(new ComissaoView().render(lista_comissoes[x]));
			self.comissao_dict[lista_comissoes[x]['id']] = lista_comissoes[x]
		}

		$("#table_comissoes tbody tr .details_comissao").click(function(e){
			id_comissao_clicado = e.currentTarget.id;
			console.log(id_comissao_clicado);
			self.showComissaoDetails(id_comissao_clicado);
			//window.location.href = "/comissao/"+id_comissao_clicado+"/";
		});

		$("#table_comissoes tbody tr .delete_comissao").click(function(e){
            id_comissao_clicado = e.currentTarget.id;
            console.log(id_comissao_clicado);
            self.showComissaoDelete(id_comissao_clicado);
        });

        $("#table_comissoes tbody tr .update_comissao").click(function(e){
            id_comissao_clicado = e.currentTarget.id;
            console.log("id_comissao_clicado");
            console.log(id_comissao_clicado);
            console.log(self.comissao_dict);
            comissao_obj = self.comissao_dict[id_comissao_clicado];
            //self.showFrenteUpdate(id_frente_clicado);
            self.comissaoUpdateView.render(comissao_obj);
            self.hide();
            console.log("QUASE SHOW'");
            self.comissaoUpdateView.show();
        });

		$("#create_comissao").click(function(e){
			id_comissao_clicado = e.currentTarget.id;
			self.hide();
			self.comissaoCreateView.load();
			self.comissaoCreateView.show();
		});

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

ComissoesView.prototype.showComissaoDelete = function(id_comissao_clicado) {
    var self = this;
    var sucess_function = function(resultado) {
        console.log("DELETADO COM SUCESSO");
        self.load();
        self.show();        
    }

    console.log('id_comissao_clicado');
    console.log(id_comissao_clicado);

    this.comissaoModel.deleteComissoes(id_comissao_clicado, sucess_function);
};