$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','linear-gradient(45deg,   rgba(86,208,240,1)  10%,  rgba(93,123,240,1)65%, rgba(183,76,219,1)  100%)');

    } else {
        $('.navbar').css('background','transparent');

    }
});