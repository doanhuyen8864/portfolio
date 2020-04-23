// ACCOUNT
$(function () {
    $('.profile i').click(function (e) { 
        e.preventDefault();
        $('.account').toggleClass('v');
    });
});

// like dislike
$(function () {
    $('.like2').click(function (e) { 
        e.preventDefault();
        $('.like1').toggleClass('opacity');
        $('.like2').toggleClass('opacity');
    });
    $('.dislike2').click(function (e) { 
        e.preventDefault();
        $('.dislike1').toggleClass('opacity1');
        $('.dislike2').toggleClass('opacity1');
    });
});