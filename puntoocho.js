// SOLUCION DEL PUNTO NUMERO 8 - TALLER
let planeta1 = {
    nombre:"Tierra",
    latitud:80.5,
    longitud:109.10,
    nivelOxigeno:0.21,
    volumenAgua:0.75
}

let planeta2 = {
    nombre:"Saturno",
    latitud:50.5,
    longitud:222.50,
    nivelOxigeno:0.34,
    volumenAgua:0.90
}

let planeta3 = {
    nombre:"Jupiter",
    latitud:73.1,
    longitud:394.6,
    nivelOxigeno:0.15,
    volumenAgua:0.34
}

let planeta4 = {
    nombre:"Venus",
    latitud:61.5,
    longitud:776.4,
    nivelOxigeno:0.47,
    volumenAgua:0.10
}

let planeta5 = {
    nombre:"Urano",
    latitud:86.2,
    longitud:133.3,
    nivelOxigeno:0.5,
    volumenAgua:0.13
}

let planeta6 = {
    nombre:"Marte",
    latitud:162.9,
    longitud:412.8,
    nivelOxigeno:0.20,
    volumenAgua:0.30
}

let planeta7 = {
    nombre:"Neptuno",
    latitud:387.6,
    longitud:127.5,
    nivelOxigeno:0.25,
    volumenAgua:0.15
}

let planeta8 = {
    nombre:"Mercurio",
    latitud:142.3,
    longitud:532.4,
    nivelOxigeno:0.4,
    volumenAgua:0.14
}

let planeta9 = {
    nombre:"Alderaan",
    latitud:543.2,
    longitud:124.4,
    nivelOxigeno:0.7,
    volumenAgua:0.34
}

let planeta10 = {
    nombre:"Hoth",
    latitud:214.1,
    longitud:544.6,
    nivelOxigeno:0.12,
    volumenAgua:0.43
}

let planeta11 = {
    nombre:"Jakku",
    latitud:412.2,
    longitud:144.1,
    nivelOxigeno:0.20,
    volumenAgua:0.10
}

let planeta12 = {
    nombre:"Dagobah",
    latitud:214.1,
    longitud:345.2,
    nivelOxigeno:-0.24,
    volumenAgua:null
}

let planeta13 = {
    nombre:"Yavin 4",
    latitud:111.1,
    longitud:114.2,
    nivelOxigeno:-0.54,
    volumenAgua:0.21
}

let planeta14 = {
    nombre:"Death Star",
    latitud:666.1,
    longitud:323.2,
    nivelOxigeno:0.21,
    volumenAgua:0
}

let planeta15 = {
    nombre:"Starkiller Base",
    latitud:432.1,
    longitud:141.4,
    nivelOxigeno:0.41,
    volumenAgua:0.22
}

// PREPARANDO LAS ENTRADAS
// let planetas = Array(planeta1,planeta2)

// function analizarPlanetas(planetas){
//     // RECORRER UN ARREGLO
//     let mapa = planetas.map(function(planeta){ // SINTAXIS - MAP
//         return(planeta.volumenAgua)
//     })
//     return mapa
// }

let planetas = Array(planeta1,planeta2,planeta3,planeta4,planeta5,planeta6,planeta7,planeta8,planeta9,planeta10,planeta11,planeta12,planeta13,planeta14,planeta15)

function analizarPlanetas(planetas) {
    let sumaVolumenAgua = 0
    let sumaNivelOxigeno = 0
    let planetasOxigenoNegativo = []
    let planetasSinAgua = [];

    planetas.forEach(function (planeta) {
        sumaVolumenAgua += planeta.volumenAgua
        sumaNivelOxigeno += planeta.nivelOxigeno * 100
        if(planeta.nivelOxigeno<0){
            planetasOxigenoNegativo.push(planeta)
        }
        if (planeta.volumenAgua === 0 || planeta.volumenAgua === null) {
            planetasSinAgua.push(planeta);
        }
    });

    let resultados = {
        sumaVolumenAgua: parseFloat(sumaVolumenAgua).toFixed(1),
        sumaNivelOxigeno: parseFloat(sumaNivelOxigeno),
        planetasOxigenoNegativo: planetasOxigenoNegativo,
        planetasSinAgua: planetasSinAgua
    };

    return resultados;
}

let resultados = analizarPlanetas(planetas);
console.log("La cantidad total de agua de todos los planetas es de " + resultados.sumaVolumenAgua + " litros")
console.log("La cantidad total de aire de todos los planetas es de " + resultados.sumaNivelOxigeno)
if (resultados.planetasOxigenoNegativo.length > 0) {
    console.log("\nPlanetas con nivel de oxígeno negativo:");
    resultados.planetasOxigenoNegativo.forEach(function (planeta) {
        console.log(planeta);
    });
} else {
    console.log("\nNo hay planetas con nivel de oxígeno negativo");
}

if (resultados.planetasSinAgua.length > 0) {
    console.log("\nPlanetas sin agua:");
    resultados.planetasSinAgua.forEach(function (planeta) {
        console.log(planeta);
    });
} else {
    console.log("\nTodos los planetas tienen agua.");
}

console.log("\nCon la funcion Flecha ==>")
// FUNCION FLECHA ==>
let analizarPlanetasFlecha = (planetas) => {
    let sumaVolumenAgua = 0;
    let sumaNivelOxigeno = 0;
    let planetasOxigenoNegativo = [];
    let planetasSinAgua = [];
  
    planetas.forEach((planeta) => {
      sumaVolumenAgua += planeta.volumenAgua;
      sumaNivelOxigeno += planeta.nivelOxigeno * 100;
      if (planeta.nivelOxigeno < 0) {
        planetasOxigenoNegativo.push(planeta);
      }
      if (planeta.volumenAgua === 0 || planeta.volumenAgua === null) {
        planetasSinAgua.push(planeta);
      }
    });
  
    let resultados = {
      sumaVolumenAgua: parseFloat(sumaVolumenAgua).toFixed(1),
      sumaNivelOxigeno: parseFloat(sumaNivelOxigeno),
      planetasOxigenoNegativo: planetasOxigenoNegativo,
      planetasSinAgua: planetasSinAgua,
    };
  
    return resultados;
  };
  
  let planetasFlecha = [planeta1, planeta2, planeta3, planeta4, planeta5, planeta6, planeta7, planeta8, planeta9, planeta10, planeta11, planeta12, planeta13, planeta14, planeta15];
  
  let resultadosFlecha = analizarPlanetasFlecha(planetas);
  console.log("La cantidad total de agua de todos los planetas es de " + resultados.sumaVolumenAgua + " litros");
  console.log("La cantidad total de aire de todos los planetas es de " + resultados.sumaNivelOxigeno);
  
  if (resultados.planetasOxigenoNegativo.length > 0) {
    console.log("\nPlanetas con nivel de oxígeno negativo:");
    resultados.planetasOxigenoNegativo.forEach((planeta) => {
      console.log(planeta);
    });
  } else {
    console.log("\nNo hay planetas con nivel de oxígeno negativo");
  }
  
  if (resultados.planetasSinAgua.length > 0) {
    console.log("\nPlanetas sin agua:");
    resultados.planetasSinAgua.forEach((planeta) => {
      console.log(planeta);
    });
  } else {
    console.log("\nTodos los planetas tienen agua.");
  }
  