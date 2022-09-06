function balance_mostrar(gastos, ingresos) {
  let saldo=1000, calculador;

  if((gastos > 0) && (ingresos > 0)){
    calculador = (saldo + ingresos) - gastos;
  }
  else{
    calculador = 1000;
  }

  return calculador;
}

export default balance_mostrar;
