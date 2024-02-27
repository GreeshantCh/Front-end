document.addEventListener("DOMContentLoaded", function () {
    function redirectToLogin() {
        window.location.href = "./src/Authentication/login/login.html";
    }

    const loginBtn = document.getElementById("loginBtn");
    
    if (loginBtn) {
        loginBtn.addEventListener("click", redirectToLogin);
    }
});
