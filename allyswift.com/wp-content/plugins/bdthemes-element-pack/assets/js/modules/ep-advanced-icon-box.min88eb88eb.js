! function(n, e) {
    "use strict";
    var t = function(n, e) {
        var t = n.find(".bdt-ep-advanced-icon-box"),
            o = e(t).find(".bdt-ep-advanced-icon-box-separator-wrap > img");
        (t.length || o.length) && elementorFrontend.waypoint(o, (function() {
            bdtUIkit.svg(this, {
                strokeAnimation: !0
            })
        }), {
            offset: "bottom-in-view"
        })
    };
    jQuery(window).on("elementor/frontend/init", (function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/bdt-advanced-icon-box.default", t)
    }))
}(jQuery, window.elementorFrontend);