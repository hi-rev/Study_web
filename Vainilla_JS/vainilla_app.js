const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

/* 반복되는 string들은 대문자 변수로 저장해놓는것이 좋음! */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    /* preventDefault() : 브라우저에 기본적으로 작동하는 동작을 막아줌 */
    event.preventDefault();
    const typedUsername = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, typedUsername); /* 입력된 이름 기억 */
    paintGreetings(typedUsername);
}

function paintGreetings(username) {
    /* innerText : 텍스트 추가! */
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}