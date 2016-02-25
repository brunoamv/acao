var ComissaoUpdateView = function (comissao_model,comissoes_views) {
	var self = this;
	this.comissoesTemplate = $("#comissaoUpdateViewTemplate").html();
	
	this.comissao_model = comissao_model;
	this.comissoes_views = comissoes_views;
	this.fetchData();
	
}

ComissaoUpdateView.prototype.fetchData = function() {
	var self = this;

	
};



ComissaoUpdateView.prototype.render = function(comissao_details) {
	var self = this;
	console.log("CHEGOU RENDER");
    var compiled = _.template(this.comissoesTemplate);
    //return compiled(comissao_details);
    $("#comissaoUpdateView").html(compiled(comissao_details));

    $("#botao_update_comissao").click(function(e){
		console.log("ESSE CLICK NO BOTAO INICIA A OPERACAO DE SAVE");
		self.updateComissao();
	});
	console.log("SAIU RENDER");
}

ComissaoUpdateView.prototype.show = function() {
	console.log("CHEGOU NO SHOW");
	$("#comissaoUpdateView").show();
};

ComissaoUpdateView.prototype.hide = function() {
	console.log("CHEGOU NO hide");
	$("#comissaoUpdateView").hide();
};


ComissaoUpdateView.prototype.updateComissao = function() {
	var self = this;
	console.log("FUNCAO UPDATE FRENTE");
	comissao_obj = {};
	comissao_obj['id_to_save'] = $("#update_comissao_id").val();
	comissao_obj['sigla_to_save'] = $("#update_comissao_sigla").val();
	comissao_obj['nome_to_save'] = $("#update_comissao_nome").val();
	comissao_obj['indicado_to_save'] = $("#update_comissao_indicado").val();
	comissao_obj['condicao_to_save'] = $("#update_comissao_condicao").val();

	console.log(comissao_obj);

	var sucess_function = function(resultado) {
		console.log("SUCESSO");
			//SUCESSO = TRUE
		self.comissoes_views.load();
		self.comissoes_views.show();
		self.hide();
	}

	this.comissao_model.updateComissaoSave(comissao_obj,sucess_function);
};