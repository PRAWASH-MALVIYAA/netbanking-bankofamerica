var debounce = function(e, t, o) {
    var n;
    return function() {
        var u = this,
            a = arguments,
            c = o && !n;
        clearTimeout(n), n = setTimeout((function() {
            n = null, o || e.apply(u, a)
        }), t), c && e.apply(u, a)
    }
};

function copyToClipboard(e) {
    var t = jQuery("<div>");
    jQuery("body").append(t), t.attr("contenteditable", !0).html(jQuery(e).data("url")).select().on("focus", (function() {
        document.execCommand("selectAll", !1, null)
    })).focus(), document.execCommand("copy"), t.remove(), jQuery(e).find(".bdt-social-share-title").html(jQuery(e).data("copied")), setTimeout(() => {
        jQuery(e).find(".bdt-social-share-title").html(jQuery(e).data("orginal"))
    }, 5e3)
}
jQuery(".bdt-ss-link").on("click", (function() {
    copyToClipboard(this)
}));