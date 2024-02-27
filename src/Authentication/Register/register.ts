
function redirectToRegister() {
    window.location.href = "./src/authentication/register/register.html";
}

document.getElementById("registerBtn")?.addEventListener("click", redirectToRegister);
