console.clear();

var num1 = 10;
var num2 = 10.9;

console.log(typeof(num1))
console.log(typeof(num2))

//AAddition
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);

//Subtraction
var diff = num3 - num1;
console.log(diff);

//Multiplication
var mul = num3 * num1;
console.log(mul);

//Division
var div = num3/num1;
console.log(div);

var mulByString = num3 * 'A';
console.log(mulByString);
console.log(typeof(mulByString));

var divByZero = num3 / 0;
console.log(divByero);
console.log(typeof(divByZero));