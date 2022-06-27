const button = document.querySelector(".show-results");
const results = document.querySelector(".results");
const expensesList = document.querySelector(".expenses");

const expenses = [
  9.99, 25.8, 144.39, 12.98, 4.99, 38.75, 14.5, 99.99, 75.4, 4.75, 62.88,
];

// Display your expenses in a list
for (let exp of expenses) {
  let li = document.createElement("li");
  li.innerText = `$ ${exp}`;
  expensesList.append(li);
}

const showMinMax = function (expenses) {
  // create a variable called min and assign it to the smallest number in the array
  const min = Math.min(...expenses);
  // find the largest number in the array
  const max = Math.max(...expenses);

  // create two new list items for the smallest and largest array elements and set their inner text
  const smallestItem = document.createElement("li");
  smallestItem.innerText = `Min: $ ${min}`;

  const largestItem = document.createElement("li");
  largestItem.innerText = `Max: $ ${max}`;

  // append the new list items to the results unordered list
  results.append(smallestItem);
  results.append(largestItem);

  // remove the "hide" class from the results list
  results.classList.remove("hide");
};

// create an event listener for clicking the button
button.addEventListener("click", function () {
  showMinMax(expenses);
  // disable the button
  button.disabled = true;
});
