var ComissaoCreateView = function () {
	this.template = $("#comissaoCreateViewTemplate").html();
	this.fetchData();
}

ComissaoCreateView.prototype.show = function() {
	$("#comissaoCreateView").show();
};

ComissaoCreateView.prototype.hide = function() {
	$("#comissaoCreateView").hide();
};

ComissaoCreateView.prototype.load = function() {
    var items = [];
    $("#comissaoCreateView").html(_.template(this.template,{items:items}));

};

ComissaoCreateView.prototype.fetchData = function() {

		$("#tableRowSpinner").hide();
};

