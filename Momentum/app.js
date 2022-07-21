let body = document.querySelector("body");
let title = document.querySelector(".title");

function mouseEnter() {
    title.innerHTML = "Mouse is here! 😊";
    body.style.background = "#ffe0de";
}

function mouseLeave() {
    title.innerHTML = "Mouse is gone! 😂";
    body.style.background = "#e0f4fe";
}

title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);