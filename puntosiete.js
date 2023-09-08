// DECLARAR FUNCION
function encontrarNumeroMasCercano(min, max) {
    let numeroMasCercano = Infinity;
  
    for (let i = 0; i < 50; i++) {
      let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  
      if (Math.abs(numeroAleatorio) < Math.abs(numeroMasCercano)) {
        numeroMasCercano = numeroAleatorio;
      }
    }
  
    const resultado = numeroMasCercano < 0 ? Math.abs(numeroMasCercano) : numeroMasCercano;
    return resultado;
  }
  
  let min = -25;
  let max = 25;
  
  // LLAMAR LA FUNCION
  let numeroCercanoACero = encontrarNumeroMasCercano(min, max);
  console.log("El número más cercano a cero es:", numeroCercanoACero);
  
  console.log("\nCon la funcion Flecha ==>")
  // FUNCION FLECHA ==>
  let encontrarNumeroMasCercanoFlecha = (minFlecha, maxFlecha) => {
    let numeroMasCercano = Infinity;
  
    for (let i = 0; i < 50; i++) {
      let numeroAleatorio = Math.floor(Math.random() * (maxFlecha - minFlecha + 1)) + minFlecha;
  
      if (Math.abs(numeroAleatorio) < Math.abs(numeroMasCercano)) {
        numeroMasCercano = numeroAleatorio;
      }
    }
  
    const resultado = numeroMasCercano < 0 ? Math.abs(numeroMasCercano) : numeroMasCercano;
    return resultado;
  };
  
  let minFlecha = -25;
  let maxFlecha = 25;
  
  let numeroCercanoACeroFlecha = encontrarNumeroMasCercano(minFlecha, maxFlecha);
  console.log("El número más cercano a cero es:", numeroCercanoACero, "con la funcion flecha");
  