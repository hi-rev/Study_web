const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 투두 리스트 배열 생성

function saveToDos() { // 투두의 내용을 localStorage 에 넣음(영구저장)

    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) { // 투두 리스트 삭제할 때
    const li = e.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function handleToDoSubmit(e) { // value 제출할 때 동작
    e.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = { // text, id를 함께 저장(삭제기능구현을 위함)
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

function paintToDo(newTodo) { // 투두 리스트 그리기
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); // 배열 형태로 변환한 것
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // 각각의 배열에 대하여 인자의 함수를 실행시켜줌
    // => 기존 localStorage 에 저장되어 있던 것을 새로고침할 때 다시 그려준다.
}

