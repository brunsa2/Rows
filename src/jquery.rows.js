;(function($, window, document, undefined) {
    var defaultOptions = {
        ignore: null
    };
    
    var methods = {
        _init: function(options) {
            options = $.extend({}, defaultOptions, options);
            
            return this.each(function() {
            });
        },
        method: function() {
            console.log("Method");
        }
    };
    
    $.fn.rows = function(method) {
        // TODO: Make sure method is string and does not begin with _ for first if
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods._init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist on jQuery.rows");
        }
    };
})(jQuery);