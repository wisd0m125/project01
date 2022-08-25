
      var swiper = new Swiper(".mySwiper01", {
        slidesPerView: 2,
        spaceBetween: 1,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
       delay:6000,
       disableOnInteraction: false,
      },
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
