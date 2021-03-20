$(function () {



  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });


  var mixer = mixitup('.products__items');
  var mixer = mixitup('.new__items');

  // var containerEl = document.querySelector('.products__items');
  // var mixer;

  // if (containerEl) {
  //   mixer = mixitup(containerEl, {
  //     selectors: {
  //       control: '[data-filter]'
  //     }
  //   });
  // }

  // var containerEl1 = document.querySelector('.products__items');
  // var containerEl2 = document.querySelector('.new__items');
  // var mixer;
  // var mixer1;

  // if (containerEl1) {
  //   mixer = mixitup(containerEl1, {
  //     selectors: {
  //       control: '[data-filter]'
  //     }
  //   });
  // };

  // if (containerEl2) {
  //   mixer1 = mixitup(containerEl2, {
  //     selectors: {
  //       control: '[data-filter]'
  //     }
  //   });
  // };

});