function miCallback() {
    console.log('La suma se ha calculado.');
  }
  
  function suma(a, b, callback) {
    let c = a + b;
    callback();
  }
  
  suma(3, 4, miCallback);

  /*¿Que es el tercer parámetro recibido? El tercer parámetro recibido por la función suma() es una 
función callback. Una función callback es una función que se pasa como argumento a otra función 
y que se ejecuta cuando se llama a la función que la recibe.
  
  /*¿En que casos es obligatorio desarrollar este tipo de funciones?
Es obligatorio desarrollar este tipo de funciones en los casos en 
los que es necesario realizar una tarea después de que una función 
haya completado su tarea principal. Por ejemplo, si tenemos una función 
que carga datos de un servidor, es obligatorio desarrollar una función callback para procesar los datos cargados.