$(document).ready(function (){
    $('.question').on('click', function (){
        $(this).next().slideToggle();
        $(this).toggleClass('blue');
        $(this).css("border","0");


    })

    $('.question').on('click', function (){
        $('.arrow_1').hide();
        $('.arrow_2').show().sass("display", "absolute");
    })

})
