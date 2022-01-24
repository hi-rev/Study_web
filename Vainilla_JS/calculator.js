// simple calculator
const calculator = {
    plus : function (a, b) {
        console.log(a + b);
    },
    minus : function (a, b) {
        console.log(a - b);
    },
    division : function (a, b) {
        console.log(a / b);
    },
    power : function (a, b) {
        console.log(a ** b);
    }
}

calculator.plus(10, 5);
calculator.minus(10, 5);
calculator.division(10, 5);
calculator.power(2, 5);