$(function(){

  

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  // var mixer = mixitup('.product__items');

  var containerEl = document.querySelector('.products__items');
  var mixer;

  if (containerEl) {
    mixer = mixitup(containerEl, {
      selectors: {
        control: '[data-filter]'
      }
    });
  }

});