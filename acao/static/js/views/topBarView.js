var TopBarView = function () {
    var items = [];
	var template = $("#topBarViewTemplate").html();

    $("#topBarView").html(_.template(template,{items:items}));
}