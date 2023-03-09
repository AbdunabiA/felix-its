AOS.init();
const statisticsWrap = document.querySelector(".statisticsWrap");
const stat = document.querySelectorAll(".orangeText");
let start = false;

const navbarWrap = document.querySelector(".navbarWrap");
const logosWrap = document.querySelector(".logosWrap");

// THESE CODES ARE FOR NUMBER COUNTING AND NAVBAR

window.onscroll = function () {
  if (scrollY >= statisticsWrap.offsetTop - 500) {
    if (!start) {
      stat.forEach((sta) => startCount(sta));
    }
    start = true;
  }
  if (scrollY >= logosWrap.offsetTop) {
    navbarWrap.classList.add("fixed");
  } else {
    navbarWrap.classList.remove("fixed");
  }
};

function startCount(el) {
  let max = el.dataset.max;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == max) {
      clearInterval(count);
    }
  }, 5);
}

// const animateFromLeft = document.querySelectorAll(".animateFromLeft");
// const animateFromRight = document.querySelectorAll(".animateFromRight");
// const animateFromBottom = document.querySelectorAll('.animateFromBottom')

// const observerLeft = new IntersectionObserver(
//     entries => {
//         entries.forEach(entry => {
//             entry.target.classList.toggle('leftAnimation', entry.isIntersecting)
//             if (entry.isIntersecting)   observerLeft.unobserve(entry.target)
//         })
//     }, {threshold:0.7}
// )

// animateFromLeft.forEach(el=>{
//     observerLeft.observe(el)
// })

// const observerRight = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("rightAnimation", entry.isIntersecting);
//       if (entry.isIntersecting) observerRight.unobserve(entry.target);
//     });
//   },
//   { threshold: 0.7 }
// );

// animateFromRight.forEach((el) => {
//   observerRight.observe(el);
// });

// const observerBottom = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       entry.target.classList.toggle("bottomAnimation", entry.isIntersecting);
//       if (entry.isIntersecting) observerBottom.unobserve(entry.target);
//     });
//   },
//   { threshold: 0.7 }
// );

// animateFromBottom.forEach((el) => {
//   observerBottom.observe(el);
// });

// THESE CODES ARE FOR ACCORDION

const openingDivs = document.querySelectorAll(".openingDiv");
const answers = document.querySelectorAll(".answer");
const images = document.querySelectorAll(".accordion-image");

openingDivs.forEach((div, i) => {
  div.addEventListener("click", (e) => {
    const answer = div.nextElementSibling;
    const img = div.lastElementChild;
    answers.forEach((answer, index) => {
      if (answer.classList.contains("openAnswer") && i !== index) {
        // img.classList.remove("rotateImg");
        answer.classList.remove("openAnswer");
        answer.classList.add("answer");
      }
    });
    images.forEach((image, index) => {
      if (image.classList.contains("rotateImg") && i !== index) {
        image.classList.remove("rotateImg");
      }
    });
    if (answer.classList.contains("answer")) {
      answer.classList.remove("answer");
      answer.classList.add("openAnswer");
      img.classList.add("rotateImg");
    } else {
      answer.classList.remove("openAnswer");
      answer.classList.add("answer");
      img.classList.remove("rotateImg");
    }
  });
});

// THESE CODES ARE FOR CAROUSEL

const left = document.querySelector(".slider_left");
const right = document.querySelector(".slider_right");

const splide = new Splide(".splide", {
  // arrows: { prev: ".splide__arrow--prev", next: ".splide__arrow--next" },
  type: "loop",
  arrows: false,
  dragMinThreshold: 10,
  // perMove: 1,
  perPage: 3,
  focus: 0,
  gap: "24px",
  flickPower: 500,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  keyboard: true,
  slideFocus: true,
  pagination: false,
  breakpoints: {
    992: {
      perPage: 2,
    },
    575: {
      perPage: 1,
    },
  },
  // paginationDirection: "ttb",
});

splide.mount();

//THESE CODES ARE FOR GOING TO TOP PART OF THE PAGE
const goToTopButton = document.querySelector(".arrowWrap");

goToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("load", function () {
  deSVG(".orangeIconOnHover", true);
});

const mobileNav = document.querySelector(".links-mobile-container");
const closeButton = document.querySelector(".closeButton");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  // mobileNav.style.display = 'block'
  // mobileNav.style.height = '100vh'
  mobileNav.classList.add("showModal");
});
closeButton.addEventListener("click", () => {
  // mobileNav.style.display = 'none'
  // mobileNav.style.height = "0vh";
  mobileNav.classList.remove("showModal");
});
