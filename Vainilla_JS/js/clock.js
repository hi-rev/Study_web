const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // padStart()를 사용하여
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock() // setInterval 함수가 1초 뒤에 실행되기 때문에 맨 처음에 즉시실행
setInterval(getClock, 1000);

// 5초 후에 sayHello 함수 실행
// setTimeout(sayHello, 5000);

// 5초마다 sayHello 함수를 실행
// setInterval(sayHello, 5000);