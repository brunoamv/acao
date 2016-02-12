(function(global, $) {

	/**
	 * @class BaseView
	 */
	global.BaseView = {

		/**
		 * A shortcut to <code>this.el.find</code>
		 * @param {String} css selector
		 * @returns {Array|Boolean} jQuery elements or <code>false</code>
		 * if <code>this.el</code> is not defined. 
		 */
		$ : function(selector) {
			return this.el ? this.el.find(selector) : false;
		},

		on : function() {
			if (this.el) {
				this.el.on.apply(this.el, arguments);
			}
		}

	};

})(window, jQuery);