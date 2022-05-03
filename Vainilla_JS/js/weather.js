// API 사용: API 란, 다른 서버와 이야기할 수 있는 방법
const API_KEY = "##########";

function onGeoOK(position) { // 위치를 정상적으로 받았을 때
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    // console.log(position); 로 위도와 경도 정보를 확인할 수 있음
    // 주소 끝에 &units=metric 을 추가하면 단위를 섭씨 온도로 바꿔줌
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(r => r.json()).then(data => { // url 에서 json 값을 가져옴 => 데이터 사용
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; // 날씨, 온도
        city.innerText = data.name; // 지역
    });

}

function onGeoError() { // 위치를 받지 못했을 때
    alert("Can't find tou. No weather for you.");
}

// 브라우저에서 위치 좌표를 준다.
// 인자는 2개: 실행될 함수, 에러가 났을 때 실행될 함수
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);


