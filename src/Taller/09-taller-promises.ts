// ACTIVIDAD
function getMessage(): Promise<string> {              // Creamos una función que devuelve una Promise
    return new Promise((resolve) => {                 // Creamos la Promise
        setTimeout(() => {                            // Esperamos antes de ejecutar el código
            resolve("Operación completada");          // Resolvemos la Promise
        }, 2000);                                     // Esperamos 2 segundos
    });
}

getMessage().then((message) => {                      // Ejecutamos la función
    console.log(message);                             // Mostramos el resultado en consola
});

// RETO
function getMessageWithError(): Promise<string> {     // Función que devuelve una Promise
    return new Promise((reject) => {                  // Creamos la Promise usando reject para producir el error
        setTimeout(() => {                            // Esperamos 2 segundos
            reject("Ocurrió un error");               // Rechazamos la Promise
        }, 2000);                                     // Esperamos 2 segundos
    });                                               // Cerramos la Promise
}                                                     // Cerramos la función

getMessageWithError()                                 // Ejecutamos la función
    .then((message) => {                              // Se ejecutaría si la Promise fuera exitosa
        console.log(message);                         // Mostramos el mensaje
    })
    .catch((error) => {                               // Capturamos el error
        console.log(error);                           // Mostramos el error en consola
    });