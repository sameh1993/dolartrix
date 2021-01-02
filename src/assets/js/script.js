(function ($) {
    'use strict';

    var $window = $(window);

     // :: Sticky Active Code
    $window.on("scroll", function(){
        if
      ($(document).scrollTop() > 86){
          $("#banner").addClass("shrink");
        }
        else
        {
            $("#banner").removeClass("shrink");
        }
    });
    
    // :: Preloader Active Code
    $window.on('load', function () {
        $('#preloader').fadeOut('1000', function () {
            $(this).remove();
        });
    });

    // :: Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
        }
    });


    // :: Carousel Active Code
    if ($.fn.owlCarousel) {

        $(".client_slides").owlCarousel({
            responsive: {
            0: {
                items: 1
            },
            991: {
                    items: 2
                },
            767:{
                    items: 1
                }
            },
            loop: true,
            autoplay: true,
            smartSpeed: 700,
            dots: true
        });

        var dot = $('.client_slides .owl-dot');
        dot.each(function () {
            var index = $(this).index() + 1;
            if (index < 10) {
                $(this).html('0').append(index);
            } else {
                $(this).html(index);
            }
        });
    }

    // :: Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('#videobtn').magnificPopup({
            type: 'iframe'
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            removalDelay: 300,
            mainClass: 'mfp-fade',
            preloader: true
        });
    }

    // :: ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: 'Scroll Top'
        });
    }
    // :: Wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // :: Accordian Active Code
    (function () {
        var dd = $('dd');
        dd.filter(':nth-child(n+3)').hide();
        $('dl').on('click', 'dt', function () {
            $(this).next().slideDown(500).siblings('dd').slideUp(500);
        })
    })();

    // :: niceScroll Active Code
    if ($.fn.niceScroll) {
        $(".timelineBody").niceScroll();
    }

})(jQuery);