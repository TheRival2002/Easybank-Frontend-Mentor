const mobileNav = document.querySelector(".mobile-nav");
const headerNav = document.querySelector(".header-nav");

const header = document.querySelector(".header");
const logoInter = document.querySelector(".logo-inter");
const logoImg = document.querySelector(".logo-img");
const optionsCrop = {
  rootMargin: "-220px 0px 0px 0px",
};

mobileNav.addEventListener("click", function () {
  headerNav.hasAttribute("data-visible")
    ? mobileNav.setAttribute("aria-expanded", false)
    : mobileNav.setAttribute("aria-expanded", true);
  headerNav.toggleAttribute("data-visible");
});

const logoImgObserver = new IntersectionObserver(function (
  entries,
  logoImgObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      logoImg.classList.add("logo-img-crop");
      header.classList.add("header-scroll");
    } else {
      logoImg.classList.remove("logo-img-crop");
      header.classList.remove("header-scroll");
    }
  });
},
optionsCrop);

logoImgObserver.observe(logoInter);
