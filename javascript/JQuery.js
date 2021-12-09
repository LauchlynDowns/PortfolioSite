
//code for home-page animation
$("document").ready(function () {
    $(".navbar-text, .introtext, .social-links, #codeshape").hide();
    $(".introtext, .social-links,  .codeshape").slideDown(2000);
    $(".navbar-text, .introtext").fadeIn(3000);
    $(".blink").blink(200)
})




//code from https://github.com/johnboker/jquery.blink
(function ($) {
    $.fn.blink = function (options) {
        var defaults = { delay: 500 };
        var options = $.extend(defaults, options);
        return $(this).each(function (idx, itm) {
            var handle = setInterval(function () {
                if ($(itm).css("visibility") === "visible") {
                    $(itm).css('visibility', 'hidden');
                } else {
                    $(itm).css('visibility', 'visible');
                }
            }, options.delay);

            $(itm).data('handle', handle);
        });
    }
    $.fn.unblink = function () {
        return $(this).each(function (idx, itm) {
            var handle = $(itm).data('handle');
            if (handle) {
                clearInterval(handle);
                $(itm).data('handle', null);
                $(itm).css('visibility', 'inherit');
            }
        });
    }
}(jQuery))






