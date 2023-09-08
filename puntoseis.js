function analizarEdades(min, max, iteraciones) {
  let numeroMasAlto = -Infinity;
  let edadContador = {};

  for (let i = 0; i < iteraciones; i++) {
    let edadAleatoria = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(edadAleatoria);

    if (edadAleatoria > numeroMasAlto) {
      numeroMasAlto = edadAleatoria;
    }

    if (edadContador[edadAleatoria] === undefined) {
      edadContador[edadAleatoria] = 1;
    } else {
      edadContador[edadAleatoria]++;
    }
  }

  console.log("\nLa edad mayor es:", numeroMasAlto);
  console.log("\nEdades que se repiten:");
  for (let edad in edadContador) {
    if (edadContador[edad] > 1) {
      console.log( edad + " años: " + edadContador[edad] + " repeticiones");
    }
  }
}

let min = 1;
let max = 100;
let iteraciones = 20;
analizarEdades(min, max, iteraciones);

console.log("\nCon la funcion Flecha ==>")
// Funcion Flecha ==>
let analizarEdadesFlecha = (minFlecha, maxFlecha, iteracionesFlecha) => {
  let numeroMasAlto = -Infinity;
  let edadContador = {};

  for (let i = 0; i < iteracionesFlecha; i++) {
    let edadAleatoria = Math.floor(Math.random() * (maxFlecha - minFlecha + 1)) + minFlecha;
    console.log(edadAleatoria);

    if (edadAleatoria > numeroMasAlto) {
      numeroMasAlto = edadAleatoria;
    }

    if (edadContador[edadAleatoria] === undefined) {
      edadContador[edadAleatoria] = 1;
    } else {
      edadContador[edadAleatoria]++;
    }
  }

  console.log("\nLa edad mayor es:", numeroMasAlto);
  console.log("\nEdades que se repiten:");
  for (let edad in edadContador) {
    if (edadContador[edad] > 1) {
      console.log(edad + " años: " + edadContador[edad] + " repeticiones");
    }
  }
};

let minFlecha = 1;
let maxFlecha = 100;
let iteracionesFlecha = 20;
analizarEdadesFlecha(minFlecha, maxFlecha, iteracionesFlecha);

  
