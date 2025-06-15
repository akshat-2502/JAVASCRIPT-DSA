// const searchElement = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       console.log(i);
//       return;
//     }
//   }
//   console.log("-1");
//   return;
// };

// let arr = [4, 10, 0, 3, 22, 34, 1, 9, 11];

// searchElement(arr, 34);

// function negativeNumber(arr) {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// let arr1 = [1, , 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let numbers = negativeNumber(arr1);
// console.log(numbers);

function largestNumber(arr) {
  let largest = arr[0]; //i should be arr[0] or ot can be -Infinity for finding largest and Infinity to find greatest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10, 15, 14, 20, 99, 25, 75, 999];

let number1 = largestNumber(arr2);
console.log(number1);
