! function(e, n) {
    e(window).on("elementor/frontend/init", (function() {
        var n, t = elementorModules.frontend.handlers.Base;
        n = t.extend({
            bindEvents: function() {
                this.run()
            },
            getDefaultSettings: function() {
                return {
                    allowHTML: !0
                }
            },
            onElementChange: debounce((function(e) {
                -1 !== e.indexOf("element_pack_agbg_") && this.run()
            }), 400),
            settings: function(e) {
                return this.getElementSettings("element_pack_agbg_" + e)
            },
            run: function() {
                if ("yes" !== this.settings("show")) return;
                const n = this.$element.data("id"),
                    t = document.querySelector(".elementor-element-" + n),
                    i = e(t).find(".bdt-animated-gradient-background");
                e(i).length < 1 && e(t).prepend('<canvas id="canvas-basic-' + n + '" class="bdt-animated-gradient-background"></canvas>');
                const o = e(t).find(".bdt-animated-gradient-background").attr("id");
                let d = this.settings("color_list"),
                    r = [];
                d.forEach(e => {
                    r.push([e.start_color, e.end_color])
                });
                var a = void 0 !== this.settings("direction") ? this.settings("direction") : "diagonal",
                    s = void 0 !== this.settings("transitionSpeed") ? this.settings("transitionSpeed.size") : "5500";
                new Granim({
                    element: "#" + o,
                    direction: a,
                    isPausedWhenNotInView: !0,
                    states: {
                        "default-state": {
                            gradients: r,
                            transitionSpeed: s
                        }
                    }
                })
            }
        }), elementorFrontend.hooks.addAction("frontend/element_ready/section", (function(e) {
            elementorFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        })), elementorFrontend.hooks.addAction("frontend/element_ready/container", (function(e) {
            elementorFrontend.elementsHandler.addHandler(n, {
                $element: e
            })
        }))
    }))
}(jQuery, window.elementorFrontend);