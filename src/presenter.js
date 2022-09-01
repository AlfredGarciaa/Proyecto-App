import balance from "./balance_general.js";
import gasto from "./gasto_general.js";

const balances = document.querySelector("#balance-general");
const gastos = document.querySelector("#gasto-general");
const form = document.querySelector("#principal-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const balance_resultado = Number.parseInt(balances.value);
  const gasto_resultado = Number.parseInt(gastos.value);

  div.innerHTML = "<p>Balance: Bs. " + balance(balance_resultado) + 
                  "<p>Gastos: Bs. " + gasto(gasto_resultado) +
                  "</p>";
});
