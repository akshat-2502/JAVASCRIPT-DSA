// my solution

// function secondLargest(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   let small = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > small && arr[i] < largest) {
//       small = arr[i];
//     }
//   }
//   return small;
// }

// arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// let number = secondLargest(arr);
// console.log(number);

// akshay solution

function secondLargestNumber(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

let arr1 = [1, 4, 54, 65, 23, 45];

let number = secondLargestNumber(arr1);
console.log(number);
