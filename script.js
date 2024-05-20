const password = document.querySelector("input[name=password]")
const confirm = document.querySelector("input[name=confirm-password]")


password.addEventListener("change", () => {
    if (password.value === confirm.value) {
        password.style.border = "1px solid #E5E7EB";
    } else if (confirm.value === "") {
            password.style.border = "1px solid #E5E7EB";
    } else {
        password.style.border = "1px solid red";
        confirm.style.border = "1px solid red";
    }
})

confirm.addEventListener("change", () => {
    if (password.value === confirm.value) {
        password.style.border = "1px solid #E5E7EB";
        confirm.style.border = "1px solid #E5E7EB";
    } else {
        password.style.border = "1px solid red";
        confirm.style.border = "1px solid red";
    }
})