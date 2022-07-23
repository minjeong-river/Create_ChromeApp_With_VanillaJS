const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAMES = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAMES);
    // greeting.innerText = "Hello!" + username;
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAMES);
}

loginForm.addEventListener("submit", onLoginSubmit);