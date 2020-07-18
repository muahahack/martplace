var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

var mySwiper = new Swiper('.feed-container', {
  wrapperClass: 'feed-wrapper',
  slideClass: 'feed-slide',
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.feed-button-next',
    prevEl: '.feed-button-prev',
  }
});

var mySwiper = new Swiper('.feedback__slider', {
  wrapperClass: 'feedback__items',
  slideClass: 'feedback__item',
  slidesPerView: 2,
  loop: true,
  spaceBetween: 28,
  navigation: {
    nextEl: '.feedback-button-next',
    prevEl: '.feedback-button-prev',
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
