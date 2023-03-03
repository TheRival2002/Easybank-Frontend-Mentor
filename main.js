const mobileNav = document.querySelector(".mobile-nav");
const headerNav = document.querySelector(".header-nav");

mobileNav.addEventListener("click", function () {
  headerNav.hasAttribute("data-visible")
    ? mobileNav.setAttribute("aria-expanded", false)
    : mobileNav.setAttribute("aria-expanded", true);
  headerNav.toggleAttribute("data-visible");
});
