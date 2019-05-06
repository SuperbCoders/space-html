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
        navElement: 'div',
        rewind: true,
        mouseDrug: false
        // loop: true
    });
    $(".catalog-slider").on('changed.owl.carousel', function(event) {
        var items     = event.item.count;
        var item      = event.item.index;
        $('.slider-counter__current').text(item+1);
        $('.slider-counter__all').text(items);
    });
    $('.my-owl-prev').on('click', function () {
        $(".catalog-slider").trigger('prev.owl.carousel');
    });
    $('.my-owl-next').on('click', function () {
        $(".catalog-slider").trigger('next.owl.carousel');
    });
});

$(document).ready(function(){
    $('a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
});

// $(window).scroll(function() {
//     var windowScroll = $(window).scrollTop();
//     var formViev = $('.section-7').offset();
//     if(windowScroll < 50){
//         $('.form-fix').removeClass('active');
//     } else if (windowScroll > formViev.top){
//         $('.form-fix').removeClass('active');
//     } else {
//         $('.form-fix').addClass('active');
//     }
// });

$(window).scroll(function() {
    var windowScroll = $(window).scrollTop();
    var formViev = $('.section-7').offset();
    if (windowScroll > formViev.top){
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
    if (evt.keyCode === 27) {
        $('.menu').removeClass('active');
    }
});



$('input').on('keyup', function () {
    var thisValueFormated = $(this).val().replace(/^\s+|\s+$/g, '');
    var thisValue = $(this).val();
    var connected = $(this).data('connect');
    console.log(connected);
    if(thisValueFormated === '' ){
        $(this).removeClass('full');
        $(this).val('');
        $('.'+connected).removeClass('full').val('');
    } else {
        $(this).addClass('full');
        $('.'+connected).addClass('full').val(thisValue);
    }
});
