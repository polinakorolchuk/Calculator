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
