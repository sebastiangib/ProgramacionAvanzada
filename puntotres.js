let temperaturaMinima = 10
let temperaturaMaxima = 90

// DECLARAR LA FUNCION
function calcularTemperatura(temperaturaMinima, temperaturaMaxima){
    return temperaturaMinima + temperaturaMaxima / 2
}

// LLAMAR LA FUNCION 
console.log("La temperatura media de la luna es de: " + calcularTemperatura(temperaturaMinima,temperaturaMaxima) + " °C")

console.log("\nCon la funcion Flecha ==>")
// FUNCION FLECHA ===>

// DECLARAR LA FUNCION
let calcularTemperaturaFlecha = (temperaturaMinimaFlecha, temperaturaMaximaFlecha) => temperaturaMinimaFlecha + temperaturaMaximaFlecha / 2

// LLAMAR LA FUNCION 
let temperaturaMedia = calcularTemperaturaFlecha(423,252)
console.log("La temperatura media de la luna con la funcion flecha es de =>: " + temperaturaMedia + " °C")



 