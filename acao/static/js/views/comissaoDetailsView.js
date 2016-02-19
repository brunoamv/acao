var ComissaoDetailsView = function () {
	var self = this;
	this.template = $("#comissaoDetailsViewTemplate").html();
}

ComissaoDetailsView.prototype.render = function(comissao_details) {
    var compiled = _.template(this.template);
    //return compiled(comissao_details);
    $("#comissaoDetailsView").html(compiled(comissao_details));

}

ComissaoDetailsView.prototype.show = function() {
	$("#comissaoDetailsView").show();
};

ComissaoDetailsView.prototype.hide = function() {
	$("#comissaoDetailsView").hide();
};

