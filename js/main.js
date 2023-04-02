const resultEl = document.querySelector(".result");
let task = "<h1> HomeWork #11 </h1>\n";

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

function removeElement(inputArray, index) {
  inputArray.splice(index - 1, 1);
}

task += array;

resultEl.insertAdjacentHTML("beforeend", task);
