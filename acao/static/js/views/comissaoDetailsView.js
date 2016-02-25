var ComissaoDetailsView = function () {
	var self = this;
	this.template = $("#comissaoDetailsViewTemplate").html();

	this.parlamentarModel = new Parlamentar();

}

ComissaoDetailsView.prototype.render = function(comissao_details) {
    var compiled = _.template(this.template);
    //return compiled(comissao_details);
    $("#comissaoDetailsView").html(compiled(comissao_details));

	$("#comissaoParlamentaresDetailsView tbody tr").click(function(e){
			id_parlamentar_clicado = e.currentTarget.id;
			console.log(id_frente_clicado);
			self.showParlamentarDetails(id_parlamentar_clicado);
			//window.location.href = "/frente/"+id_frente_clicado+"/";
	});

	$("#create_comissaoParlamentar").click(function(e){
			id_comissao = e.currentTarget.id;
			console.log(id_comissao);
			self.createParlamentarDetails(id_comissao);	
	});

}

ComissaoDetailsView.prototype.show = function() {
	$("#comissaoDetailsView").show();
};

ComissaoDetailsView.prototype.hide = function() {
	$("#comissaoDetailsView").hide();
};

ComissaoDetailsView.prototype.showParlamentarDetails = function(id_comissao_clicado) {
	var self = this;
	var sucess_function = function(resultado) {
		if (resultado='true') {
			self.parlamentarDetailsView.render(resultado);
			self.hide();
			self.parlamentarDetailsView.show();
		}
	    else{
	    	console.log("VAI");
	    };
	}

	this.parlamentarModel.loadDetails(id_comissao_clicado, sucess_function);
};