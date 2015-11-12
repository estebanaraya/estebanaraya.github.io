$(document).ready(function() {
  $('.heroContent').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    cssEase: 'linear',
    edgeFriction: 0.5
  });
});
