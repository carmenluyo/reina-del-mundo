$(".wrapper-lista-carusel-li > a:nth-child(1)").click(function() {
    $(".wrapper-lista-carusel-li > a:nth-child(1)").addClass('activeLista');
	
	$(".wrapper-lista-carusel-li > a:nth-child(2)").removeClass('activeLista');
    $(".wrapper-lista-carusel-li > a:nth-child(3)").removeClass('activeLista');
});

        /***** VISION ***/
$(".wrapper-lista-carusel-li > a:nth-child(2)").click(function() {
    $(".wrapper-lista-carusel-li > a:nth-child(2)").addClass('activeLista');

    $(".wrapper-lista-carusel-li > a:nth-child(1)").removeClass('activeLista');
    $(".wrapper-lista-carusel-li > a:nth-child(3)").removeClass('activeLista');
});

        /***** MISION **/
          $(".wrapper-lista-carusel-li > a:nth-child(3)").click(function() {
          	$(".wrapper-lista-carusel-li > a:nth-child(3)").addClass('activeLista');

          	
    $(".wrapper-lista-carusel-li > a:nth-child(2)").removeClass('activeLista');
            $(".wrapper-lista-carusel-li > a:nth-child(1)").removeClass('activeLista');  

});   