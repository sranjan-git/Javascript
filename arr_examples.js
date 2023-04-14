console.clear()

//Write a JavaScript program to create a new array by reversing the elements of givenarray.
// var num = [1,'a',2,'b',3,'c',6,'d',7,'e',8,'f']
// console.log(num)

// num.reverse()
// console.log(num)

function hasCommonElement(arr1, arr2) {
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      return true; // common element found
    } else if (arr1[i] < arr2[j]) {
      i++; // move to next element in arr1
    } else {
      j++; // move to next element in arr2
    }
  }

  return false; // no common element found
}

const array1 = [4,11,12,23,46,65,70,73,98];
const array2 = [7,13,25,46,58,70,84]

console.log(hasCommonElement(array1,array2));