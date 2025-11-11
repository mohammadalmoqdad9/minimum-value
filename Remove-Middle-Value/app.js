function removeMiddleValue(arr) {
  const middleIndex = Math.floor(arr.length / 2);
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== middleIndex) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Testing
console.log(removeMiddleValue([1, 2, 3, 4, 5]));     // [1, 2, 4, 5]
console.log(removeMiddleValue([27, 8, 15, 73, 27])); // [27, 8, 73, 27]
console.log(removeMiddleValue([7, 9, 13, 25, 5, 17])); // [7, 9, 13, 5, 17]