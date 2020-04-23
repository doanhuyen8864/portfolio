$(function () {
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
            $('.slide6').addClass('active_s1');
        }
    
        var slide_active_2 = $('.active_s2');
        if ($(slide_active_2).prev().length) {
            $(slide_active_2).removeClass('active_s2');
            $(slide_active_2).prev().addClass('active_s2');
        } else {
            $(slide_active_2).removeClass('active_s2');
            $('.nut-6').addClass('active_s2');
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

    $('li.nut-4').click(function (e) { 
        e.preventDefault();
        $('.slider ul li').removeClass('active_s1');
        $('.slide4').addClass('active_s1');
    });
    
    $('li.nut-5').click(function (e) {
        e.preventDefault();
        $('.slider ul li').removeClass('active_s1');
        $('.slide5').addClass('active_s1');
    });
    
    $('li.nut-6').click(function (e) { 
        e.preventDefault();
        $('.slider ul li').removeClass('active_s1');
        $('.slide6').addClass('active_s1');
    });
});
// ACCOUNT
$(function () {
    $('.profile i').click(function (e) { 
        e.preventDefault();
        $('.account').toggleClass('v');
    });
    $('.slider').click(function (e) { 
        e.preventDefault();
        $('.account').removeClass('v');
    });
});

// SLIDE

$(function () {
    $('.icon-2').click(function (e) { 
        e.preventDefault();
        $('.slide-1').addClass('active');
        $('.icon-2').addClass('h');
        $('.icon-1').removeClass('h');
        
    });
    $('.icon-1').click(function (e) { 
        e.preventDefault();
        $('.slide-1').removeClass('active');
        $('.icon-1').addClass('h');
        $('.icon-2').removeClass('h');
    });
});

$(function () {
    $('.icon-21').click(function (e) { 
        e.preventDefault();
        $('.slide-2').addClass('active');
        $('.icon-21').addClass('h');
        $('.icon-11').removeClass('h');
        
    });
    $('.icon-11').click(function (e) { 
        e.preventDefault();
        $('.slide-2').removeClass('active');
        $('.icon-11').addClass('h');
        $('.icon-21').removeClass('h');
    });
});

$(function () {
    $('.icon-22').click(function (e) { 
        e.preventDefault();
        $('.slide-3').addClass('active');
        $('.icon-22').addClass('h');
        $('.icon-12').removeClass('h');
        
    });
    $('.icon-12').click(function (e) { 
        e.preventDefault();
        $('.slide-3').removeClass('active');
        $('.icon-12').addClass('h');
        $('.icon-22').removeClass('h');
    });
});

$(function () {
    $('.icon-23').click(function (e) { 
        e.preventDefault();
        $('.slide-4').addClass('active');
        $('.icon-23').addClass('h');
        $('.icon-13').removeClass('h');
        
    });
    $('.icon-13').click(function (e) { 
        e.preventDefault();
        $('.slide-4').removeClass('active');
        $('.icon-13').addClass('h');
        $('.icon-23').removeClass('h');
    });
});

$(function () {
    $('.icon-24').click(function (e) { 
        e.preventDefault();
        $('.slide-5').addClass('active');
        $('.icon-24').addClass('h');
        $('.icon-14').removeClass('h');
        
    });
    $('.icon-14').click(function (e) { 
        e.preventDefault();
        $('.slide-5').removeClass('active');
        $('.icon-14').addClass('h');
        $('.icon-24').removeClass('h');
    });
});

$(function () {
    $('.icon-25').click(function (e) { 
        e.preventDefault();
        $('.slide-6').addClass('active');
        $('.icon-25').addClass('h');
        $('.icon-15').removeClass('h');
        
    });
    $('.icon-15').click(function (e) { 
        e.preventDefault();
        $('.slide-6').removeClass('active');
        $('.icon-15').addClass('h');
        $('.icon-25').removeClass('h');
    });
});

$(function () {
    $('.icon-26').click(function (e) { 
        e.preventDefault();
        $('.slide-7').addClass('active');
        $('.icon-26').addClass('h');
        $('.icon-16').removeClass('h');
        
    });
    $('.icon-16').click(function (e) { 
        e.preventDefault();
        $('.slide-7').removeClass('active');
        $('.icon-16').addClass('h');
        $('.icon-26').removeClass('h');
    });
});

$(function () {
    $('.icon-27').click(function (e) { 
        e.preventDefault();
        $('.slide-8').addClass('active');
        $('.icon-27').addClass('h');
        $('.icon-17').removeClass('h');
        
    });
    $('.icon-17').click(function (e) { 
        e.preventDefault();
        $('.slide-8').removeClass('active');
        $('.icon-17').addClass('h');
        $('.icon-27').removeClass('h');
    });
});


// TRAILER
$(function () {
    $('li.ml').click(function (e) { 
        e.preventDefault();
        $('.trailer .video li').removeClass('active-trailer');
        $('.mulan').addClass('active-trailer');
    });
    
    $('li.ve').click(function (e) {
        e.preventDefault();
        $('.trailer .video li').removeClass('active-trailer');
        $('.venom').addClass('active-trailer');
    });
    
    $('li.sp').click(function (e) { 
        e.preventDefault();
        $('.trailer .video li').removeClass('active-trailer');
        $('.spider').addClass('active-trailer');
    });

    $('li.mu').click(function (e) { 
        e.preventDefault();
        $('.trailer .video li').removeClass('active-trailer');
        $('.mutants').addClass('active-trailer');
    });
    
    $('li.do').click(function (e) {
        e.preventDefault();
        $('.trailer .video li').removeClass('active-trailer');
        $('.dora').addClass('active-trailer');
    });
    
    $('li.ma').click(function (e) { 
        e.preventDefault();
        $('.trailer .video li').removeClass('active-trailer');
        $('.Maleficent').addClass('active-trailer');
    });
});


$(function () {
    $('.like').click(function (e) { 
        e.preventDefault();
        $('.like').toggleClass('traitim');
    });
});


