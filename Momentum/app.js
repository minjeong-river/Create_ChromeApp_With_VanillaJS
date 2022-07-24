const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAMES = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAMES);
    localStorage.setItem("USERNAME_KEY", username);
    greeting.classList.remove(HIDDEN_CLASSNAMES);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAMES);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAMES);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    paintGreetings(savedUsername);
}