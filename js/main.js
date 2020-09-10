AOS.init();

//Preloader animation
$(document).ready(function() {
  preloaderFadeOutTime = 800;

  function hidePreloader() {
    var preloader = $('.spinner-wrapper');
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});

// scroll bar animation
$(window).scroll(function() {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $('.scroll-bar').css('height', scrollPercent + '%');
});

// text slider

var typed = new Typed('.type', {
  strings: [
    'Web Designer',
    'Front-end Developer.',
    'Artist.',
    'Graphic Designer',
    'Freelancer.',
    'Dancer.',
    'Web Designer.'
  ],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});



// works page jquery

var $projects = $('.projects');

$projects.isotope({
  itemSelector: '.item',
  layoutMode: 'fitRows'
});




$('.filters li').click(function() {
  $('.filters li').removeClass('active');
  $(this).addClass('active');

  var filter = $(this).attr('data-filter');
  $projects.isotope({
    filter: filter
  })
});


$('#Works .card').mouseover(function() {
  $(this).find(' .card-overlay').css({
    'top': '-100%'
  });
  $(this).find(' .card-hover').css({
    'top': '0%'
  });
}).mouseleave(function() {
  $(this).find(' .card-overlay').css({
    'top': '0%'
  });
  $(this).find(' .card-hover').css({
    'top': '100%'
  });
});
