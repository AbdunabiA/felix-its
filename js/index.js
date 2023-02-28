const container = document.querySelector(".statisticsWrap");
const stat = document.querySelectorAll(".orangeText");
let start = false;

const navbarWrap = document.querySelector(".navbarWrap");
const logosWrap = document.querySelector(".logosWrap");

window.onscroll = function () {
  if (scrollY >= container.offsetTop - 500) {
    if (!start) {
      stat.forEach((sta) => startCount(sta));
    }
    start = true;
  }
  if(scrollY >= logosWrap.offsetTop){
    navbarWrap.classList.add('fixed')
  }else{
    navbarWrap.classList.remove('fixed')
  }
};
console.log(stat);
function startCount(el) {
  let max = el.dataset.max;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == max) {
      clearInterval(count);
    }
  }, 5);
}

// const aboutUsRightContent = document.querySelector(".aboutUsRightContent");
// const image1 = document.querySelector(".img1");
// const image2 = document.querySelector(".img2");
// // let animateImgs = false
// console.log(aboutUsRightContent, image1, image2);
// window.onscroll = function () {
//   if (scrollY >= aboutUsRightContent.offsetTop - 1100) {
//     // if (!animateImgs) {
//     image1.classList.add("animateOnScrollLeft");
//     image2.classList.add("animateOnScrollRight");
//     // }
//     // animateImgs = true;
//     // console.log('animattion');
//   }
// };

const animateFromLeft = document.querySelectorAll(".animateFromLeft");
const animateFromRight = document.querySelectorAll(".animateFromRight");
const animateFromBottom = document.querySelectorAll('.animateFromBottom')

const observerLeft = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle('leftAnimation', entry.isIntersecting)
            if (entry.isIntersecting)   observerLeft.unobserve(entry.target)
        })
    }, {threshold:0.7}
)

animateFromLeft.forEach(el=>{
    observerLeft.observe(el)
})

const observerRight = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("rightAnimation", entry.isIntersecting);
      if (entry.isIntersecting) observerRight.unobserve(entry.target);
    });
  },
  { threshold: 0.7 }
);

animateFromRight.forEach((el) => {
  observerRight.observe(el);
});

const observerBottom = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("bottomAnimation", entry.isIntersecting);
      if (entry.isIntersecting) observerBottom.unobserve(entry.target);
    });
  },
  { threshold: 0.7 }
);

animateFromBottom.forEach((el) => {
  observerBottom.observe(el);
});


const openingDivs = document.querySelectorAll('.openingDiv');
const answers = document.querySelectorAll('.answer')

openingDivs.forEach((div, i)=>{
  div.addEventListener('click', ()=>{
    const answer = div.nextElementSibling
    const img = div.lastElementChild
    answers.forEach((answer, index)=>{
      if(answer.classList.contains('openAnswer') && i!==index){
        img.classList.remove("rotateImg");
        console.log(img);
        answer.classList.remove("openAnswer");
        answer.classList.add("answer");
        console.log('closed another answer');
      }
    })
    if(answer.classList.contains('answer')){
      answer.classList.remove('answer')
      answer.classList.add("openAnswer");
      img.classList.add("rotateImg");
    } else {
      answer.classList.remove("openAnswer");
      answer.classList.add("answer");
      img.classList.remove("rotateImg");
    }
    })
})
