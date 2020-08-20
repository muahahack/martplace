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

  $(".single-product__rating").rateYo({
    starWidth: "15px",
    rating: 4.5,
    spacing: "6px",
    ratedFill: "#FFC000",
  });

  $(".more-items__card-rating").rateYo({
    starWidth: "13px",
    rating: 4.5,
    spacing: "3px",
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

  $(".header__drop-btn").on("click", function() {
    $(this).next(".drop-menu__list").slideToggle();
  });

  $(".header__drop-btn--pages").on("click", function(){
    $(".drop-menu__list--pages").slideToggle();
  });

// кнопки меню header submenu

  $(".header__submenu-btn--martplace").on("click", function(){
    $(".drop-menu__submenu-list--martplace").slideToggle(),
    $(".drop-menu__submenu-list--martplace").toggleClass("js-visible"),
    $(".drop-menu__submenu-list--dashboard.js-visible").slideToggle(),
    $(".drop-menu__submenu-list--dashboard.js-visible").removeClass("js-visible"),
    $(".drop-menu__submenu-list--others.js-visible").slideToggle(),
    $(".drop-menu__submenu-list--others.js-visible").removeClass("js-visible");
  });

  $(".header__submenu-btn--dashboard").on("click", function(){
    $(".drop-menu__submenu-list--dashboard").slideToggle(),
    $(".drop-menu__submenu-list--dashboard").toggleClass("js-visible"),
    $(".drop-menu__submenu-list--martplace.js-visible").slideToggle(),
    $(".drop-menu__submenu-list--martplace.js-visible").removeClass("js-visible"),
    $(".drop-menu__submenu-list--others.js-visible").slideToggle(),
    $(".drop-menu__submenu-list--others.js-visible").removeClass("js-visible");
  });

  $(".header__submenu-btn--others").on("click", function(){
    $(".drop-menu__submenu-list--others").slideToggle(),
    $(".drop-menu__submenu-list--others").toggleClass("js-visible"),
    $(".drop-menu__submenu-list--dashboard.js-visible").slideToggle(),
    $(".drop-menu__submenu-list--dashboard.js-visible").removeClass("js-visible"),
    $(".drop-menu__submenu-list--martplace.js-visible").slideToggle(),
    $(".drop-menu__submenu-list--martplace.js-visible").removeClass("js-visible");
  });

// кнопки header status 480

  $(".header__profile-btn").on("click", function(){
    $(".drop-menu__list--profile").slideToggle();
  });



  $(".header__middle-status--notify").on("click", function(){
    if($(".drop-menu__list--notify.js-overlay-visible").length) {
      $(".overlay").removeClass("js-overlay");
    } else {
      $(".overlay").addClass("js-overlay");
      }


    $(".drop-menu__list--notify").slideToggle(),
    $(".drop-menu__list--notify").toggleClass("js-overlay-visible"),
    $(".drop-menu__list--message.js-overlay-visible").slideToggle(),
    $(".drop-menu__list--message.js-overlay-visible").removeClass("js-overlay-visible"),
    $(".drop-menu__list--cart.js-overlay-visible").slideToggle(),
    $(".drop-menu__list--cart.js-overlay-visible").removeClass("js-overlay-visible");
  });



  $(".header__middle-status--message").on("click", function(){
    if($(".drop-menu__list--message.js-overlay-visible").length) {
      $(".overlay").removeClass("js-overlay");
    } else {
      $(".overlay").addClass("js-overlay");
      }


    $(".drop-menu__list--message").slideToggle(),
    $(".drop-menu__list--message").toggleClass("js-overlay-visible"),
    $(".drop-menu__list--notify.js-overlay-visible").slideToggle(),
    $(".drop-menu__list--notify.js-overlay-visible").removeClass("js-overlay-visible"),
    $(".drop-menu__list--cart.js-overlay-visible").slideToggle(),
    $(".drop-menu__list--cart.js-overlay-visible").removeClass("js-overlay-visible");
  });



  $(".header__middle-status--cart").on("click", function(){
    if($(".drop-menu__list--cart.js-overlay-visible").length) {
      $(".overlay").removeClass("js-overlay");
    } else {
      $(".overlay").addClass("js-overlay");
      }


    $(".drop-menu__list--cart").slideToggle(),
    $(".drop-menu__list--cart").toggleClass("js-overlay-visible"),
    $(".drop-menu__list--message.js-overlay-visible").slideToggle(),
    $(".drop-menu__list--message.js-overlay-visible").removeClass("js-overlay-visible"),
    $(".drop-menu__list--notify.js-overlay-visible").slideToggle(),
    $(".drop-menu__list--notify.js-overlay-visible").removeClass("js-overlay-visible");
  });

  // кнопки single product

  $(".single-sidebar__sidebar-title--rating").on("click", function(){
    $(".single-sidebar__wrapper-info--rating").slideToggle();
  });

  $(".single-sidebar__sidebar-title--info").on("click", function(){
    $(".single-sidebar__wrapper-info--info").slideToggle();
  });

  $(".single-sidebar__sidebar-title--author").on("click", function(){
    $(".single-sidebar__wrapper-info--author").slideToggle();
  });

   // кнопки blog

  $(".blog-sidebar__title").on("click", function() {
    $(this).next(".blog-sidebar__content").slideToggle();
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

// single tabs

  $('.single-product__info-box .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.single-product__info-box').find('.tab-item').removeClass('active-tab').hide();
    $('.single-product__info-box .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });

  //blog tabs

  $('.blog-sidebar__sidebar-box--posts .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
    $('.blog-sidebar__sidebar-box--posts').find('.tab-item').removeClass('active-tab').hide();
    $('.blog-sidebar__sidebar-box--posts .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });
  
  
  if($('.newest-products__items-wrapper').length) {
    var mixer = mixitup('.newest-products__items-wrapper');
  }

});
