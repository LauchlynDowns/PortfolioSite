
//vanilla JS used to make buttons scroll on gallery.
const leftbutton = document.getElementById('left');
const rightbutton = document.getElementById('right');
//find document width and times it by 0.2 to get the width of 20vw
const ScrollWidth = document.body.clientWidth * 0.2;
rightbutton.addEventListener("click", function () { document.getElementById('project-selector').scrollLeft += ScrollWidth; })
leftbutton.addEventListener("click", function () { document.getElementById('project-selector').scrollLeft += -ScrollWidth })





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



