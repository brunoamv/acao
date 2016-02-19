var FrenteUpdateView = function (frente_model,frentes_views) {
	var self = this;
	this.frentesTemplate = $("#frenteUpdateViewTemplate").html();
	
	this.frente_model = frente_model;
	this.frentes_views = frentes_views;
	this.fetchData();
	
}

FrenteUpdateView.prototype.fetchData = function() {
	var self = this;

	
};



FrenteUpdateView.prototype.render = function(frente_details) {
	var self = this;
    var compiled = _.template(this.frentesTemplate);
    //return compiled(frente_details);
    $("#frenteUpdateView").html(compiled(frente_details));

    $("#botao_update_frente").click(function(e){
		console.log("ESSE CLICK NO BOTAO INICIA A OPERACAO DE SAVE");
		self.updateFrente();
	});
	$("#update_frente_ano").datetimepicker({
		format: 'YYYY-MM-DD'
	});


}

FrenteUpdateView.prototype.show = function() {
	$("#frenteUpdateView").show();
};

FrenteUpdateView.prototype.hide = function() {
	$("#frenteUpdateView").hide();
};


FrenteUpdateView.prototype.updateFrente = function() {
	var self = this;
	console.log("FUNCAO UPDATE FRENTE");
	frente_obj = {};
	frente_obj['id_to_save'] = $("#update_frente_id").val();
	frente_obj['sigla_to_save'] = $("#update_frente_sigla").val();
	frente_obj['nome_to_save'] = $("#update_frente_nome").val();
	frente_obj['tipo_to_save'] = $("#update_frente_tipo").val();
	frente_obj['ano_to_save'] = $("#update_frente_ano").val();

	console.log(frente_obj);

	var sucess_function = function(resultado) {
		console.log("SUCESSO");
			//SUCESSO = TRUE
		self.frentes_views.load();
		self.frentes_views.show();
		self.hide();
	}

	this.frente_model.updateFrenteSave(frente_obj,sucess_function);
};