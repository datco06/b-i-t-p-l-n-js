function selectTour(tourName) {
  const tourInput = document.getElementById("selected-tour");
  if (tourInput) {
    tourInput.value = tourName;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  function showError(id, message) {
    const errorElement = document.getElementById(`error-${id}`);
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
  }

  function clearError(id) {
    const errorElement = document.getElementById(`error-${id}`);
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const destination = document.getElementById("selected-tour").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const duration = document.getElementById("duration").value.trim();
    const participants = document.getElementById("participants").value.trim();

    let hasError = false;

    const fields = [
      "name",
      "email",
      "selected-tour",
      "phone",
      "duration",
      "participants",
    ];
    fields.forEach(clearError);

    fields.forEach(function (id) {
      const value = document.getElementById(id).value.trim();
      if (!value) {
        showError(id, "Vui lòng điền đầy đủ thông tin");
        hasError = true;
      }
    });

    if (hasError) return;

    const phoneRegex = /^0\d{9}$/;
    if (!phoneRegex.test(phone)) {
      showError(
        "phone",
        "Số điện thoại không hợp lệ (phải bắt đầu bằng 0 và có 10 chữ số)"
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("email", "Email không hợp lệ");
      return;
    }

    const successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);

    form.reset();
  });

  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    const accountSection = document.querySelector(".taikhoan");
    if (accountSection) {
      accountSection.style.display = "none";
    }
  }
});
