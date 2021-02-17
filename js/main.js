const burger = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const body =document.body;

burger.addEventListener('click', ()=>{
        burger.classList.toggle('active')
        menu.classList.toggle('active');
        body.classList.toggle('lock');
})

$(".head-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        nav:true,
        navText: ["<img src='./img/button-left-img.png'>","<img src='./img/button-right-img.png'>"]
});

$(".testimonials-carousel").owlCarousel({
        items:1,
        autoplay: true,
        loop: true,
        items: 1,
        dots: true
        // navText: ["<img src='./img/button-left-img.png'>","<img src='./img/button-right-img.png'>"]
});
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [3000]);
})

$('.counter-up').counterUp({
        delay: 10,
        time: 1000
});
const el = document.querySelector('.counter-up')
new Waypoint( {
    element: el,
    handler: function() { 
      counterUp( el ) 
      this.destroy()
    },
    offset: 'bottom-in-view'
})

// $('.counters').counterUp({
//         delay: 10,
//         time: 1000
// });
AOS.init();

// $('.grid').isotope({
//         itemSelector: '.grid-img',
//         layoutMode: 'fitRows'
// });
// $('.portfolio-buttons button').click(function(){
//         $('..portfolio-buttons button').removeClass('active');
//         $(this).addClass('active');

//         var selector = $(this).attr('data-filter');
//         $('.grid').isotope({
//                 filter: selector
//         });
//         return false;
// })