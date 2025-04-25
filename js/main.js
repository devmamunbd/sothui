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
