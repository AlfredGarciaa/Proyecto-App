import balance_mostrar from "./balances.js";
import gasto_mostrar from "./gastos.js";
import ingreso_mostrar from "./ingresos.js";
import monto_añadir from "./montos.js";
import descricpcion_añadir from "./descripciones.js";

const balances = document.querySelector("#balance-general");

const gasto_number = document.querySelector("#gasto-monto");
const gasto_string = document.querySelector("#gasto-descripcion");
const ingreso_number = document.querySelector("#ingreso-monto");
const ingreso_string = document.querySelector("#ingreso-descripcion");

const form = document.querySelector("#resumen-form");
const div = document.querySelector("#resumen-div");
const form2 = document.querySelector("#gasto-form");
const div2 = document.querySelector("#gasto-div");
const form3 = document.querySelector("#ingreso-form");
const div3 = document.querySelector("#ingreso-div");
const form4 = document.querySelector("#historial-form");
const div4 = document.querySelector("#historial-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const balance_montos = Number.parseInt(balances.value);
  const gastos_montos = Number.parseInt(gasto_number.value);
  const ingresos_montos = Number.parseInt(ingreso_number.value);

  div.innerHTML = "<p>Balance: Bs." + balance_mostrar(balance_montos) + "<p>" +
                  "<p>Gastos: Bs." + gasto_mostrar(gastos_montos) + "<p>" +
                  "<p>Ingresos: Bs." + ingreso_mostrar(ingresos_montos) + "<p>" +
                  "</p>";
});

form2.addEventListener("submit", (event) => {
  event.preventDefault();

  const gasto_monto = Number.parseInt(gasto_number.value);
  const gasto_descripcion = gasto_string.value;

  div2.innerHTML = "<p>Monto: Bs." + monto_añadir(gasto_monto) + "<p>" +
                  "<p>Descripcion: " + descricpcion_añadir(gasto_descripcion) + "<p>" +
                  "</p>";
});

form3.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingreso_monto = Number.parseInt(ingreso_number.value);
  const ingreso_descripcion = ingreso_string.value;

  div3.innerHTML = "<p>Monto: Bs." + monto_añadir(ingreso_monto) + "<p>" +
                  "<p>Descripcion: " + descricpcion_añadir(ingreso_descripcion) + "<p>" +
                  "</p>";
});

form4.addEventListener("submit", (event) => {
  event.preventDefault();

  const gasto_monto = Number.parseInt(gasto_number.value);
  const gasto_descripcion = gasto_string.value;
  const ingreso_monto = Number.parseInt(ingreso_number.value);
  const ingreso_descripcion = ingreso_string.value;

  div4.innerHTML = "<p>Tipo: Gasto."  +
                   "<p>Monto: Bs." + monto_añadir(gasto_monto) + "<p>" +
                   "<p>Descripcion: " + descricpcion_añadir(gasto_descripcion) + "<p>" +
                  
                   "<p>Tipo: Ingreso." +
                   "<p>Monto: Bs." + monto_añadir(ingreso_monto) + "<p>" +
                   "<p>Descripcion: " + descricpcion_añadir(ingreso_descripcion) + "<p>" +
                   "</p>";
});