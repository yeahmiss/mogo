document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

        // If the user has scrolled beyond a certain point, apply the fixed styles
        if (scrollPosition > 0) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = '#f38181';
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.right = '0';
            header.style.transform = 'translate3d(0, 0, 0)';
        } else {
            // Reset the styles when scrolled back to the top
            header.style.padding = '';
            header.style.backgroundColor = '';
            header.style.position = '';
            header.style.top = '';
            header.style.left = '';
            header.style.right = '';
            header.style.transform = '';
        }
    });
});

$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /* Fixed Header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
           
        } else {
            header.removeClass("fixed");
        }
    }



    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop:  blockOffset
        }, 500);
    });



    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });



    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
