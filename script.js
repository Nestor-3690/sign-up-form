const password = document.querySelector("input[name=password]");
const confirm = document.querySelector("input[name=confirm-password]");
const span = document.querySelector("span");


password.addEventListener("change", () => {
    if (password.value === confirm.value) {
        password.style.border = "1px solid #E5E7EB";
        span.style.visibility = "hidden";
    } else if (confirm.value === "") {
            password.style.border = "1px solid #E5E7EB";
    } else {
        password.style.border = "1px solid red";
        confirm.style.border = "1px solid red";
        span.style.visibility = "visible";
    }
})

confirm.addEventListener("change", () => {
    if (password.value === confirm.value) {
        password.style.border = "1px solid #E5E7EB";
        confirm.style.border = "1px solid #E5E7EB";
        span.style.visibility = "hidden";
    } else {
        password.style.border = "1px solid red";
        confirm.style.border = "1px solid red";
        span.style.visibility = "visible";
    }
})