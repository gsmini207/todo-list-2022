const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작을 실행하지 못하게 막아줌 (여기에선 새로고침을 막아주는것)
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value; //
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}?`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add("greeting__me");
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  //show the form
} else {
  paintGreetings(savedUsername);
  //show the greetings
}
