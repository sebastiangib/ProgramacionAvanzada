let salario = 3500000;
let comision = 1500000;  
let deduccionesImpuestos = 0.05;  
let licenciasVendidas = 35;  

// DECLARAR FUNCION
function calcularSalario(salario,comision,deduccionesImpuestos,licenciasVendidas){
let subTotal = salario + (comision * licenciasVendidas); 
return subTotal * (1 - deduccionesImpuestos);
}

// LLAMAR LA FUNCION
console.log("El salario mensual del vendedor es $: " + calcularSalario(salario,comision,deduccionesImpuestos,licenciasVendidas));

console.log("\nCon la funcion Flecha ==>")
// FUNCION FLECHA ==>

// DECLARAR LA FUNCION
let calcularSalarioFlecha = (salarioFlecha,comisionFlecha,deduccionesImpuestosFlecha,licenciasVendidasFlecha) => {
    let subTotal = salarioFlecha + (comisionFlecha * licenciasVendidasFlecha); 
    return subTotal * (1 - deduccionesImpuestosFlecha);
}

let salarioMensual = calcularSalario(3500000,1500000,0.05,97)
console.log("El salario mensual del vendedor con la funcion flecha es $ ==> " + salarioMensual)
