document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;

       
        if (scrollPosition > 0) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = '#f38181';
            header.style.position = 'fixed';
            header.style.top = '0';
            header.style.left = '0';
            header.style.right = '0';
            header.style.transform = 'translate3d(0, 0, 0)';
        } else {
            
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


document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider__item');
    let currentIndex = 0;

 
    function changeSlide() {
    
        sliderItems.forEach(item => item.classList.remove('active'));

     
        sliderItems[currentIndex].classList.add('active');
    }

    // Function to handle item click event
    sliderItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index; 
            changeSlide();
        });
    });

 
    setInterval(function() {
        currentIndex = (currentIndex + 1) % sliderItems.length; // 
        changeSlide();
    }, 10000); 

    // Initial setup
    changeSlide();


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
