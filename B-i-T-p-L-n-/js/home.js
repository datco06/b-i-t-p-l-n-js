// --- Logic cho FAQ Accordion ---
document.addEventListener("DOMContentLoaded", function () {
  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const loginArea = document.querySelector(".taikhoan");
    if (loginArea) {
      loginArea.style.display = "none";
    }
  }

  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      // Đóng tất cả các câu trả lời khác
      faqQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== this) {
          otherQuestion.classList.remove("active");
          otherQuestion.nextElementSibling.style.maxHeight = null;
        }
      });
      this.classList.toggle("active");
      const answer = this.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});
