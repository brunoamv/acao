var FrenteCreateView = function (frente_model,frentes_views) {
	this.template = $("#frenteCreateViewTemplate").html();

	this.frente_model = frente_model;
	console.log(this);
	this.frentes_views = frentes_views;
var self = this;

}

FrenteCreateView.prototype.show = function() {
	$("#frenteCreateView").show();
};

FrenteCreateView.prototype.hide = function() {
	$("#frenteCreateView").hide();
};

FrenteCreateView.prototype.load = function() {
	var self=this;
    var items = [];
    $("#frenteCreateView").html(_.template(this.template,{items:items}));
	$("#botao_create_frente").click(function(e){
		console.log("ESSE CLICK NO BOTAO INICIA A OPERACAO DE SAVE");
		self.createFrente();
	});
	$("#create_frente_ano").datetimepicker({
		format: 'YYYY-MM-DD'
	});
};

FrenteCreateView.prototype.createFrente = function() {
	var self=this;
	console.log("FUNCAO CREATE FRENTE");
	frente_obj = {};
	frente_obj['id_to_save'] = $("#create_frente_id").val();
	frente_obj['sigla_to_save'] = $("#create_frente_sigla").val();
	frente_obj['nome_to_save'] = $("#create_frente_nome").val();
	frente_obj['tipo_to_save'] = $("#create_frente_tipo").val();
	frente_obj['ano_to_save'] = $("#create_frente_ano").val();

	var sucess_function = function(resultado) {
		//SUCESSO = TRUE
		self.frentes_views.load();
		self.frentes_views.show();
	}

	this.frente_model.saveFrente(frente_obj, sucess_function);
};