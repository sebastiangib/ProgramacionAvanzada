// Entradas del problema
let coordenadasXPLanetaUno = 10
let coordenadasYPLanetaUno = -50

let coordenadasXPLanetaDos = 80
let coordenadasYPLanetaDos = 0

// Proceso del Problema

let distanciaCalculada = Math.sqrt(Math.pow(coordenadasXPLanetaDos-coordenadasXPLanetaUno,2)+Math.pow(coordenadasYPLanetaDos-coordenadasYPLanetaUno,2))

console.log("La distancia calculada entre planetas es: " + distanciaCalculada)
