$(function () {

  $('.details-tab__item').on('click', function (e) {
    e.preventDefault();
    $('.details-tab__item').removeClass('details-tab__item--active');
    $(this).addClass('details-tab__item--active');

    $('.details-tab__content-item').removeClass('details-tab__content-item--active');
    $($(this).attr('href')).addClass('details-tab__content-item--active');

  })

  $('.details-one__num').styler();

  $('.details-related__items').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-left.png" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-right.png" alt="arrow-right"></button>',
  });

  $('.details-slide__thumb').slick({
    asNavFor: '.details-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.details-slide__big').slick({
    asNavFor: '.details-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true
  });

  $('.rate').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true
  });


  // var mixer = mixitup('.products__items');
  // var mixer = mixitup('.new__items');

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});