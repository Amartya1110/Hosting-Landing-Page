const hamMenu = document.getElementById("ham-menu");
const hamBars = document.querySelectorAll(".menu-bar");
const navMenu = document.querySelector(".nav-menu");
console.log(hamBars);

hamMenu.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-bg");
    hamMenu.classList.toggle("toggle-ham");
    for(let bar of hamBars) {
        bar.classList.toggle("toggle-bar-bg");
    }
})