var ParlamentarView = function () {
	var self = this;
	this.template = $("#parlamentarViewTemplate").html();
}

ParlamentarView.prototype.render = function(parlamentar) {
    var compiled = _.template(this.template);
    return compiled(parlamentar);
}

ParlamentarView.prototype.show = function() {
	$("#parlamentarView").show();
};

ParlamentarView.prototype.hide = function() {
	$("#parlamentarView").hide();
};
