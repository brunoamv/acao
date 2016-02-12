var FrenteView = function () {
	var self = this;
	this.template = $("#frenteViewTemplate").html();
}

FrenteView.prototype.render = function(frente) {
    var compiled = _.template(this.template);
    return compiled(frente);
}

FrenteView.prototype.show = function() {
	$("#frenteView").show();
};

FrenteView.prototype.hide = function() {
	$("#frenteView").hide();
};
