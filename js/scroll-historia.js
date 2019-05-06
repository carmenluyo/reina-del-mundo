$(document).ready(function(){

  /*$('.wrapper-lista-carusel-li > .slick-list >.slick-track').each(function( index ) {
  console.log($( this ).html()  );
     
        if( $( this ).html() === "$(a[data-slick-index='0'])" ){
          alert('hola');
        }
  
*/





  var controller = new ScrollMagic.Controller();

  var tween = new TimelineMax()
                            .to(".wrapper-lista-carusel-li  .slick-track > a[data-slick-index='0']", 1, {className: "+=textRelleno"})
                            .to(".Titulo01", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to("#text01", 1, {autoAlpha:1 })
                            .to(".Titulo01", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to(".Titulo01", 1, {autoAlpha:1});
                          
                           

  var scene = new ScrollMagic.Scene({
    triggerElement: "#prueba01", 
    duration: 50, 
  }).setTween(tween)
    .addTo(controller);


  

});