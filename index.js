$(function () {
    // click cuộn chuột tới khối
    $('.n1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.section2').offset().top-150
        }, 1000);
    });
    $('.n2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.section3').offset().top-150
        }, 1000);
    });
    $('.n3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.section4').offset().top-150
        }, 1000);
    });
    // click thì menu active
    $('li').click(function (e) { 
        e.preventDefault();
            $('li').removeClass('active');
            $(this).addClass('active');
    });
    // cuộn chuột tới khối nào thì khối đó sáng
    $(window).scroll(function () { 
        if ( window.pageYOffset>=$('.section4').offset().top-150) {
            $('.menu1').removeClass('active');
            $('.n3').addClass('active');

        } else if (window.pageYOffset>=$('.section3').offset().top-150) {
            $('.menu1').removeClass('active');
            $('.n2').addClass('active');
            
        } else if (window.pageYOffset>=$('.section2').offset().top-150) {
            $('.menu1').removeClass('active');
            $('.n1').addClass('active');
            
        } else {
            $('.menu1').removeClass('active');
        }
    });
    // thu nhỏ header
    $(window).scroll(function () { 
        if (window.pageYOffset >= 200) {
            $('header').addClass('thunho');
        } else {
            $('header').removeClass('thunho');
        }
    });
});