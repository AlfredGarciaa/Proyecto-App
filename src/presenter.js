import balance from "./balance_general.js";

const balances = document.querySelector("#balance-general");
const form = document.querySelector("#principal-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const balance_resultado = Number.parseInt(balances.value);

  div.innerHTML = "<p>Balance: Bs. " + balance(balance_resultado) + "</p>";
});
