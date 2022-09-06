function ingreso_mostrar(total) {
    let acumulador=0;
    
    if(total > 0){
      acumulador = acumulador + total;
    }

    return acumulador;
  }
  
  export default ingreso_mostrar;