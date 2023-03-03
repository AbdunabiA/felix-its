// const statisticsWrap = document.querySelector(".statisticsWrap");
// const stat = document.querySelectorAll(".orangeText");
// let start = false;

// const navbarWrap = document.querySelector(".navbarWrap");
// console.log(statisticsWrap, stat, navbarWrap);
// // THESE CODES ARE FOR NUMBER COUNTING AND NAVBAR

// window.onscroll = function () {
//   if (scrollY >= statisticsWrap.offsetTop - 500) {
//     if (!start) {
//       stat.forEach((sta) => startCount(sta));
//     }
//     start = true;
//   }
//   if (scrollY >= navbarWrap.offsetTop) {
//     navbarWrap.classList.add("fixed");
//   } else {
//     navbarWrap.classList.remove("fixed");
//   }
// };

// function startCount(el) {
//   let max = el.dataset.max;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == max) {
//       clearInterval(count);
//     }
//   }, 5);
// }


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


//THESE CODES ARE FOR GOING TO TOP PART OF THE PAGE
const goToTopButton = document.querySelector(".arrowWrap");

goToTopButton.addEventListener('click', ()=>{
  window.scrollTo({ top: 0, behavior: "smooth" });
})