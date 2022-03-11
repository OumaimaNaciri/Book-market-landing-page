// MOBILE NAV

const open_nav = document.querySelector(".hambergur");
const close_nav = document.querySelector(".close");
const header = document.querySelector("header");
open_nav.addEventListener("click", () => {
  header.classList.add("show-nav");
  close_nav.classList.remove("dis-none");
});

close_nav.addEventListener("click", () => {
  header.classList.remove("show-nav");
  close_nav.classList.add("dis-none");
});

// FEATURES TABS
const feauters = document.querySelector(".features-content");
const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".item");

// console.log(feauters);

feauters.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    //remove selected from other buttons
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide othe articles
    content.forEach((item) => {
      item.classList.remove("active");
    });
    const feature = document.getElementById(id);
    feature.classList.add("active");
  }
});

// OPEN QUATIONS
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".icon");
  // console.log(btn);

  btn.addEventListener("click", () => {
    // console.log(question);

    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("active");
      }
    });

    question.classList.toggle("active");
  });
});

// CONTACT FORM

const email = document.querySelector("#email");
const input = document.querySelector(".input");

let regExp = /^[^ ]+?\.[a-z]{2,3}$/;

// console.log(email);
// console.log(input);

function check() {
  if (email.value.match(regExp)) {
    input.classList.remove("active");
  } else {
    input.classList.add("active");
  }

  if (email.value == "") {
    input.classList.remove("active");
  }
}

// Reveal Scroll

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL effect*/
sr.reveal(".text-one", { delay: 200 });
sr.reveal(".text-two", { delay: 300 });
sr.reveal(".card", { origin: "right", delay: 400 });
sr.reveal(".quest", { delay: 300 });
