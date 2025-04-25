const faqDetails = document.querySelectorAll(".faq-details");
const allAns = document.querySelectorAll(".faq-ans");
const allArrow = document.querySelectorAll(".arrow");
faqDetails.forEach((eachFaq) => {
  eachFaq.addEventListener("click", () => {
    const ans = eachFaq.querySelector(".faq-ans");
    const arrow = eachFaq.querySelector(".arrow");

    allAns.forEach((eachAns) => {
      eachAns.classList.remove("appear");
      eachAns.classList.add("vanish");
    });

    allArrow.forEach((eachArrow) => {
      eachArrow.classList.remove("fa-chevron-up");
      eachArrow.classList.add("fa-chevron-down");
    });

    if (ans.classList.contains("vanish")) {
      ans.classList.remove("vanish");
      ans.classList.add("appear");
      arrow.classList.remove("fa-chevron-down");
      arrow.classList.add("fa-chevron-up");
    } else {
      ans.classList.remove("appear");
      ans.classList.add("vanish");
      arrow.classList.remove("fa-chevron-up");
      arrow.classList.add("fa-chevron-down");
    }
  });
});
