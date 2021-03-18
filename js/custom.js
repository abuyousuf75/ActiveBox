$(function(){

    //back top top btn

    $('.back-top').click(function(){

    $('body,html').animate({scrollTop:0}, 1000);

    });

    $(window).scroll(function(){

        var scrolling = $(this).scrollTop();

        if( scrolling>150){

            $('.back-top').fadeIn(500);
        }else{
            $('.back-top').fadeOut(500);
        }

        if(scrolling>100){

            $('.nav').addClass('nav-bg');
        }else{

            $('.nav').removeClass('nav-bg');
        };
           

    });


//animation scroll js
var html_body = $('html, body');
$('.nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});






});