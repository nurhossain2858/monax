$(document).ready(function(){
    // nav toggle start
    $(".nav-toggler").click(function(){
        $(".header .nav-menu .nav").slideToggle();
        $(".nav-toggler").toggleClass("open");
    });
    // home page owlCarousel start
    $('.reviews').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    // service page owlCarousel
    $('.pertnership').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});