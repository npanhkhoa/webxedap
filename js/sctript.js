function checkName(name) {
    return /^[A-Za-zÀ-Ỹà-ỹ\s]+$/.test(name.trim());
}

function checkPhone(phone) {
    return /^(0\d{9})$/.test(phone.trim());
}

function checkEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());
}

// Kiểm tra tên khi nhập
function validateName() {
    const name = document.getElementById("nameSignIn").value;
    const message1 = document.getElementById("message1");
    if (checkName(name)) {
        message1.textContent = "✔ Tên hợp lệ ";
        message1.style.color = "green";
    } else {
        message1.textContent = "✖ Tên không hợp lệ ";
        message1.style.color = "red";
    }
}



// Kiểm tra email khi nhập
function validateEmail() {
    const email = document.getElementById("emailSignIn").value;
    const message3 = document.getElementById("message3");
    if (checkEmail(email)) {
        message3.textContent = "✔ Email hợp lệ ";
        message3.style.color = "green";
    } else {
        message3.textContent = "✖ Email không hợp lệ ";
        message3.style.color = "red";
    }
}
// Kiếm tra Input cho modal SignUp
function checkInput() {
    const name = document.getElementById("nameSignIn").value;
    const email = document.getElementById("emailSignIn").value;

    validateName();
    validateEmail();

    if (!checkName(name) || !checkEmail(email)) {
        alert("Vui lòng nhập thông tin hợp lệ!");
        return false;
    }
    loginUser();

}

// Hàm reset dữ liệu form modal
function resetModal() {
    document.getElementById("nameSignIn").value = "";
    document.getElementById("emailSignIn").value = "";

    document.getElementById("message1").textContent = "";
    document.getElementById("message3").textContent = "";
}

// Check form đăng ký
// Kiểm tra giá trị Tên của modal SignUp
function validateSignUpName() {
    const name = document.getElementById("nameSignUp").value;
    const message1 = document.getElementById("messageSignUp1");
    if (checkName(name)) {
        message1.textContent = "✔ Tên hợp lệ ";
        message1.style.color = "green";
    } else {
        message1.textContent = "✖ Tên không hợp lệ ";
        message1.style.color = "red";
    }
}
// Kiểm tra giá trị Số điện thoại của modal SignUp
function validateSignUpPhone() {
    const phone = document.getElementById("phoneSignUp").value;
    const message2 = document.getElementById("messageSignUp2");
    if (checkPhone(phone)) {
        message2.textContent = "✔ Số điện thoại hợp lệ ";
        message2.style.color = "green";
    } else {
        message2.textContent = "✖ Số điện thoại không hợp lệ ";
        message2.style.color = "red";
    }
}

// Kiểm tra email khi nhập
function validateSignUpEmail() {
    const email = document.getElementById("emailSignUp").value;
    const message3 = document.getElementById("messageSignUp3");
    if (checkEmail(email)) {
        message3.textContent = "✔ Email hợp lệ ";
        message3.style.color = "green";
    } else {
        message3.textContent = "✖ Email không hợp lệ ";
        message3.style.color = "red";
    }
}

// Kiếm tra Input cho modal SignUp
function checkSignUpInput() {
    const name = document.getElementById("nameSignUp").value;
    const phone = document.getElementById("phoneSignUp").value;
    const email = document.getElementById("emailSignUp").value;

    validateSignUpName();
    validateSignUpPhone();
    validateSignUpEmail();

    if (!checkName(name) || !checkEmail(email) || !checkPhone(phone)) {
        alert("Vui lòng nhập thông tin hợp lệ!");
        return false;
    }
    registerUser();
    alert("Đăng ký thành công. Bạn hãy đăng nhập lại nhé !");
    let modal = document.getElementById("modalSignUp");
    let modalInstance = bootstrap.Modal.getInstance(modal);
    if (modalInstance)
        modalInstance.hide();
    resetSignUpModal();
    return true;
}

// Hàm reset dữ liệu form modal
function resetSignUpModal() {
    document.getElementById("nameSignUp").value = "";
    document.getElementById("phoneSignUp").value = "";
    document.getElementById("emailSignUp").value = "";
    document.getElementById("addressSignUp").value = "";

    document.getElementById("messageSignUp1").textContent = "";
    document.getElementById("messageSignUp2").textContent = "";
    document.getElementById("messageSignUp3").textContent = "";
}

function toggleSearchBox(event) {
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài

    let searchBox = document.getElementById("searchBox");
    if (!searchBox) {
        console.error("Element #searchBox not found!");
        return;
    }

    // Toggle hiển thị
    searchBox.style.display = (searchBox.style.display === "none" || searchBox.style.display === "") ? "block" : "none";
}

// Đóng hộp tìm kiếm khi click bên ngoài
document.addEventListener("click", function(event) {
    let searchBox = document.getElementById("searchBox");
    let searchButton = document.querySelector(".bi-search"); // Nút tìm kiếm

    if (!searchBox.contains(event.target) && !searchButton.contains(event.target)) {
        searchBox.style.display = "none";
    }
});

// Thông báo chức năng tìm kiếm
function notificationSearch() {
    let searchInfor = document.getElementById("search-input").value;
    if (searchInfor.trim() === "")
        alert("Vui lòng nhập tên sản phẩm !");
    else
        alert("Chức năng tìm kiếm sẽ được cập nhật trong thời gian tới!");
}



// Hàm hiển thị thông báo
function showNotification(message) {
    let notification = document.getElementById("cart-notification");
    notification.textContent = message;
    notification.classList.remove("d-none");
    setTimeout(() => notification.classList.add("d-none"), 2000);
}



let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productName, price) {
    // Đồng bộ lại cart từ localStorage
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }

    // Lưu lại
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
    showNotification("Đã thêm vào giỏ hàng!");
}


function updateCartUI() {
    // Đồng bộ lại từ localStorage mỗi lần cập nhật
    cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartList = document.getElementById("cart-items");
    let cartTable = document.getElementById("cart-table");
    let cartEmptyMessage = document.getElementById("cart-empty-message");
    let checkoutContainer = document.getElementById("checkout-container");

    if (!cartList || !cartTable || !cartEmptyMessage || !checkoutContainer) return;

    cartList.innerHTML = "";

    if (cart.length === 0) {
        cartTable.classList.add("d-none");
        cartEmptyMessage.classList.remove("d-none");
        checkoutContainer.classList.add("d-none");
    } else {
        cartTable.classList.remove("d-none");
        cartEmptyMessage.classList.add("d-none");
        checkoutContainer.classList.remove("d-none");

        cart.forEach((item, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${new Intl.NumberFormat('vi-VN').format(item.price)}₫</td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, -1)">-</button>
                    ${item.quantity}
                    <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, 1)">+</button>
                </td>
                <td>${new Intl.NumberFormat('vi-VN').format(item.price * item.quantity)}₫</td>
            `;
            cartList.appendChild(row);
        });
    }
}



localStorage.setItem("cart", JSON.stringify(cart));

function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1); // Xóa sản phẩm nếu số lượng <= 0
    }
    localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật lại localStorage
    updateCartUI();
    if (typeof displayCartOnCheckoutPage === "function") {
        displayCartOnCheckoutPage(); // Cập nhật lại nếu đang ở trang thanh toán
    }

}


// Bắt sự kiện khi nhấn vào nút "Thêm vào giỏ"
document.querySelectorAll(".add-to-cart").forEach((icon) => {
    icon.addEventListener("click", function() {
        let productName = this.dataset.name;
        let price = parseInt(this.dataset.price);
        addToCart(productName, price);
    });
});

// Lưu thông tin người dùng nhập vào


let registerUserInfor = {};

// Hàm đăng ký
function registerUser() {
    const userName = document.getElementById("nameSignUp").value.trim();
    const userPhone = document.getElementById("phoneSignUp").value.trim();
    const userEmail = document.getElementById("emailSignUp").value.trim();
    const userAddress = document.getElementById("addressSignUp").value.trim();
    registerUserInfor = { userName, userPhone, userEmail, userAddress };

}


// Khởi tạo loginModal
let loggedInUser = null;
// Hàm đăng nhập
function loginUser() {
    const username = document.getElementById("nameSignIn").value.trim();
    const email = document.getElementById("emailSignIn").value.trim();

    if (registerUserInfor && username === registerUserInfor.userName && email === registerUserInfor.userEmail) {
        alert("Đăng nhập thành công!");
        loggedInUser = {...registerUserInfor }; // lưu thông tin người dùng
        let modal = bootstrap.Modal.getInstance(document.getElementById("modalSignIn"));
        if (modal) modal.hide();
        resetModal();
    } else {
        alert("Sai tên tài khoản hoặc mật khẩu!");
        resetModal();
    }
}





function handleUserClick() {
    let modalElement = document.getElementById("modalSignIn");
    let modal = new bootstrap.Modal(modalElement);

    const modalBody = modalElement.querySelector(".modal-body");

    if (loggedInUser) {
        // Hiển thị thông tin người dùng
        modalBody.innerHTML = `
            <h5>Xin chào, ${loggedInUser.userName}!</h5>
            <p>Email: ${loggedInUser.userEmail}</p>
            <button class="btn btn-secondary" onclick="logout()">Đăng xuất</button>
        `;
    } else {
        // Hiển thị lại form đăng nhập từ template
        modalBody.innerHTML = document.getElementById("loginFormTemplate").innerHTML;
    }

    modal.show();
}


function logout() {
    loggedInUser = null;
    alert("Bạn đã đăng xuất!");

    let modal = bootstrap.Modal.getInstance(document.getElementById("modalSignIn"));
    if (modal) modal.hide();
}

// Trang thanh toán
function displayCartOnCheckoutPage() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartContainer = document.getElementById("cart-items");
    const totalContainer = document.getElementById("total-price");

    if (!cartContainer || !totalContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <strong>${item.name}</strong> <br>
            ${item.price.toLocaleString()} x ${item.quantity} = 
            <strong>${itemTotal.toLocaleString()}</strong>
            <hr>
        `;
        cartContainer.appendChild(div);
    });

    totalContainer.textContent = total.toLocaleString();
}

document.addEventListener("DOMContentLoaded", function() {
    updateCartUI();
});