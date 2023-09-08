let sables = [2, -4, 8, 5, -6];

// DECLARAR FUNCION
function filtrarSables(filtro) {
  return filtro.filter(function(sable) {
    return sable < 0;
  });
}

// LLAMAR LA FUNCION
let sablesDefectuosos = filtrarSables(sables);
let cantidadSablesDefectuosos = sablesDefectuosos.length;
console.log(`La cantidad de sables defectuosos con energía negativa fue de ${cantidadSablesDefectuosos} sables los cuales serían: ${sablesDefectuosos}`);

console.log("\nCon la funcion Flecha ==>")
// FUNCION FLECHA ==>
let sablesFlecha = [2, -4, 8, 5, -6];

let filtrarSablesFlecha = (arr) => arr.filter((sable) => sable < 0);

let sablesDefectuososFlecha = filtrarSablesFlecha(sablesFlecha);

let cantidadSablesDefectuososFlecha = sablesDefectuososFlecha.length;

console.log(`La cantidad de sables defectuosos con energía negativa fue de ${cantidadSablesDefectuososFlecha} sables los cuales serían: ${sablesDefectuososFlecha} con la funcion flecha`);

