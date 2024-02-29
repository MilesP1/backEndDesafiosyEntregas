// Creamos una función que genera un número aleatorio entre 1 y 20.
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
  }
  
  // Creamos una función que genera un objeto con las frecuencias de los números aleatorios.
  function contarFrecuenciaNumeros(iteraciones) {
    const frecuencias = {};
  
    for (let i = 0; i < iteraciones; i++) {
      const numero = generarNumeroAleatorio();
  
      // Si el número ya existe en el objeto de frecuencias, incrementamos su valor.
      if (frecuencias[numero]) {
        frecuencias[numero]++;
      } else { // Si no existe, lo inicializamos en 1.
        frecuencias[numero] = 1;
      }
    }
  
    return frecuencias;
  }
  
  // Definimos cuántas veces queremos generar números aleatorios.
  const iteraciones = 100;
  
  // Generamos el objeto de frecuencias.
  const frecuencias = contarFrecuenciaNumeros(iteraciones);
  
  // Mostramos el resultado en la consola.
  console.log('Número\tFrecuencia');
  console.log('-------------------');
  for (const numero in frecuencias) {
    console.log(`${numero}\t${frecuencias[numero]}`);
  }
  