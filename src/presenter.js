import balance from "./balance_general.js";
import gasto from "./gasto_general.js";
import ingreso from "./ingreso_general.js";
import añadir_monto from "./gasto_monto.js";
import añadir_descripcion from "./gasto_descripcion.js";

const balances = document.querySelector("#balance-general");
const gastos = document.querySelector("#gasto-general");
const ingresos = document.querySelector("#ingreso-general");
const gastos_number = document.querySelector("#gasto-monto");
const gastos_string = document.querySelector("#gasto-descripcion");
const ingresos_number = document.querySelector("#ingreso-monto");
const ingresos_string = document.querySelector("#ingreso-descripcion");

const form = document.querySelector("#principal-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const balance_resultado = Number.parseInt(balances.value);
  const gasto_resultado = Number.parseInt(gastos.value);
  const ingreso_resultado = Number.parseInt(ingresos.value);

  const gasto_monto = Number.parseInt(gastos_number.value);
  const gasto_text = gastos_string.value;

  const ingreso_monto = Number.parseInt(ingresos_number.value);
  const ingreso_text = ingresos_string.value;

  div.innerHTML = "<p>Balance: Bs. " + balance(balance_resultado) + "<p>" +
                  "<p>Gastos: Bs. " + gasto(gasto_resultado) + "<p>" +
                  "<p>Ingresos: Bs. " + ingreso(ingreso_resultado) + "<p>" +

                  "<p>Monto: Bs." + añadir_monto(gasto_monto) + "<p>" +
                  "<p>Descripcion: " + añadir_descripcion(gasto_text) + "<p>" +

                  "<p>Monto: Bs." + añadir_monto(ingreso_monto) + "<p>" +
                  "<p>Descripcion: " + añadir_descripcion(ingreso_text) + "<p>" +

                  "</p>";
});
