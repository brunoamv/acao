var FrenteCreateParlamentarView = function () {
	var self = this;
	this.template = $("#frenteCreateParlamentarViewTemplate").html();

	this.parlamentarModel = new Parlamentar();
}

FrenteCreateParlamentarView.prototype.render = function(frente) {
    var compiled = _.template(this.template);
    return compiled(frente);
}

FrenteCreateParlamentarView.prototype.show = function() {
	console.log("DENTRO SHOW");
	$("#frenteCreateParlamentarView").show();
};

FrenteCreateParlamentarView.prototype.hide = function() {
	$("#frenteCreateParlamentarView").hide();
};


FrenteCreateParlamentarView.prototype.load = function() {
	this.fetchData();
	var self = this;
	var sucess_function = function(resultado) {
		console.log("FUNCAO LOAD FrenteCreateParlamentarView fetchData");
		lista_parlamentares = resultado['parlamentares'];
		for(x in lista_parlamentares){
			$('#frenteCreateParlamentarViewTemplate #table_parlamentares  tbody').append(new ParlamentarView().render(lista_parlamentares[x]));
		}
		console.log("FUNCAO LOAD FrenteCreateParlamentarView");
	    var items = [];
	    console.log($("#frenteCreateParlamentarView").html(_.template(self.template,{items:items})));
	    $("#frenteCreateParlamentarView").html(_.template(self.template,{items:items}));	
		self.hide();
	}
		this.parlamentarModel.load(sucess_function);

		
};

FrenteCreateParlamentarView.prototype.fetchData = function(){

};