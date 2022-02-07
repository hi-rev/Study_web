// const title = document.getElementById("title");

/* innerText는 요소와 그 자손의 렌더링 된 텍스트 콘텐츠를 나타낸다. */
// console.log(title.innerText);

// const hellos = document.getElementsByClassName("hello");

const h1 = document.querySelector("div.hello:first-child h1");
console.dir(h1);

function handleTitleClick() {
    /* toggle: 아래 주석된 코드와 같은 기능
        토큰이 존재한다면 토큰을 제거하고, 존재하지 않는다면 토큰을 추가한다. */
    h1.classList.toggle("active");

    /* classList가 active를 포함하고 있는지 확인 */
    /* 기존에 있던 class를 추가/삭제 하는 방법: class를 교체하지 않음 */
    // const activeClass = "active"
    // if (h1.classList.contains(activeClass)) {
    //     h1.classList.remove(activeClass);
    // } else {
    //     h1.classList.add(activeClass);
    // }
}
h1.addEventListener("click", handleTitleClick);

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if (currentColor === "red") {
//         newColor = "blue";
//     } else {
//         newColor = "red";
//     }
//     h1.style.color = newColor;
// }
// h1.addEventListener("click", handleTitleClick);


function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}
function handleWindowResize() {
    // document로 불러올 수 있는 것은 body, head, title 정도이다.
    // 이 이외의 것들을 불러오려면 querySelector를 사용해야한다.
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS no Wifi");
}
function handleWindowOnline() {
    alert("I have Wifi");
}
/* 특정 이벤트가 발생하면 -> 함수를 실행 */
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

/* 특정 요소에서 발생하는 이벤트가 아닌, window에서 발생하는 모든 이벤트를 제어 */
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);






