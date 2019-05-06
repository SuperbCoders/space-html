$(document).ready(function(){
    $(".catalog-slider").on('initialized.owl.carousel', function(event) {
        var items     = event.item.count;
        var item      = event.item.index;
        $('.slider-counter__current').text(item+1);
        $('.slider-counter__all').text(items);
    });
    $(".catalog-slider").owlCarousel({
        items: 1,
        nav: true,
        navText: true,
        dots: false,
        navElement: 'div'
        // loop: true
    });
    $(".catalog-slider").on('changed.owl.carousel', function(event) {
        var items     = event.item.count;
        var item      = event.item.index;
        $('.slider-counter__current').text(item+1);
        $('.slider-counter__all').text(items);
    });
});

$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
});

$(window).scroll(function() {
    var windowScroll = $(window).scrollTop();
    if(windowScroll > 0){
        $('.form-fix').addClass('active');
    } else {
        $('.form-fix').removeClass('active');
    }
});

$(document).ready(function(){
   $('.header__menu button').on('click', function () {
      $('.menu').addClass('active');
   });
   $('.menu__close').on('click', function () {
      $('.menu').removeClass('active');
   });
});

$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
        $('.menu').removeClass('active');
    }
});



$('input').on('change', function () {
    var thisValue = $(this).val().replace(/^\s+|\s+$/g, '');
    if(thisValue === '' ){
        $(this).removeClass('full');
        $(this).val('');
    } else {
        $(this).addClass('full');
    }
});


