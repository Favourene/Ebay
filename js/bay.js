window.onload = function(){
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
          640: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          1: {
            slidesPerView: 1,
            spaceBetween: 10
        },
      }
    });
    AOS.init();
}