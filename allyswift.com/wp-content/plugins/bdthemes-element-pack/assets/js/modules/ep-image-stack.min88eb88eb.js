! function(t, n) {
    "use strict";
    var e = function(t, n) {
        var e = t.find(".bdt-image-stack");
        if (e.length) {
            var i = e.find(".bdt-tippy-tooltip"),
                o = t.data("id");
            i.each((function(t) {
                tippy(this, {
                    allowHTML: !0,
                    theme: "bdt-tippy-" + o
                })
            }))
        }
    };
    jQuery(window).on("elementor/frontend/init", (function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/bdt-image-stack.default", e)
    }))
}(jQuery, window.elementorFrontend);