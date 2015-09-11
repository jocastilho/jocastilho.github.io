$(document).ready(function(){
  // should only have one carousel per page or none at all
  if ($('.owl-carousel').length === 1) {
    $('.owl-carousel').owlCarousel({
      items: 1
    });
  }
});
