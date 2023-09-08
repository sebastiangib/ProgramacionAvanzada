// SOLUCION DEL PUNTO NUMERO 2 - TALLER
function obtenerNombre(codigo){
   codigo.split(":")
   return codigo.split(":")[1]
}

console.log(obtenerNombre("0627:Sebas"))

console.log("\nCon la funcion Flecha ==>")
// FUNCION FLECHA ==>
let obtenerNombreFlecha = (codigo) => codigo.split(":")[1]
console.log(obtenerNombreFlecha("0627:Sebas"))
