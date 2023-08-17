function sumArray(arr) {
  let result = 0;
  for (let i of arr) {
    for (let j of arr[i]) {
      result += arr[i][j];
    }
  }
  return result;
}

let u = [
  [1, -1, 1],
  [1, 1],
];
console.log(sumArray(u));
