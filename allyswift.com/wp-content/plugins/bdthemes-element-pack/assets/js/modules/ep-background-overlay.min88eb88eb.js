! function(e, n) {
    e(window).on("elementor/frontend/init", (function() {
        elementorFrontend.hooks.addAction("frontend/element_ready/widget", (function(e) {
            e.hasClass("elementor-element-edit-mode") && e.addClass("bdt-background-overlay-yes")
        }))
    }))
}(jQuery, window.elementorFrontend);