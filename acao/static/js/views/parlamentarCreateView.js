var ParlamentarCreateView = function (parlamentar_model,parlamentar_views) {
	this.template = $("#parlamentarCreateViewTemplate").html();

	

	this.parlamentar_model = parlamentar_model;
	this.parlamentar_views = parlamentar_views;
	var self = this;
	this.fetchData();
}

ParlamentarCreateView.prototype.show = function() {
	$("#parlamentarCreateView").show();
};

ParlamentarCreateView.prototype.hide = function() {
	$("#parlamentarCreateView").hide();
};

ParlamentarCreateView.prototype.load = function() {
    var items = [];
    var self = this;
    $("#parlamentarCreateView").html(_.template(this.template,{items:items}));
    $("#botao_create_parlamentar").click(function(e){
		console.log("ESSE CLICK NO BOTAO INICIA A OPERACAO DE SAVE");
		self.createParlamentar();
	});
	$("#create_parlamentar_aniversario").datetimepicker({
		format: 'YYYY-MM-DD'
	});

};

ParlamentarCreateView.prototype.fetchData = function() {

		$("#tableRowSpinner").hide();
};

ParlamentarCreateView.prototype.createParlamentar = function() {
		var self=this;
	
	parlamentar_obj = {};
	parlamentar_obj['id_to_save'] = $("#create_parlamentar_id").val();
	parlamentar_obj['nome_to_save'] = $("#create_parlamentar_nome").val();
	parlamentar_obj['uf_to_save'] = $("#create_parlamentar_uf").val();
	parlamentar_obj['celular_to_save'] = $("#create_parlamentar_celular").val();
	parlamentar_obj['telefone_to_save'] = $("#create_parlamentar_telefone").val();
	parlamentar_obj['fax_to_save'] = $("#create_parlamentar_fax").val();
	parlamentar_obj['titular_to_save'] = $("#create_parlamentar_titular").val();
	parlamentar_obj['gabinete_to_save'] = $("#create_parlamentar_gabinete").val();
	parlamentar_obj['anexo_to_save'] = $("#create_parlamentar_anexo").val();
	parlamentar_obj['profissoes_to_save'] = $("#create_parlamentar_profissoes").val();
	parlamentar_obj['aniversario_to_save'] = $("#create_parlamentar_aniversario").val();
	parlamentar_obj['nome_civil_to_save'] = $("#create_parlamentar_nome_civil").val();
	parlamentar_obj['tratamento_to_save'] = $("#create_parlamentar_tratamento").val();	

	var sucess_function = function(resultado) {
		//SUCESSO = TRUE
		self.parlamentar_views.load();
		self.parlamentar_views.show();
		self.hide();
	}

	console.log("parlamentar_obj");
	console.log(parlamentar_obj);
	this.parlamentar_model.saveParlamentar(parlamentar_obj, sucess_function);
};