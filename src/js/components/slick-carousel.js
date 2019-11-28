
$(function () {
    $('.header__slider').slick({
        infinite:true,
        fade: true,
        prevArrow:'<img class="slider-arrows slider-arrows_left" src="../img/arrows-left.svg" alt=""></img>',
        nextArrow:'<img class="slider-arrows slider-arrows_right" src="../img/arrows-right.svg" alt=""></img>',
        asNavFor: '.slider-dotsheader',
    });
    $('.slider-dotsheader').slick({
        slidesToShow:4,
        slidesToScroll: 4,
        asNavFor: '.header__slider',
    });
    $('.surf-slider').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        slidesToShow:4,
        slidesToScroll: 1,
        prevArrow:'<img class="slider-arrows slider-arrows_left" src="../img/arrows-left.svg" alt=""></img>',
        nextArrow:'<img class="slider-arrows slider-arrows_right" src="../img/arrows-right.svg" alt=""></img>',
        pauseOnHover: true,

        // responsive: [
        // {
        //     breakpoint: 1024,
        //     settings: {
        //         slidesToShow: 4,
        //         slidesToScroll: 1,
        //     }
        // },
        // {
        //     breakpoint: 600,
        //     settings: {
        //         slidesToShow: 3,
        //         slidesToScroll: 3
        //     }
        // },
        // {
        //     breakpoint: 480,
        //     settings: {
        //         slidesToShow: 2,
        //         slidesToScroll: 2
        //     }
        // }

        // ]
    });
});
