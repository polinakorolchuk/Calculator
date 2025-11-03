import "../styles/style.css";

const screen = document.getElementById("screen");
let currentValue = "";
let previousValue = "";
let operator = "";

function updateScreen(value) {
  screen.textContent = value;
}

function clearAll() {
  currentValue = "";
  previousValue = "";
  operator = "";
  updateScreen("0");
}

function appendNumber(number) {
  if (number === "," && currentValue.includes(",")) return;
  currentValue += number;
  updateScreen(currentValue);
}

function chooseOperator(op) {
  if (currentValue === "") return;
  if (previousValue !== "") {
    compute();
  }
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function compute() {
  let result;
  const prev = parseFloat(previousValue.replace(",", "."));
  const curr = parseFloat(currentValue.replace(",", "."));
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }

  currentValue = result.toString().replace(".", ",");
  operator = "";
  previousValue = "";
  updateScreen(currentValue);
}

function toggleSign() {
  if (!currentValue) return;
  if (currentValue.startsWith("-")) {
    currentValue = currentValue.slice(1);
  } else {
    currentValue = "-" + currentValue;
  }
  updateScreen(currentValue);
}

function percent() {
  if (!currentValue) return;
  currentValue = (parseFloat(currentValue.replace(",", ".")) / 100)
    .toString()
    .replace(".", ",");
  updateScreen(currentValue);
}

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;

    if (button.classList.contains("number")) {
      appendNumber(action);
    } else if (button.classList.contains("operator")) {
      if (action === "+/-") {
        toggleSign();
      } else if (action === "%") {
        percent();
      } else {
        chooseOperator(action);
      }
    } else if (button.classList.contains("clear")) {
      clearAll();
    } else if (button.classList.contains("equals")) {
      compute();
    }
  });
});
