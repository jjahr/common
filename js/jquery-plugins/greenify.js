(function ($) {

	$.greenify = (function() {
		// Runs on jquery init
		console.log('$.greenify()');

		// Private functions
		var _privateFn = function() {
			console.log('_privateFn()');
		},
		// Constants
		CONSTANT = 1,
		// Private Variables
		_privateVar = 1;

		return {
			// Public functions
			howMany: function() {
				var el = $('.greenified');
				console.log('howMany: ' + el.length + ' greenified elements on page');
				_privateFn();
				return el.length;
			}
        }

	})();

	$.fn.greenify = function() {
		console.log('$.fn.greenify()');
	    this.css( "color", "green" ).addClass('greenified');
		var z = $.plugin.howMany();
		console.log('Page contains ' + z + ' greenified elements.');
	    return this; // Support chaining
	}

})(jQuery);
