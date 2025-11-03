import * as calc from "./calculator.js";
import { state } from "./state.js";

const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".button");

const symbolMap = {
  "÷": "/",
  "×": "*",
  "−": "-",
  "+": "+",
};

export function updateScreen() {
  screen.value = state.currentValue || "0";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let action = btn.dataset.action;

    if (symbolMap[action]) {
      action = symbolMap[action];
    }

    if (!isNaN(action) || action === ",") {
      calc.appendNumber(action);
    } else if (["+", "-", "*", "/", "+/-", "%"].includes(action)) {
      if (action === "+/-") calc.toggleSign();
      else if (action === "%") calc.percent();
      else calc.chooseOperator(action);
    } else if (action === "clear") {
      calc.clearAll();
    } else if (action === "=") {
      calc.compute();
    }

    updateScreen();
  });
});
