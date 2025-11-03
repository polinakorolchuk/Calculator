import { state } from "./state.js";

export function appendNumber(number) {
  if (number === "," && state.currentValue.includes(",")) return;

  if (state.previousValue && state.currentValue === state.previousValue) {
    state.currentValue = "";
  }

  state.currentValue += number;
}

export function chooseOperator(op) {
  if (state.currentValue === "") return;

  if (state.previousValue !== "" && state.operator !== "") {
    compute();
  }

  state.operator = op;
  state.previousValue = state.currentValue;
}

export function compute() {
  const prev = parseFloat(state.previousValue.replace(",", "."));
  const curr = parseFloat(state.currentValue.replace(",", "."));
  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (state.operator) {
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

  state.currentValue = result.toString().replace(".", ",");
  state.operator = "";
  state.previousValue = "";
}

export function toggleSign() {
  if (!state.currentValue) return;
  state.currentValue = state.currentValue.startsWith("-")
    ? state.currentValue.slice(1)
    : "-" + state.currentValue;
}

export function percent() {
  if (!state.currentValue) return;
  state.currentValue = (parseFloat(state.currentValue.replace(",", ".")) / 100)
    .toString()
    .replace(".", ",");
}

export function clearAll() {
  state.currentValue = "";
  state.previousValue = "";
  state.operator = "";
}
