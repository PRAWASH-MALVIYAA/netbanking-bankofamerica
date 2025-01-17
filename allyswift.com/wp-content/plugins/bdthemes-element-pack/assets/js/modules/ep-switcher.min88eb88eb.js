! function(t, i) {
    "use strict";
    var e = function(t, i) {
        var e = (f = t.find(".bdt-switchers")).data("settings"),
            n = f.data("activator"),
            d = f.data("bdt-link-widget"),
            c = Boolean(elementorFrontend.isEditMode());
        if (void 0 !== n && (bdtUIkit.util.on(n.switchA, "click", (function() {
                bdtUIkit.switcher("#bdt-switcher-activator-" + n.id).show(0), bdtUIkit.switcher("#bdt-switcher-" + n.id).show(0)
            })), bdtUIkit.util.on(n.switchB, "click", (function() {
                bdtUIkit.switcher("#bdt-switcher-activator-" + n.id).show(1), bdtUIkit.switcher("#bdt-switcher-" + n.id).show(1)
            }))), void 0 !== e && !1 === c) {
            var s = f.find(".bdt-switcher > div > div > .bdt-switcher-item-a"),
                o = f.find(".bdt-switcher > div > div > .bdt-switcher-item-b"),
                r = i(".elementor").find(".elementor-section#" + e["switch-a-content"]),
                a = i(".elementor").find(".elementor-section#" + e["switch-b-content"]);
            if (!0 !== e.positionUnchanged && (s.length && r.length && i(r).appendTo(s), o.length && a.length && i(a).appendTo(o)), 1 == e.positionUnchanged) {
                i("#bdt-tabs-" + e.id).find(".bdt-switcher").remove();
                var w = i("#" + e["switch-a-content"]),
                    h = i("#" + e["switch-b-content"]);
                i("#" + e["switch-a-content"]).parent().append(`<div id="bdt-switcher-${e.id}" class="bdt-switcher bdt-switcher-item-content" style="width:100%;"></div>`), i(w).appendTo(i("#bdt-switcher-" + e.id)), i(h).appendTo(i("#bdt-switcher-" + e.id));
                var l, b = "";
                "a" == e.defaultActive ? l = "bdt-active" : b = "bdt-active", i("#" + e["switch-a-content"]).wrapAll('<div class="bdt-switcher-item-content-inner ' + l + '"></div>'), i("#" + e["switch-b-content"]).wrapAll('<div class="bdt-switcher-item-content-inner ' + b + '"></div>')
            }
        }
        if (void 0 !== d && !1 === c) {
            var p = i(d.linkWidgetTargetA),
                v = i(d.linkWidgetTargetB),
                f = "#bdt-switcher-" + d.id;
            p.css({
                opacity: 1,
                display: "block",
                "grid-row-start": 1,
                "grid-column-start": 1
            }), p.parent().css({
                display: "grid"
            }), v.css({
                opacity: 0,
                display: "none",
                "grid-row-start": 1,
                "grid-column-start": 1
            }), bdtUIkit.util.on(f, "shown", (function(t) {
                0 == bdtUIkit.util.index(t.target) ? (p.css({
                    opacity: 1,
                    display: "block"
                }), v.css({
                    opacity: 0,
                    display: "none"
                })) : (v.css({
                    opacity: 1,
                    display: "block"
                }), p.css({
                    opacity: 0,
                    display: "none"
                }))
            }))
        }
    };
    jQuery(window).on("elementor/frontend/init", (function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/bdt-switcher.default", e)
    }))
}(jQuery, window.elementorFrontend);