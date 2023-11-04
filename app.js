var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#next.swiper-button-next",
      prevEl: "#prev.swiper-button-prev",
    },
    debugger: true,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      // when window width is <= 499px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // when window width is <= 999px
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
    },
  });        
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#next1.swiper-button-next",
      prevEl: "#prev1.swiper-button-prev",
    },
    debugger: true,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      // when window width is <= 499px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // when window width is <= 999px
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
    },
  });
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 20,
    slidesPerGroup: 1,
    // loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#next2.swiper-button-next",
      prevEl: "#prev2.swiper-button-prev",
    },
    debugger: true,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      // when window width is <= 499px
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesPerGroup: 2,
      },
      // when window width is <= 999px
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
      },
    },
  });
  const card_pay = document.querySelectorAll('.card_div')

  card_pay.forEach(card => {
    card.addEventListener('click', () => {
        card_pay.forEach(i => {
            i.classList.remove('active')
        })
        card.classList.add('active')
    })
  })

  const accordion_btn = document.querySelectorAll('.accordion_btn')
  const accordion = document.querySelectorAll('.accordion')

  accordion_btn.forEach(acc => {
    acc.addEventListener('click', (e) => {
        var item = e.target.parentElement.querySelector('.accordion_body')
        item.classList.toggle('active')
        if(item.classList.contains('active')){
            item.style.height = `${item.scrollHeight}px`
        }else{
            item.style.height = "0px"
        }
    })
  })

  const hide = document.querySelectorAll('.hide')
  hide.forEach(h => {
    h.addEventListener('click', (e) => {
        var itemhide = e.target.parentElement.parentElement.parentElement
        itemhide.classList.toggle('active')
        if(itemhide.classList.contains('active')){
            itemhide.style.height = `${itemhide.scrollHeight}px`
        }else{
            itemhide.style.height = "0px"
        }
    })
  })

window.addEventListener("scroll", function () {
    var landing = document.querySelector(".landing_page");
    landing.classList.toggle("fade", window.scrollY > 120);
});

// run time
const countDown = () => {
    const countDate = new Date("Nov 16, 2023 00:00:00").getTime()
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = `${textDay}d`
    document.querySelector('.hour').innerText = `${textHour}h`    
    document.querySelector('.minute').innerText = `${textMinute}min`    
    document.querySelector('.second').innerText = `${textSecond}s`    
}
setInterval(countDown, 1000)
countDown();
