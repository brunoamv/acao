var FrenteDetailsView = function () {
	var self = this;
	this.template = $("#frenteDetailsViewTemplate").html();
}

FrenteDetailsView.prototype.render = function(frente_details) {
    var compiled = _.template(this.template);
    //return compiled(frente_details);
    $("#frenteDetailsView").html(compiled(frente_details));

}

FrenteDetailsView.prototype.show = function() {
	$("#frenteDetailsView").show();
};

FrenteDetailsView.prototype.hide = function() {
	$("#frenteDetailsView").hide();
};