
$(function () {
    $('.header__slider').slick({
        infinite:true,
        fade: true,
        prevArrow:'<img class="slider-arrows slider-arrows_left" src="../img/arrows-left.svg" alt=""></img>',
        nextArrow:'<img class="slider-arrows slider-arrows_right" src="../img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dots',
    });
    $('.slider-dots').slick({
        slidesToShow:4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });
    $('.surf-slider').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        prevArrow:'<img class="slider-arrows slider-arrows_left" src="../img/arrows-left.svg" alt=""></img>',
        nextArrow:'<img class="slider-arrows slider-arrows_right" src="../img/arrows-right.svg" alt=""></img>',
    });
});
