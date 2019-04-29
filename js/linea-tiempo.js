jQuery(document).ready(function ($) {
    // var idItem = $('.items')
    // $('.link-tab').on('click', function () {
    //     var idItem = $(this).attr('id');
    //     if ($('.item-overlay').hasClass(idItem)) {
    //         $('.'+ idItem).addClass('visible');

    //     } else {
    //         $('.item-overlay').addClass('hide');
    //     }

    //     // $('.'+ idItem).addClass('hola');
    //     console.log(idItem);
    // });


    
    $('.tab_content').hide();
    $('.tab_content:first').show();
    $('.items').click(function(event) {
        $('.items').removeClass('active');
        $(this).addClass('active');
        $('.tab_content').hide();
    
        var selectTab = $(this).find('a').attr("href");
    
        $(selectTab).fadeIn();
    });
});