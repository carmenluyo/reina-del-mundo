$(document).ready(function(){
		      /*$('.siema').slick({
		        slidesToShow: 8,
  				slidesToScroll: 6,
		       	dots: false,
			    prevArrow: false,
			    nextArrow: false
		      });*/
$('.wrapper-lista-carusel-li').slick({
    slidesToShow: 8,
    slidesToScroll: 6,
    dots: false,
    prevArrow: false,
    nextArrow: false,
     pauseOnHover:true,
     autoplay: false,
    autoplaySpeed: 2000,
});
/*
$('.wrapper-lista-carusel-li').on('mouseover',function(){
  $('.your-slider-class').slickNext();
});

$('.slick-dots li').on('mouseover', function() {
    $(this).parents('.fade').slick('goTo', $(this).index());
});
*/
});