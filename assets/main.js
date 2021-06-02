$(document).ready(function(){
    //MAIN SLIDER
    var swiper = new Swiper('.swiper-main', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.pag-main',
        clickable: true,
      },
      navigation: {
        nextEl: '.next-main',
        prevEl: '.prev-main',
      },
    });
    //PLAN SLIDER
    var swiper = new Swiper('.swiper-plan', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.next-plan',
        prevEl: '.prev-plan',
      },
    });
    //PROCESS SLIDER
    var swiper = new Swiper('.swiper-process', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.next-process',
        prevEl: '.prev-process',
      },
    });
    //ORDER SLIDER
    var swiper = new Swiper('.swiper-order', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.next-order',
        prevEl: '.prev-order',
      },
    });
    //HOD SLIDER
    var swiper = new Swiper('.swiper-hod', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.next-hod',
        prevEl: '.prev-hod',
      },
    });

    //Плавный скролл
    $("header nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1200);
    });

    //Мобильное меню
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay-wrap').toggleClass('open');
        $('.overlay-menu a').click(function(){
          $('#overlay-wrap').removeClass('open');
          $('#toggle').removeClass('active');
        });
    });
});

//Изменение header при прокрутке
var startPosition = $("header").offset();
if (startPosition.top > 0) {
  $('header').addClass('scroll-menu');
}
$(window).scroll(function(){
  if ($(window).scrollTop() > 400) {
      $('header').addClass('scroll-menu');
  }
  else {
      $('header').removeClass('scroll-menu');
  }
});