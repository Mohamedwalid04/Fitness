let bars = document.querySelector(".icon");
let bar_one = document.querySelector(".one");
let bar_two = document.querySelector(".two");
let bar_three = document.querySelector(".three");
let nav = document.querySelector(".show")
let lists = document.querySelector(".nav")
let booking = document.querySelector(".booking")
let icon = document.querySelector(".icon_2")
let sec_main = document.querySelector(".sec_main");



bars.addEventListener("click", () => {
    if (bars.classList.contains("active")) {
        bars.classList.remove("active");
    } else {
        bars.classList.add("active")
    }
})



bars.addEventListener("click", () => {
    if (nav.classList.contains("options")) {
        nav.classList.remove("options")
        nav.classList.add("navg")
    } else {
        nav.classList.add("options")
        nav.classList.remove("navg")

    }
})



icon.addEventListener("click", () => {
    booking.remove()
    sec_main.style.cssText = `
    padding-top: 0;
    `
})


