$(document).ready(function(){

  /*$('.wrapper-lista-carusel-li > .slick-list >.slick-track').each(function( index ) {
  console.log($( this ).html()  );
     
        if( $( this ).html() === "$(a[data-slick-index='0'])" ){
          alert('hola');
        }
  
*/




var controller = new ScrollMagic.Controller();

  /*var tween = new TimelineMax()
                            .to(".wrapper-lista-carusel-li  .slick-track > a[data-slick-index='0']", 1, {className: "+=textRelleno"})
                            .to(".Titulo01", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to("#text01", 1, {autoAlpha:1 })
                            .to(".Titulo01", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to(".Titulo01", 1, {autoAlpha:1});*/
                          
  /*  var tween2 = new TimelineMax()
                            .to(".wrapper-lista-carusel-li  .slick-track > a[data-slick-index='1']", 1, {className: "+=textRelleno"})
                            .to(".Titulo02", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to("#text02", 1, {autoAlpha:1 })
                            .to(".Titulo02", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to(".Titulo02", 1, {autoAlpha:1});  */

  /*var tween3 = new TimelineMax()
                            .to(".wrapper-lista-carusel-li  .slick-track > a[data-slick-index='2']", 1, {className: "+=textRelleno"})  
                            .to(".Titulo03", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to("#text03", 1, {autoAlpha:1 })
                            .to(".Titulo03", 1, {autoAlpha:0}, {className: "+=fish"})
                            .to(".Titulo03", 1, {autoAlpha:1}) ;   */



  var organico1 = new TimelineMax()
                            .to(".st0B", 1, {className: "+=textRelleno"} ) 
                            .to(".st0B", 1, { fill: "#e7c57f",   defaultEase:Elastic.easeOut});

  var organico2 = new TimelineMax()
                            .to(".st3B", 1, {className: "+=textRelleno"}) 
                            .to(".st3B", 1, { fill: "#cb534e",defaultEase:Elastic.easeOut})
                            .to(".st3B", 1, { x:100, y:200});



   var particula1 = new TimelineMax()
                            .to("#circulo-particula", 1, {className: "+=textRelleno"}) 
                            .to("#circulo-particula", 1, { fill: "#C83C41",defaultEase:Elastic.easeOut})
                            .to("#circulo-particula", 1, { x:-20, y:-100})
                            .to("#circulo-particula", 1, { fill: "#262448",defaultEase:Elastic.easeOut});
                            

   var scene = new ScrollMagic.Scene({
    triggerElement: "#selecion", 
    duration: 250, 
  }).setTween(organico1)
    /*.addIndicators()*/
    .addTo(controller);  

   var scene = new ScrollMagic.Scene({
    triggerElement: "#selecion", 
    duration: 1050, 
  }).setTween(organico2)
   /* .addIndicators()*/
    .addTo(controller);  

 var scene = new ScrollMagic.Scene({
    triggerElement: "#selecion", 
    duration: 1050, 
  }).setTween(particula1)
  /*  .addIndicators()*/
    .addTo(controller);  
/*
  var scene = new ScrollMagic.Scene({
    triggerElement: "#prueba01", 
    duration: 50, 
  }).setTween(tween)
    .addTo(controller);


   var scene = new ScrollMagic.Scene({
    triggerElement: "#prueba02", 
    duration: 50, 
  }).setTween(tween2)
    .addTo(controller);


    var scene = new ScrollMagic.Scene({
    triggerElement: "#prueba03", 
    duration: 200, 
  }).setTween(tween3)
    .addTo(controller);
*/
});