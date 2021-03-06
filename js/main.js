const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500){
    //배지 숨기기
    // .gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display:'none'
    })
    //버튼보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  }else{
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display:'block'
    })
    //버튼 숨기기
     gsap.to(toTopEl, 0.2, {
       x: 100
     });
  }
}, 300));
//_.throttle(함수, 시간)


toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction:'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,  //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay:{
  //   delay:5000
  // }
  pagination:{
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, //사용자가 각 페이지번호를 클릭하면 해당 페이지로 이동
  },
  navigation:{
    prevEl:'.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,//하나의 화면에 몇개가 보여질지 선택
  navigation:{
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
})

const promotionEL = document.querySelector('.promotion');
const poromotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;

poromotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨김
    isHidePromotion = true;
    promotionEL.classList.add('hide')
  }else{
    //보임
    isHidePromotion = false;
    promotionEL.classList.remove('hide')

  }
});

//범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, y){
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
    y: y,  //상하좌우 값
    repeat: -1,  //반복값
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement : spyEl, //보여짐 여부를 감시할 요소
      triggerHook : .8  //화면 상단0 화면 하단1 로 가정할때 0.8부분에서 실행
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

