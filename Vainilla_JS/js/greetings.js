const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

/* 반복되는 string 들은 대문자 변수로 저장해놓는것이 좋음! */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { /* 이름이 제출될 때 동작 */
    /* preventDefault() : 브라우저에 기본적으로 작동하는 동작을 막아줌 */
    event.preventDefault();
    const typedUsername = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME); /* loginForm 에 HIDDEN_CLASSNAME 이라는 class 추가  */
    localStorage.setItem(USERNAME_KEY, typedUsername); /* 입력된 이름 기억 */
    paintGreetings(typedUsername);
}

function paintGreetings(username) {
    /* innerText : 텍스트 추가! */
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) { /* 첫 화면에는 이름 제출이 시행 되지 않았을 것이므로 if 문이 시행되어 hidden class 는 사라지고 제출 시행 */
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}