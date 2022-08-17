const hamMenu = document.getElementById("ham-menu");
const hamBars = document.querySelectorAll(".menu-bar");
const navMenu = document.querySelector(".nav-menu");


hamMenu.addEventListener("click", () => {
    navMenu.classList.toggle("toggle-bg");
    hamMenu.classList.toggle("toggle-ham");
    for(let bar of hamBars) {
        bar.classList.toggle("toggle-bar-bg");
    }
})

// if the viewport width is 920px or more then remove the above classes
function removeClass() {
    if(window.innerWidth >= 920) {
        navMenu.classList.remove("toggle-bg");
        hamMenu.classList.remove("toggle-ham");
        for(let bar of hamBars) {
            bar.classList.remove("toggle-bar-bg");
        }
    }
}

// Trigger the resize event
window.addEventListener("resize", () => {
    removeClass();
})

