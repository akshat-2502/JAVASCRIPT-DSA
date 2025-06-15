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

function negativeNumber(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      counter += 1;
    }
  }
  return counter;
}

let arr1 = [1, , 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbers = negativeNumber(arr1);
console.log(numbers);
