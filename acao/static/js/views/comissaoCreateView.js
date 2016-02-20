var ComissaoCreateView = function (comissao_model,comissao_views) {
	this.template = $("#comissaoCreateViewTemplate").html();

	this.fetchData();

	this.comissao_model = comissao_model;
	this.comissao_views = comissao_views;
	var self = this;

}

ComissaoCreateView.prototype.show = function() {
	$("#comissaoCreateView").show();
};

ComissaoCreateView.prototype.hide = function() {
	$("#comissaoCreateView").hide();
};

ComissaoCreateView.prototype.load = function() {
	var self = this;
	console.log("load CREATE COMISSAO");
    var items = [];
    $("#comissaoCreateView").html(_.template(this.template,{items:items}));

    $("#botao_create_comissao").click(function(e){
		console.log("ESSE CLICK NO BOTAO INICIA A OPERACAO DE SAVE");
		self.createComissao();
	});


};

ComissaoCreateView.prototype.fetchData = function() {

		$("#tableRowSpinner").hide();
};



ComissaoCreateView.prototype.createComissao = function() {
	var self = this;
	comissao_obj = {};
	comissao_obj['sigla_to_save'] = $("#create_comissao_sigla").val();
	comissao_obj['nome_to_save'] = $("#create_comissao_nome").val();
	comissao_obj['indicado_to_save'] = $("#create_comissao_indicado").val();
	comissao_obj['condicao_to_save'] = $("#create_comissao_condicao").val();
	
	var sucess_function = function(resultado) {
		//SUCESSO = TRUE
		self.comissao_views.load();
		self.comissao_views.show();
		self.hide();
	}

	console.log("comissao_obj");
	console.log(comissao_obj);
	this.comissao_model.saveComissao(comissao_obj, sucess_function);
		
};
