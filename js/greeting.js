const loginForm = document.querySelector("#login-form")
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


///로컬스토리지에 유저정보가없으면 null값을반환할거야
const savedUsername = localStorage.getItem(USERNAME_KEY);
const toDoForm = document.querySelector("#toDo-form");
const toDoList = document.querySelector("#toDo-list");
const logOut = document.querySelector('#logout');


if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginSubmit);
} else {
    paintGreetings(savedUsername);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    logOut.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);

}

function OnLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    logOut.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
}


function paintGreetings(username) {
    greeting.innerHTML = `안녕하세요 <span class="username">${username}</span> 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);


}