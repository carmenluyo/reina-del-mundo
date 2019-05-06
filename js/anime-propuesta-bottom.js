var controller = new ScrollMagic.Controller();
var cuboCaida = anime({
	targets: '#allCubo3D',
	translateY:200 ,
	easing: 'cubicBezier(.25,-0.16,.58,1.45)',
	duration:1000,
});


/************* CUBO TERCERO **********/

var Cubotercero = anime({
  targets: '.Cubotercero',
   easing: 'easeOutElastic(1, .8)',
  keyframes: [

    {translateY: -20},

    {translateX: 0},

    {translateY: 20},

    {translateX: 20},
  ],
  duration: 650,
});


new ScrollMagic.Scene({
    triggerElement: ".seccion-text-right",
    duration: "90%",
})
.setAnime(Cubotercero)
/*.addIndicators()*/
.addTo(controller);

/*************** CUBO Primero ********/
var Cuboprimero = anime({
  targets: '.Cuboprimero',
   easing: 'easeOutElastic(1, .8)',
  keyframes: [
  	{ translateY: 20},
    {translateX: 0},
    { translateY: -20},
     {translateX: -40},
   
  ],
  duration: 750,
  delay:400,
 
});


new ScrollMagic.Scene({
    triggerElement: ".seccion-text-right",
    duration: "90%",
})
.setAnime(Cuboprimero)
/*.addIndicators() */
.addTo(controller);

var circuloGradient = anime({
  targets: '#circuloGradient',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInQuad",
  duration: 4500,
 
  loop:false,

});


var primerRectangulo = anime({
	targets: '#primerRectangulo',
	height: 300,
	easing: 'easeInOutCubic',
	duration: 500,
});

var cuboAmarillo = anime({
	targets: '#amarillo',
	points: [ { value: '92.5,99.3 168.8,54.9 168.5,615.2 92.2,659.6'  }  ],
	easing: 'linear',
	duration:2000,
});

var cuboRojo = anime({
	targets: '#rojo',
	points: [ { value: '92.5,99.3 92.2,659.6 12.4,613.5 12.7,53.2'  }  ],
	easing: 'linear',
	duration:2000,
});

new ScrollMagic.Scene({
    triggerElement: "",
    duration: "40%",
    triggerHook: 0.9
})
.setAnime(cuboAmarillo)

.addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "",
    duration: "40%",
    triggerHook: 0.9
})
.setAnime(cuboRojo)
.addTo(controller);



var Cubo3D =  anime({
    targets: '.containerCubo',
     keyframes: [
        {translateY: -10},
        {translateY: 10},
        {translateY: 5},
         {translateY: 10}
    ],
    duration: 4000,
    easing: 'easeOutElastic(1, .8)',
    loop: true

});