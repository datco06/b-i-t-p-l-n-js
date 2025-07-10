document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".train-search-form");

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

  function validDates(departureDate, returnDate) {
    const departureDateValue = new Date(departureDate);
    const returnDateValue = new Date(returnDate);

    if (returnDate && returnDateValue < departureDateValue) {
      showError("return-date", "Ngày về không được nhỏ hơn ngày đi");
      return false;
    }

    clearError("return-date");
    return true;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const departureStation = document
      .getElementById("departure-station")
      .value.trim();
    const arrivalStation = document
      .getElementById("arrival-station")
      .value.trim();
    const departureDate = document.getElementById("departure-date").value;
    const returnDate = document.getElementById("return-date").value;
    const passengers = document.getElementById("passengers").value;
    const ticketType = document.getElementById("ticket-type").value;

    let hasError = false;
    [
      "departure-station",
      "arrival-station",
      "departure-date",
      "passengers",
    ].forEach(clearError);

    [
      "departure-station",
      "arrival-station",
      "departure-date",
      "passengers",
    ].forEach(function (id) {
      const value = document.getElementById(id).value.trim();
      if (!value) {
        showError(id, "Vui lòng điền đầy đủ thông tin");
        hasError = true;
      }
    });

    if (!validDates(departureDate, returnDate)) {
      hasError = true;
    }

    if (hasError) return;

    const result = `
        ✅ Ga đi: ${departureStation}
        ✅ Ga đến: ${arrivalStation}
        🗓 Ngày đi: ${departureDate}
        ${returnDate ? "🗓 Ngày về: " + returnDate : ""}
        👥 Số hành khách: ${passengers}
        🎫 Loại vé: ${formatTicketType(ticketType)}
      `;

    const resultContainer = document.getElementById("result-message");
    resultContainer.innerText = "Tìm kiếm thành công:\n\n" + result;
    resultContainer.style.display = "block";
  });

  document
    .getElementById("departure-date")
    .addEventListener("change", function () {
      const departureDate = this.value;
      const returnDate = document.getElementById("return-date").value;
      validDates(departureDate, returnDate);
    });

  document
    .getElementById("return-date")
    .addEventListener("change", function () {
      const departureDate = document.getElementById("departure-date").value;
      const returnDate = this.value;
      validDates(departureDate, returnDate);
    });

  function formatTicketType(type) {
    switch (type) {
      case "ngoi-mem-dieu-hoa":
        return "Ngồi mềm điều hòa";
      case "nam-khoang-4-dieu-hoa":
        return "Nằm khoang 4 điều hòa";
      case "nam-khoang-6-dieu-hoa":
        return "Nằm khoang 6 điều hòa";
      case "ghe-phu":
        return "Ghế phụ";
      default:
        return "Không xác định";
    }
  }

  const currentUser = localStorage.getItem("currentUser");
  if (currentUser) {
    document.querySelector(".taikhoan").style.display = "none";
  }
});
