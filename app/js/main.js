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

  $(".category-products__rating").rateYo({
    starWidth: "14px",
    rating: 4.5,
    spacing: "4px",
    ratedFill: "#FFC000",
  });

  $(".category-products__rating-list").rateYo({
    starWidth: "14px",
    rating: 4.5,
    spacing: "6px",
    ratedFill: "#FFC000",
  });

  $(".single-product__raiting").rateYo({
    starWidth: "15px",
    rating: 4.5,
    spacing: "6px",
    ratedFill: "#FFC000",
  });

  $(".header__menu-btn").on("click", function(){
    $(".header__menu-list").slideToggle();
  });

  $(".header__user-btn").on("click", function(){
    $(".header__info").toggleClass('active');
    $(".header__middle").toggleClass('active');
  });  
  
  $(".category-products__filters-btn").on("click", function(){
    $(".category-products__aside").slideToggle();
  });

  // кнопки фильтров aside

  $(".category-products__categories-title").on("click", function(){
    $(".category-products__categories-list").slideToggle();
  });

  $(".category-products__filter-title").on("click", function(){
    $(".category-products__filter-list").slideToggle();
  });

  $(".category-products__range-title").on("click", function(){
    $(".category-products__range-form").slideToggle();
  });

// кнопки меню header menu

  $(".header__drop-btn--home").on("click", function(){
    $(".drop-menu__list--home").slideToggle();
  });

  $(".header__drop-btn--all-products").on("click", function(){
    $(".drop-menu__list--all-products").slideToggle();
  });

  $(".header__drop-btn--wordpress").on("click", function(){
    $(".drop-menu__list--wordpress").slideToggle();
  });

  $(".header__drop-btn--pages").on("click", function(){
    $(".drop-menu__list--pages").slideToggle();
  });

// кнопки меню header submenu

  $(".header__submenu-btn--martplace").on("click", function(){
    $(".drop-menu__submenu-list--martplace").slideToggle();
  });

  $(".header__submenu-btn--dashboard").on("click", function(){
    $(".drop-menu__submenu-list--dashboard").slideToggle();
  });

  $(".header__submenu-btn--others").on("click", function(){
    $(".drop-menu__submenu-list--others").slideToggle();
  });

// кнопки header status 480

  $(".header__profile-btn").on("click", function(){
    $(".drop-menu__list--profile").slideToggle();
  });

  $(".header__middle-status--notify").on("click", function(){
    $(".drop-menu__list--notify").slideToggle();
  });

  $(".header__middle-status--message").on("click", function(){
    $(".drop-menu__list--message").slideToggle();
  });

  $(".header__middle-status--cart").on("click", function(){
    $(".drop-menu__list--cart").slideToggle();
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 330,
    from: 30,
    to: 300,
    prefix: "$"
  });

  $('.filters__view-btn--list').on('click', function(){
    $('.category-products__item').addClass('category-products__item--list'),
    $('.filters__btn-path--list').addClass('filters__btn-path--active'),
    $('.filters__btn-path--grid').removeClass('filters__btn-path--active')
  });

  $('.filters__view-btn--grid').on('click', function(){
    $('.category-products__item').removeClass('category-products__item--list'),
    $('.filters__btn-path--grid').addClass('filters__btn-path--active'),
    $('.filters__btn-path--list').removeClass('filters__btn-path--active')
  });

  var mixer = mixitup('.newest-products__items-wrapper');

});
