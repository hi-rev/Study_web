// let: 블록 스코프의 범위를 가지는 지역 변수 선언
// 임의의 값으로 초기화 가능
let a = 5;
let b = 2;
let myName = "Rev";

// const: 블록 범위의 상수 선언
// 블록 범위란 { } 내를 의미한다.
// 값이 바뀔 수 없음
// 보통 const를 쓰고, 가끔 let을 사용
// const a = 5;
// const b = 2;
// const myName = "Rev";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "nagyeong";
console.log("Hello " + myName);

const amIFat = null; // null은 자연적으로 발생하지 않음, 값이 없음을 알려줄 때 사용
let something;
console.log(something, amIFat)

// array
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

// Add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// Objects
const player = {
    name : "Rev",
    age : "24",
    height : "158",
    weight : "42",
    fat : true
};

console.log(player);
console.log(player.height);
console.log(player["fat"]);
player.fat = false;
console.log(player.fat);

// 함수란 계속해서 사용할 수 있는 코드 조각
function sayHello(name, age) {
    console.log("Hello! My name is " + name +
        "age is " + age);
}

sayHello("Rev", 24);
sayHello("Nagyeong", 23);
sayHello("nana", 22);

function plus(first, second) {
    console.log(first + second);
}

plus(8, 7);

const player2 = {
    name : "Rev",
    sayHello2 : function (personName) {
        console.log("hello! " + personName);
    }
};

player2.sayHello2("Jun");
player2.sayHello2("Kyeong");

const example = [1, 2, "3", false, null, "hi", player.name];
example[2] = 3;
example.push("!!");
console.log(example);

console.log(console); // console 객체에 대한 데이터들을 볼 수 있음

const calculator = {
    plus : function (a, b) {
        return(a + b); // return 하는 순간 함수는 종료된다.
    },
    minus : function (a, b) {
        return(a - b);
    },
    division : function (a, b) {
        return(a / b);
    },
    power : function (a, b) {
        return(a ** b);
    }
}

const plusResult = calculator.plus(10, 5);
const minusResult = calculator.minus(plusResult, 5);
const divResult = calculator.division(10, 5);
const powerResult = calculator.power(divResult, 5);

// 타입 변환
const myAge = parseInt(prompt("How old Are you?"));
console.log(myAge);

console.log(isNaN(myAge)); // NaN(Not a Number) : 숫자이면 false, 아니면 true

if (isNaN(myAge) || myAge < 0) {
    console.log("Please write a real positive number");
} else if (myAge < 18) {
    console.log("You are too young");
} else if (myAge >= 18 && myAge <= 50) {
    console.log("You can drink");
} else if (myAge > 50 && myAge <= 80) {
    console.log("You should exercise");
} else if (myAge === 100) {
    console.log("wow you are wise");
} else if (myAge > 80) {
    console.log("You can do whatever you want.");
}
