//  first sldier
$('.slider-one')
// if property is not there then create new object
.not(".slick-intialized")
.slick({
    autoplay: true,
    autoplaySpeed: 3000,
    dots:true,
    // getting rid off the prev and next btn
    prevArrow: ".site-slider .slider-btn .prev ",
    nextArrow: ".site-slider .slider-btn .next "

});

// second slider
$('.slider-two')
    // if property is not there then create new object
    .not(".slick-intialized")
    .slick({
        // getting rid off the prev and next btn
        prevArrow: ".site-slider-two .prev ",
        nextArrow: ".site-slider-two .next ",
        slidsToShow: 5,
        slidesToScroll: 1,
        autoplaySpeed: 3000
    });