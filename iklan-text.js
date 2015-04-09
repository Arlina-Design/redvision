(function (a) {
    a.fn.hoverTimeout = function (c, e, b, d) {
        return this.each(function () {
            var f = null,
                g = a(this);
            g.hover(function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    e.call(g)
                }, c)
            }, function () {
                clearTimeout(f);
                f = setTimeout(function () {
                    d.call(g)
                }, b)
            })
        })
    }
})(jQuery);

//JQuery Google Adsense
(function (b) {
    b.fn.iklanaccordion = function (a) {
        a = jQuery.extend({
            active: 1,
            hovertimeout: 300,
            sUpSpeed: 500,
            sDownSpeed: 500,
            sUpEasing: null,
            sDownEasing: null
        }, a);
        return this.each(function () {
            var g = b(this),
                h = g.children("div[data-header]"),
                f = a.active - 1;
            h.each(function () {
                b(this).hide().before('<h2 class="iklan-header">' + b(this).data("header") + "</h2>")
            });
            g.children("div:eq(" + f + ")").show().prev().css("margin-top", "-47px").addClass("active");
            g.find(".iklan-header").hoverTimeout(a.hovertimeout, function () {
                g.children("h2").removeClass("active").animate({
                    marginTop: 0
                });
                h.slideUp(a.sUpSpeed, a.sUpEasing).animate({
                    marginTop: -47
                });
                b(this).addClass("active").next().slideDown(a.sDownSpeed, a.sDownEasing)
            })
        })
    }
})(jQuery);
$(function () {
    $(".arlina-iklan-sidebar").iklanaccordion();
    $(".arlina-iklan-post-footer").iklanaccordion()
});
