import "../styles/style.css";

const screen = document.getElementById("screen");
let currentValue = "";
let previousValue = "";
let operator = "";

function updateScreen(value) {
  screen.value = value;
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
  const prev = parseFloat(previousValue.replace(",", "."));
  const curr = parseFloat(currentValue.replace(",", "."));
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
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

const calculator = document.querySelector(".calculator");
const themeButtons = document.querySelectorAll(".theme .round");

themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;

    calculator.classList.remove("dark", "light", "greenTheme");
    calculator.classList.add(theme);

    themeButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.querySelector(".round.dark").click();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;

      if (!isNaN(action) || action === ",") {
        appendNumber(action);
      } else if (["+", "-", "*", "/", "+/-", "%"].includes(action)) {
        if (action === "+/-") toggleSign();
        else if (action === "%") percent();
        else chooseOperator(action);
      } else if (action === "clear") {
        clearAll();
      } else if (action === "=") {
        compute();
      }
    });
  });
});
