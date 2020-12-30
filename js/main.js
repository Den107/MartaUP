$(function () {
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header-dots',
        autoplay: 5000
    });
    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });
    new WOW().init();
})