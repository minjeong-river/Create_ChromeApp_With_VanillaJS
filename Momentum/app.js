let h1 = document.querySelector(".title");

function mouseEnter() {
    h1.innerHTML = "Mouse is here! 😊";
    document.body.style.background = "#ffe0de";
}

function mouseLeave() {
    h1.innerHTML = "Mouse is gone! 😂";
    document.body.style.background = "#e0f4fe";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("ALL GOOD!");
}

h1.addEventListener("mouseenter", mouseEnter);
h1.addEventListener("mouseleave", mouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);