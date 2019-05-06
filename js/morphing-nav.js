var btn = document.getElementById("boton-click");
	var btnBack = document.getElementById("botonBack");
	let morph = document.getElementById('morph');
	let overlay = document.getElementById('seccion');


	let morphing = anime({
		targets: '.cabecera-modal-ul li',
		easing: 'easeInOutQuint',
		opacity: 1,
		translateY:[100, 0 ],
		duration: 1300,
		delay: anime.stagger(100, {start: 500}) ,
		easing: 'easeInOutQuad',
		loop:false,
		autoplay:false
	});

	

	let isVisible = false;
	console.log(isVisible);
	$(btn).click(function(){
	    
   		isVisible = !isVisible;
   		if(isVisible){
   			morphing.restart();
   			morphing.play();
			$(".seccion").addClass('pointer');
			$("#morph").addClass('morphVisible');
			$(".titulo-interno").addClass('titulo-oculto');
			$('.cabecera-modal').addClass('cabeceraActive');
			$('.contendorTransition').addClass('transitionsuave');
			$('body').addClass('removerScroll');
   		} else{
   			
   			morphing.restart();

   			$('.contendorTransition').removeClass('transitionsuave');
   			$('body').removeClass('removerScroll');
   			$(".titulo-interno").removeClass('titulo-oculto');
   			/*$(".seccion").removeClass('pointer');
			$("#morph").removeClass('morphVisible');
			$(".titulo-interno").removeClass('titulo-oculto');
			$('.cabecera-modal').removeClass('cabeceraActive');
   			$('.cabecera-modal').removeClass('cabeceraActive');*/
   		}
	});
	