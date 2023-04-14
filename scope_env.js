//scope defines the part of a program where a variable for a gfn is visible/accessible.
//the variables defined outside all th fns and blocks are available throughout the code. 
//These are called Global Variables.
//  var num1 = 10; //num1 is a Global var.
//  function sum(num2){
//     var total = num1+num2;
//     console.log(total);
//  }
//  console.log(num1)


 //variables created/defined inside the fns or  blocks are local variables and are only available in that function or block of code.  
 //These varaiables are called  Local Variables.

 console.clear();

 var num1 = 10;

 function sum(num2){
    var total = 0;
    console.log(total);
    total = num1 + num2;
    console.log(total);
 }

 sum(20)
 sum(50)



