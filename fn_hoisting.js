//Here, we can use the fns before declaring them.
//Hoisting has the advantage of allowing you to use 
//a function before declaring it in your code. 
//Without function hoisting, we would have to 
//first write down the function display and 
//only then can we call it.
console.clear()

// sum(5,10);
// sum(50,50);

var total = 10;
var sum = function(num1,num2){
    var total = undefined
    total = num1 + num2;
    console.log(total)
}