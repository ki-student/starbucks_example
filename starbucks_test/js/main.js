const badgeEL = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간(s), 옵션)
    gsap.to(badgeEL, .1, {
      opacity : 0,
      display : 'none'
    });
    // 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }
  else {
    // 배지 보이기
    gsap.to(badgeEL, .1, {
      opacity : 1,
      display : 'block'
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간(ms))

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  }); 
});

const fadeELs = document.querySelectorAll('.visual .fade-in');
fadeELs.forEach(function (fadeEL, index) {
  gsap.to(fadeEL, 1, {
    delay: (index + 1) * .5, //0.5초 단위로 나타남
    opacity: 1
  });
});

// new : 생성자 - new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 수
  spaceBetween: 10, //슬라이드 사이의 여백
  centeredSildes: true,
  loop: true,
  autoplay: {
    delay: 3000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    //hide
    promotionEl.classList.add('hide');
  } else {
    //view
    promotionEl.classList.remove('hide');
  }
});

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  gsap.to(selector,
    random(1.5, 2.5),
    {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});