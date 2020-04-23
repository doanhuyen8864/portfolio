$(function () {
// SLIDE header
    $('.icon2').click(function (e) { 
        e.preventDefault();
        
        var slide_active_1 = $('.active_s1');
        if ($(slide_active_1).next().length) {
            $(slide_active_1).removeClass('active_s1');
            $(slide_active_1).next().addClass('active_s1');
        } else {
            $(slide_active_1).removeClass('active_s1');
            $('.slide1').addClass('active_s1');
        }

        var slide_active_2 = $('.active_s2');
        if ($(slide_active_2).next().length) {
            $(slide_active_2).removeClass('active_s2');
            $(slide_active_2).next().addClass('active_s2');
        } else {
            $(slide_active_2).removeClass('active_s2');
            $('.nut-1').addClass('active_s2');
        }
    });

    $('.icon1').click(function (e) { 
        e.preventDefault();

        var slide_active_1 = $('.active_s1');
        if ($(slide_active_1).prev().length) {
            $(slide_active_1).removeClass('active_s1');
            $(slide_active_1).prev().addClass('active_s1');
        } else {
            $(slide_active_1).removeClass('active_s1');
            $('.slide3').addClass('active_s1');
        }

        var slide_active_2 = $('.active_s2');
        if ($(slide_active_2).prev().length) {
            $(slide_active_2).removeClass('active_s2');
            $(slide_active_2).prev().addClass('active_s2');
        } else {
            $(slide_active_2).removeClass('active_s2');
            $('.nut-3').addClass('active_s2');
        }
    });

    var time = setInterval(() => {
        var slide_active_1 = $('.active_s1');
        if ($(slide_active_1).next().length) {
            $(slide_active_1).removeClass('active_s1');
            $(slide_active_1).next().addClass('active_s1');
        } else {
            $(slide_active_1).removeClass('active_s1');
            $('.slide1').addClass('active_s1');
        }

        var slide_active_2 = $('.active_s2');
        if ($(slide_active_2).next().length) {
            $(slide_active_2).removeClass('active_s2');
            $(slide_active_2).next().addClass('active_s2');
        } else {
            $(slide_active_2).removeClass('active_s2');
            $('.nut-1').addClass('active_s2');
        }
    }, 5000);

// click vào nút tròn => nút đó sáng
    $('ol li').click(function (e) { 
        e.preventDefault();
        $('ol li').removeClass('active_s2');
        $(this).addClass('active_s2');
    });
// Click vào nút tròn nào thì chuyển đến slide của nút đó
    $('li.nut-1').click(function (e) { 
        e.preventDefault();
        $('.slider ul li').removeClass('active_s1');
        $('.slide1').addClass('active_s1');
    });

    $('li.nut-2').click(function (e) {
        e.preventDefault();
        $('.slider ul li').removeClass('active_s1');
        $('.slide2').addClass('active_s1');
    });

    $('li.nut-3').click(function (e) { 
        e.preventDefault();
        $('.slider ul li').removeClass('active_s1');
        $('.slide3').addClass('active_s1');
    });


}); 

// SLIDE shortcodes
$(function () {

    $('.shortcodes .icon-2').click(function (e) { 
        e.preventDefault();
        
        var slide_active1 = $('.active1');
        if ($(slide_active1).next().length) {
            $(slide_active1).removeClass('active1');
            $(slide_active1).next().addClass('active1');
        } else {
            $(slide_active1).removeClass('active1');
            $('.sl1').addClass('active1');
        }

    });

    $('.shortcodes .icon-1').click(function (e) { 
        e.preventDefault();

        var slide_active1 = $('.active1');
        if ($(slide_active1).prev().length) {
            $(slide_active1).removeClass('active1');
            $(slide_active1).prev().addClass('active1');
        } else {
            $(slide_active1).removeClass('active1');
            $('.sl3').addClass('active1');
        }

    });

}); 

// SLIDE testimonial
$(function () {
    $('.testimonial .icon2').click(function (e) { 
        e.preventDefault();

        var slide_active = $('.active');
        if ($(slide_active).next().length) {
            $(slide_active).removeClass('active');
            $(slide_active).next().addClass('active');
        } else {
            $(slide_active).removeClass('active');
            $('.so1').addClass('active');
        }
    });

    $('.testimonial .icon1').click(function (e) { 
        e.preventDefault();

        var slide_active = $('.active');
        if ($(slide_active).prev().length) {
            $(slide_active).removeClass('active');
            $(slide_active).prev().addClass('active');
        } else {
            $(slide_active).removeClass('active');
            $('.so2').addClass('active');
        }
    });

});

$(function () {
    // header thu nhỏ
    $(window).scroll(function () { 
        if (window.pageYOffset>=50) {
            $('.navigation').addClass('thunho');
        } else {
            $('.navigation').removeClass('thunho');
        }
    });
    // back to top
    $(window).scroll(function () { 
        if (window.pageYOffset>=200) {
            $('.back-to-top').addClass('opacity1');
        } else {
            $('.back-to-top').removeClass('opacity1');
        }
    });
    $('.back-to-top').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        },500);
    });
    $('.back-to-top-2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:0
        },500);
    });
    // menu ẩn
    $('.toggle-section').click(function (e) { 
        e.preventDefault();
        $('.style-selection').toggleClass('divao');
        $('.toggle-section').toggleClass('an');
    });
});

// count
$(document).ready(function() {

    $(window).scroll(function () { 
        if (window.pageYOffset>=$('.funt_fact').offset().top-600) {


            $('.counter').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                
                $({ countNum: $this.text()}).animate({
                  countNum: countTo
                },
              
                {
                  duration: 1000,
                  easing:'linear',
                  step: function() {
                    $this.text(Math.floor(this.countNum));
                  },
                  complete: function() {
                    $this.text(this.countNum);
                  }
              
                });  
            });


        }        
    });
    
});
