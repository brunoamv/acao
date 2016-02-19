var ParlamentarDetailsView = function () {
	var self = this;
	this.template = $("#parlamentarDetailsViewTemplate").html();
}

ParlamentarDetailsView.prototype.render = function(parlamentar_details) {
    var compiled = _.template(this.template);
    console.log(parlamentar_details);
    //return compiled(parlamentar_details)
    $("#parlamentarDetailsView").html(compiled(parlamentar_details));
}

ParlamentarDetailsView.prototype.show = function() {
	$("#parlamentarDetailsView").show();
};

ParlamentarDetailsView.prototype.hide = function() {
	$("#parlamentarDetailsView").hide();
};


