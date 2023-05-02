const mobileNav = document.querySelector(".mobile-nav");
const headerNav = document.querySelector(".header-nav");
const choice = document.querySelector(".choice-benefit");
const choiceTitle = document.querySelector(".choice-title");

const header = document.querySelector(".header");
const logoImg = document.querySelector(".logo-img");

const headerBtns = document.querySelectorAll(".header-btn");

mobileNav.addEventListener("click", function () {
  headerNav.hasAttribute("data-visible")
    ? mobileNav.setAttribute("aria-expanded", false)
    : mobileNav.setAttribute("aria-expanded", true);
  headerNav.toggleAttribute("data-visible");
});

window.addEventListener("scroll", () => {
  const choiceFromTop = choiceTitle.getBoundingClientRect().top;
  const headerHeight = header.getBoundingClientRect().height;
  const offset = window.pageYOffset;
  if (offset > choiceFromTop - 50) {
    choice.classList.add("animate");
  } else if (offset < choiceFromTop - 300) {
    choice.classList.remove("animate");
  }

  if (offset > headerHeight + 50) {
    header.classList.add("header-scroll");
    logoImg.classList.add("logo-img-crop");
  } else {
    header.classList.remove("header-scroll");
    logoImg.classList.remove("logo-img-crop");
  }
});

let counter = 0;

headerBtns.forEach((headerBtn) => {
  let attr = headerBtn.dataset.attr;
  headerBtn.addEventListener("click", (btn) => {
    const span = headerBtn.querySelector("span");
    counter++;
    if (counter % 2 === 1) {
      span.classList.add("toggle-dark");
      attr = "dark";
    } else {
      span.classList.remove("toggle-dark");
      attr = "light";
    }
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("attr", attr);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll(".header-btn span");
  let getAttr = localStorage.getItem("attr");
  if (getAttr === "dark") {
    document.body.classList.add("dark-mode");
    spans.forEach((span) => {
      span.classList.add("toggle-dark");
    });
    counter = 1;
  } else {
    document.body.classList.remove("dark-mode");
    spans.forEach((span) => {
      span.classList.remove("toggle-dark");
    });
    counter = 0;
  }
});
