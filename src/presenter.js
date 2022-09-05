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
const form2 = document.querySelector("#ingreso-form");
const div2 = document.querySelector("#ingreso-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const gasto_monto = Number.parseInt(gasto_number.value);
  const gasto_descripcion = gasto_string.value;

  div.innerHTML = "<p>Monto: Bs." + monto_añadir(gasto_monto) + "<p>" +
                  "<p>Descripcion: " + descricpcion_añadir(gasto_descripcion) + "<p>" +
                  "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingreso_monto = Number.parseInt(ingreso_number.value);
  const ingreso_descripcion = ingreso_string.value;

  div2.innerHTML = "<p>Monto: Bs." + monto_añadir(ingreso_monto) + "<p>" +
                  "<p>Descripcion: " + descricpcion_añadir(ingreso_descripcion) + "<p>" +
                  "</p>";
});