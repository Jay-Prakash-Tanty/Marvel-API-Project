var swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 6,
    centeredSlides: true,
    spaceBetween: 40,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      520:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      },
      1120:{
        slidesPerView:4,
      }
    },
  });



      
    