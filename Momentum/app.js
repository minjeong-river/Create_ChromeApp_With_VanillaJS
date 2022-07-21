let title = document.querySelector(".title");

function mouseEnter() {
    title.innerHTML = "Mouse is here! 😊";
}

function mouseLeave() {
    title.innerHTML = "Mouse is gone! 😂";
}


title.addEventListener("mouseenter", mouseEnter);
title.addEventListener("mouseleave", mouseLeave);