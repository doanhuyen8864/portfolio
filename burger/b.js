// SLIDER

// Click on chevron then move the slide
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

// Click on circle then it trans to white
$('ol li').click(function (e) { 
    e.preventDefault();
    $('ol li').removeClass('active_s2');
    $(this).addClass('active_s2');
});
// Click on circle then move to the slide of it
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