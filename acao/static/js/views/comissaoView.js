var ComissaoView = function () {
	var self = this;
	this.template = $("#comissaoViewTemplate").html();
}

ComissaoView.prototype.render = function(comissao) {
    var compiled = _.template(this.template);
    return compiled(comissao);
}

ComissaoView.prototype.show = function() {
	$("#comissaoView").show();
};

ComissaoView.prototype.hide = function() {
	$("#comissaoView").hide();
};
