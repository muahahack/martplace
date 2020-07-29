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
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.feed-products__arrow-prev',
    prevEl: '.feed-products__arrow-next',
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  },
  breakpoints: {
    841: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    }
  },
});

var mySwiperFeedback = new Swiper('.feedback__slider', {
  wrapperClass: 'feedback__items',
  slideClass: 'feedback__item',
  slidesPerView: 1,
  loop: true,
  spaceBetween: 28,
  navigation: {
    nextEl: '.feedback__arrow-next',
    prevEl: '.feedback__arrow-prev',
  },
  breakpoints: {
    940: {
      slidesPerView: 2,
    }
  },
});

$(function(){

  $(".weekly-products__specs-rating").rateYo({
    starWidth: "14px",
    rating: 4.5,
    spacing: "4px",
    ratedFill: "#FFC000"
  });

  $(".newest-products__specs-rating").rateYo({
    starWidth: "13px",
    rating: 4.5,
    spacing: "4px",
    ratedFill: "#FFC000",

  });

  $(".feed-products__specs-rating").rateYo({
    starWidth: "13px",
    rating: 4.5,
    spacing: "4px",
    ratedFill: "#FFC000",

  });

  $(".header__menu-btn").on("click", function(){
$(".header__menu-list").slideToggle();
  });

  $(".header__user-btn").on("click", function(){
$(".header__info").toggleClass('active');
  });

  var mixer = mixitup('.newest-products__items-wrapper');

});
