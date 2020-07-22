var mySwiperWeekly = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var mySwiperFeed = new Swiper('.feed-slider__container', {
  wrapperClass: 'feed-slider__wrapper',
  slideClass: 'feed-slider__slide',
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.feed-products__arrow-prev',
    prevEl: '.feed-products__arrow-next',
  }
});

var mySwiperFeedback = new Swiper('.feedback__slider', {
  wrapperClass: 'feedback__items',
  slideClass: 'feedback__item',
  slidesPerView: 2,
  loop: true,
  spaceBetween: 28,
  navigation: {
    nextEl: '.feedback__arrow-next',
    prevEl: '.feedback__arrow-prev',
  }
});

$(function(){

  $(".weekly-products__specs-rating").rateYo({
    starWidth: "14px",
    rating: 4.5,
    spacing: "4px",
    ratedFill: "#FFC000",
    normalFill: "#FFCD37"

  });

  $(".newest-products__specs-rating").rateYo({
    starWidth: "13px",
    rating: 4.5,
    spacing: "4px",
    ratedFill: "#FFC000",
    normalFill: "#FFCD37"

  });

  $(".feed-products__specs-rating").rateYo({
    starWidth: "13px",
    rating: 4.5,
    spacing: "4px",
    ratedFill: "#FFC000",
    normalFill: "#FFCD37"

  });

  var mixer = mixitup('.newest-products__items-wrapper');

});
