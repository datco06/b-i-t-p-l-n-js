document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector("input[type='email']");
  const passwordInput = document.querySelector("input[type='password']");
  const loginButton = document.querySelector(".register-btn");
  const errorDisplay = document.getElementById("login-error");

  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    errorDisplay.textContent = ""; // Xóa lỗi cũ nếu có

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Kiểm tra bỏ trống
    if (email === "" || password === "") {
      errorDisplay.textContent = "Vui lòng nhập đầy đủ email và mật khẩu.";
      return;
    }

    const storedUser = localStorage.getItem("user_" + email);
    if (!storedUser) {
      errorDisplay.textContent = "Tài khoản không tồn tại.";
      return;
    }

    const user = JSON.parse(storedUser);
    if (user.matkhau !== password) {
      errorDisplay.textContent = "Mật khẩu không chính xác.";
      return;
    }

    // Đăng nhập thành công
    errorDisplay.style.color = "green";
    errorDisplay.textContent = "Đăng nhập thành công! Đang chuyển hướng...";

    setTimeout(() => {
      window.location.href = "home.html"; // Đổi thành trang chính của bạn
    }, 1000);
  });
});
