// Declarar la funcion principal
function crearPadawan(nombre,planeta,edad,estatura,clasificarPadawan){
    setTimeout(function(){
        // Logica funcion principal
        let padawan = {
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadEstudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarPadawan(padawan)
    },2000)
}

// Llamar la funcion principal
crearPadawan("Sebas","Dagobah",10,30,function(padawan){
    if(padawan.edadEstudiante < 15){
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} años, la actividad asignada para ti es el manejo de la fuerza`)
    }else{
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} años, la actividad asignada para ti es el manejo del sable de luz`)
    }
})

// FUNCION FLECHA ==>
const crearPadawanFlecha = (nombre, planeta, edad, estatura, clasificarPadawanFlecha) => {
    setTimeout(() => {
      // Lógica de la función principal
      let padawan = {
        nombreEstudiante: nombre,
        planetaEstudiante: planeta,
        edadEstudiante: edad,
        estaturaEstudiante: estatura,
      };
      clasificarPadawanFlecha(padawan);
    }, 2000);
  };
  
  crearPadawanFlecha("Yari", "Tierra", 20, 40, (padawan) => {
    if (padawan.edadEstudiante < 15) {
      console.log(
        `${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} años, la actividad asignada para ti es el manejo de la fuerza`
      );
    } else {
      console.log(
        `${padawan.nombreEstudiante} tienes ${padawan.edadEstudiante} años, la actividad asignada para ti es el manejo del sable de luz`
      );
    }
  });
  