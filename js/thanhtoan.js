function checkName(name) {
    return /^([A-ZÀ-Ỹ][a-zà-ỹ]+)(\s[A-ZÀ-Ỹ][a-zà-ỹ]+)+$/.test(name);
}

function checkPhone(phone) {
    return /^(0\d{9})$/.test(phone.trim());
}

// Kiểm tra khi nhập

function validateName() {
    let name = document.getElementById("name").value;
    let message = document.getElementById("messageCheckName");
    if (!checkName(name)) {
        message.textContent = "Tên không hợp lệ!";
        message.style.color = "red";
    } else {
        message.textContent = "Tên hợp lệ !";
        message.style.color = "green";
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("messageCheckPhone");
    if (!checkPhone(phone)) {
        message.textContent = "Số điện thoại không hợp lệ!";
        message.style.color = "red";
    } else {
        message.textContent = "Số điện thoại hợp lệ !";
        message.style.color = "green";
    }
}

function reset() {
    document.getElementById("messageCheckName").textContent = "";
    document.getElementById("messageCheckPhone").textContent = "";
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.querySelectorAll('input[name="phuongThuc"]').forEach(pt => pt.checked = false);
    document.querySelectorAll('input[name = "thanhToan"]').forEach(tt => tt.checked = false);
}
// Kiểm tra khi nhấn thanh toán
function checkInfor() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let phuongThucVanChuyen = document.getElementsByName("phuongThuc");
    let hinhThucThanhToan = document.getElementsByName("thanhToan");

    let isDaCheckVanChuyen = Array.from(phuongThucVanChuyen).some(pt => pt.checked);
    let isDaCheckHTTT = Array.from(hinhThucThanhToan).some(tt => tt.checked);

    if (!checkName(name) || !checkPhone(phone)) {
        alert("Vui lòng nhập thông tin hợp lệ !");
        reset();
        return false;
    }
    if (address.trim() === "" || !isDaCheckVanChuyen || !isDaCheckHTTT) {
        alert("Vui lòng nhập và chọn đầy đủ thông tin !")
        return false;
    } else {
        alert("Chức năng thanh toán sẽ sớm được hoàn thiện!");
        reset();
    }
}