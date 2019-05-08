jQuery(document).ready(function ($) {

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