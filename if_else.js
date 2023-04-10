// console.clear()
// if(7>5){
//     console.log(true)
// }

// if(10<11){
//     console.log(false)
// }

// if(5>7){
//     console.log(true)

// }else{
//     console.log(false)
// }

// if(5>7){
//     console.log('5>7')
// } else if(7>8){
//     console.log('7>8')
// }else{
//     console.log('Nothing')
// }

// let enteredMarks = 50;

// if (enteredMarks > 80 && enteredMarks <= 100) {
//   console.log("Grade A");
// } else if (enteredMarks >= 60 && enteredMarks < 80) {
//   console.log("Grade B");
// } else if (enteredMarks >= 50 && enteredMarks < 60) {
//   console.log("Grade C");
// } else if (enteredMarks >= 45 && enteredMarks < 50) {
//   console.log("Grade D");
// } else if (enteredMarks >= 25 && enteredMarks < 45) {
//   console.log("Grade E");
// } else if (enteredMarks >= 0 && enteredMarks < 25) {
//   console.log("Grade F");
// } else {
//   console.log("Invalid input! Please enter a number between 0 and 100.");
// }

const numberOfItemPurchased = 25; // change the value of numberOfItemPurchased as needed

const unitCost = 100;
const totalCost = numberOfItemPurchased * unitCost;

if (totalCost > 1000) {
  const discount = 0.1 * totalCost;
  const discountedCost = totalCost - discount;
  console.log(`Total cost: $${discountedCost}`);
} else {
  console.log(`Total cost: $${totalCost}`);
}


