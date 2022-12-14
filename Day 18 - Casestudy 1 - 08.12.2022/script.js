const menuBtn = document.querySelector('#menuBtn');
const sideNav= document.querySelector('#sideNav');
const menuList= document.querySelector('#menuList');

    menuBtn.onclick = function () {
    sideNav.classList.toggle('open');
    menuList.classList.toggle('open')
    }
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

// var swiper = new Swiper(".testimonial-slider", {
//     // spaceBetween:10,
//     grabCursor:true,
//     loop: true,
//     centeredSlides:true,
//     autoplay: {
//         delay:9500,
//         disableOnInteraction: false,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       1024: {
//         slidesPerView: 6,
//       },
//     },
//   });

var swiper = new Swiper(".feature-img", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
      delay:9500,
      disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay:9500,
      disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




