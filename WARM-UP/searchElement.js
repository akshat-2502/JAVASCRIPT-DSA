const searchElement = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      console.log(i);
      return;
    }
  }
  console.log("-1");
  return;
};

let arr = [4, 10, 0, 3, 22, 34, 1, 9, 11];

searchElement(arr, 34);
