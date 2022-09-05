import balance_mostrar from "./balances.js";
import gasto_mostrar from "./gastos.js";
import ingreso_mostrar from "./ingresos.js";
import monto_añadir from "./montos.js";
import descricpcion_añadir from "./descripciones.js";

const balances = document.querySelector("#balance-general");
const gastos = document.querySelector("#gasto-general");
const ingresos = document.querySelector("#ingreso-general");

const gasto_number = document.querySelector("#gasto-monto");
const gasto_string = document.querySelector("#gasto-descripcion");
const ingreso_number = document.querySelector("#ingreso-monto");
const ingreso_string = document.querySelector("#ingreso-descripcion");

const form = document.querySelector("#gasto-form");
const div = document.querySelector("#gasto-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const gasto_monto = Number.parseInt(gasto_number.value);
  const gasto_descripcion = gasto_string.value;

  div.innerHTML = "<p>Monto: Bs." + monto_añadir(gasto_monto) + "<p>" +
                  "<p>Descripcion: " + descricpcion_añadir(gasto_descripcion) + "<p>" +
                  "</p>";
});