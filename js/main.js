// responsive navbar
const menuBtn = document.querySelector(".mobile-menu ul");
const button = document.querySelector(".header-buttons-mobile");
const bars = document.getElementById("bar");
bars.addEventListener("click", () => {
  // toggle the menu and button classes to show/hide the menu
  menuBtn.classList.toggle("active");
  button.classList.toggle("active");

  // toggle the button icon between bars and x
  if (menuBtn.classList.contains("active")) {
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
  } else {
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
  }
});

// according to the FAQ section
const faqs = document.querySelectorAll(".faq");
const title = document.querySelector(".faq-title");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
        title.classList.remove("active");
      }
    });
    faq.classList.toggle("active");
    title.classList.toggle("active");
  });
});
