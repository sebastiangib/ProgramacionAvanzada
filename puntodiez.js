function generarAlimento() {
    let alimentosPorTipo = {
      'vegetal': ['Zanahoria', 'Espinaca', 'manzana', 'Brócoli','Calabaza','Cilantro','Tomate','Lechuga','Jitomate','Pepino','Coliflor','Chile','Espárrago','Cebolla','Apio','Remolacha'],
      'animal': ['pollo', 'pescado', 'cerdo','Res','Caballo','Iguana',''],
      'insecto': ['hormigas', 'saltamontes', 'gusanos']
    };
    
    let tipos = Object.keys(alimentosPorTipo);
    let tipo = tipos[Math.floor(Math.random() * tipos.length)];
    
    let nombre = alimentosPorTipo[tipo][Math.floor(Math.random() * alimentosPorTipo[tipo].length)];
    
    let nivelEnergia = Math.floor(Math.random() * 401) + 100; 
    return { nombre, tipo, nivelEnergia };
  }
  
  let alimentos = Array.from({ length: 300 }, () => generarAlimento());
  
function filtrarAlimentos() {
    let alimentosFiltrados = alimentos.filter(alimento => {
      return alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200;
    });
    return alimentosFiltrados;
  }
  
  function calcularSumatoriaEnergia(alimentosFiltrados) {
    let sumatoria = 0;
    alimentosFiltrados.forEach(alimento => {
      sumatoria += alimento.nivelEnergia;
    });
    return sumatoria;
  }
  
  // Función principal asincrónica
  async function obtenerAlimentosVegetales(callback) {
    // Simula una demora de 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));
  
    let alimentosFiltrados = filtrarAlimentos();
    let sumatoriaEnergia = calcularSumatoriaEnergia(alimentosFiltrados);
  
    // Llama a la función de callback con la sumatoria de niveles de energía
    callback(sumatoriaEnergia);
  }
  
  // Llama a la función principal y pasa una función de callback
  obtenerAlimentosVegetales(sumatoria => {
    console.log('Alimentos vegetales con más de 200 unidades de energía:');
    console.log(filtrarAlimentos());
    console.log('Sumatoria de niveles de energía de alimentos vegetales:');
    console.log(sumatoria);
  });

  // FUNCION FLECHA ==>
  let generarAlimentoFlecha = () => {
    let alimentosPorTipo = {
      'vegetal': ['Zanahoria', 'Espinaca', 'manzana', 'Brócoli', 'Calabaza', 'Cilantro', 'Tomate', 'Lechuga', 'Jitomate', 'Pepino', 'Coliflor', 'Chile', 'Espárrago', 'Cebolla', 'Apio', 'Remolacha'],
      'animal': ['pollo', 'pescado', 'cerdo', 'Res', 'Caballo', 'Iguana'],
      'insecto': ['hormigas', 'saltamontes', 'gusanos']
    };
  
    let tipos = Object.keys(alimentosPorTipo);
    let tipo = tipos[Math.floor(Math.random() * tipos.length)];
  
    let nombre = alimentosPorTipo[tipo][Math.floor(Math.random() * alimentosPorTipo[tipo].length)];
  
    let nivelEnergia = Math.floor(Math.random() * 401) + 100;
    return { nombre, tipo, nivelEnergia };
  };
  
  let alimentosFlecha = Array.from({ length: 300 }, () => generarAlimentoFlecha());
  
  let filtrarAlimentosFlecha = () => {
    let alimentosFiltrados = alimentosFlecha.filter(alimento => alimento.tipo === 'vegetal' && alimento.nivelEnergia > 200);
    return alimentosFiltrados;
  };
  
  let calcularSumatoriaEnergiaFlecha = (alimentosFiltrados) => {
    let sumatoria = 0;
    alimentosFiltrados.forEach(alimento => {
      sumatoria += alimento.nivelEnergia;
    });
    return sumatoria;
  };
  
  // Función principal asincrónica
  let obtenerAlimentosVegetalesFlecha = async (callback) => {
    // Simula una demora de 5 segundos
    await new Promise(resolve => setTimeout(resolve, 5000));
  
    let alimentosFiltrados = filtrarAlimentosFlecha();
    let sumatoriaEnergia = calcularSumatoriaEnergiaFlecha(alimentosFiltrados);
  
    // Llama a la función de callback con la sumatoria de niveles de energía
    callback(sumatoriaEnergia);
  };
  
  // Llama a la función principal y pasa una función de callback
  obtenerAlimentosVegetalesFlecha(sumatoria => {
    console.log('\nAlimentos vegetales con más de 200 unidades de energía con la funcion flecha:');
    console.log(filtrarAlimentos());
    console.log('Sumatoria de niveles de energía de alimentos vegetales con la funcion flecha:');
    console.log(sumatoria);
  });
  