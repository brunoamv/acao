var ParlamentarUpdateView = function (parlamentar_model,parlamentares_views) {
	var self = this;
	this.parlamentaresTemplate = $("#parlamentarUpdateViewTemplate").html();
	
	this.parlamentar_model = parlamentar_model;
	this.parlamentares_views = parlamentares_views;
	this.fetchData();
	
}

ParlamentarUpdateView.prototype.fetchData = function() {
	var self = this;

	
};



ParlamentarUpdateView.prototype.render = function(parlamentar_details) {
	var self = this;
    var compiled = _.template(this.parlamentaresTemplate);
    //return compiled(parlamentar_details);
    $("#parlamentarUpdateView").html(compiled(parlamentar_details));

    $("#botao_update_parlamentar").click(function(e){
		console.log("ESSE CLICK NO BOTAO INICIA A OPERACAO DE SAVE");
		self.updateParlamentar();
	});
	$("#update_parlamentar_aniversario").datetimepicker({
		format: 'YYYY-MM-DD'
	});


}

ParlamentarUpdateView.prototype.show = function() {
	$("#parlamentarUpdateView").show();
};

ParlamentarUpdateView.prototype.hide = function() {
	$("#parlamentarUpdateView").hide();
};


ParlamentarUpdateView.prototype.updateParlamentar = function() {
	var self = this;
	console.log("FUNCAO UPDATE FRENTE");
	parlamentar_obj = {};
	parlamentar_obj['id_to_save'] = $("#update_parlamentar_id").val();
	parlamentar_obj['nome_to_save'] = $("#update_parlamentar_nome").val();
	parlamentar_obj['uf_to_save'] = $("#update_parlamentar_uf").val();
	parlamentar_obj['celular_to_save'] = $("#update_parlamentar_celular").val();
	parlamentar_obj['telefone_to_save'] = $("#update_parlamentar_telefone").val();
	parlamentar_obj['fax_to_save'] = $("#update_parlamentar_fax").val();
	parlamentar_obj['titular_to_save'] = $("#update_parlamentar_titular").val();
	parlamentar_obj['gabinete_to_save'] = $("#update_parlamentar_gabinete").val();
	parlamentar_obj['anexo_to_save'] = $("#update_parlamentar_anexo").val();
	parlamentar_obj['profissoes_to_save'] = $("#update_parlamentar_profissoes").val();
	parlamentar_obj['aniversario_to_save'] = $("#update_parlamentar_aniversario").val();
	parlamentar_obj['nome_civil_to_save'] = $("#update_parlamentar_nome_civil").val();
	parlamentar_obj['tratamento_to_save'] = $("#update_parlamentar_tratamento").val();

	console.log(parlamentar_obj);

	var sucess_function = function(resultado) {
		console.log("SUCESSO");
			//SUCESSO = TRUE
		self.parlamentares_views.load();
		self.parlamentares_views.show();
		self.hide();
	}

	this.parlamentar_model.updateParlamentarSave(parlamentar_obj,sucess_function);
};