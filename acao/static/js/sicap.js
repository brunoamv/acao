var Sicap = function () {
	this.topBarView = new TopBarView(); 
	this.contentView = new ContentView();
	this.menuView = new MenuView(this.contentView); 
}