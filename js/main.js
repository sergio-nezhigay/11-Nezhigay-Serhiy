const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(inputArray, index) {
  return inputArray.splice(index - 1, 1);
}
