let numbers = [];
function addNumber() {
  const inputField = document.getElementById("numberInput");
  const number = parseInt(inputField.value);

  if (!isNaN(number)) {
    numbers.push(number);
    inputField.value = "";
  } else {
    alert("Please enter a valid number.");
  }
  document.getElementById("results").innerHTML = numbers;
}

function sortNumbers() {
  numbers.sort(function (a, b) {
    return a - b;
  });

  const resultElement = document.getElementById("results");
  resultElement.textContent = "Sorted Numbers: " + numbers.join(", ");
}

function clearResults() {
  numbers = [];
  const resultElement = document.getElementById("results");
  resultElement.textContent = "";
}
