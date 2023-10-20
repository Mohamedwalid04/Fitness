let inputs = document.querySelectorAll("input")
let btn = document.querySelector(".submit")
let icon = document.querySelector(".eye")
let bar = document.querySelector(".block")



inputs[0].value = window.sessionStorage.getItem("Email")
inputs[1].value = sessionStorage.getItem("password")




inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        if (input.value !== "") {
            window.sessionStorage.setItem("Email", inputs[0].value)
            window.sessionStorage.setItem("password", inputs[1].value)
        }
    })
    btn.addEventListener("click", (e) => {
        if (input.value === "") {
            e.preventDefault()
        }
    })
})
icon.addEventListener("click", () => {
    if (bar.classList.contains("block")) {
        bar.classList.replace("block", "unblock")
        inputs[1].type = "text"
    } else {
        bar.classList.replace("unblock", "block")
        inputs[1].type = "password"
    }
})
