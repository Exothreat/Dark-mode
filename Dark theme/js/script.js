const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
    this.classList.toggle("bi-brightness-high-fill");
    if(this.classList.toggle("bi-moon")){
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = "0.5s";
    }
    else {
        body.style.background = "black"
        body.style.color = "white";
        body.style.transition = "0.5s";
    }
})