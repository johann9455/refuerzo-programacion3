// ACTIVIDAD: Array destructuring

const colors = ["red", "green", "blue"];          // Creamos un arreglo con 3 colores

const [first, second, third] = colors;            // Extraemos los 3 elementos del arreglo

console.log({ first, second, third });             // Mostramos los 3 elementos


// RETO: Obtener primer, segundo y último elemento

const numbers = [10, 20, 30, 40, 50];             // Creamos el arreglo de números

const [firstNumber, secondNumber, ...rest] = numbers; // Extraemos los 2 primeros y guardamos el resto en rest

const lastNumber = rest[rest.length - 1];         // Obtenemos el último elemento de rest

console.log({ firstNumber, secondNumber, lastNumber }); // Mostramos el primero, segundo y último