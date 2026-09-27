const products = [
    "Laptop",          // Posición 0: primer producto.
    "Mouse",           // Posición 1: segundo producto.
    "Keyboard",        // Posición 2: tercer producto.
    "Monitor"          // Posición 3: cuarto producto.
];

console.log(products[0]); 
// [0] significa: dame el primer elemento del array.
// Resultado: Laptop

console.log(products[products.length - 1]);
// length nos dice cuántos elementos tiene el array.
// length - 1 nos lleva a la posición del último elemento.
// Resultado: Monitor

products.push("Headphones");
// push() agrega un elemento al final del array.
// Ahora tenemos 5 productos.

products.pop();
// pop() elimina el último elemento del array.
// Por lo tanto, elimina "Headphones".

console.log(products.length);
// length nos dice cuántos elementos tiene actualmente el array.
// Resultado: 4

for (const product of products) {
    // for...of recorre uno por uno los elementos del array.
    
    console.log(product);
    // En cada vuelta, product contiene un elemento diferente.
}

//Reto
const students = [
    {
        name: "Ana",       // Nombre de la estudiante.
        grade: 4.5         // Nota de la estudiante.
    },
    {
        name: "Carlos",    // Nombre del estudiante.
        grade: 3.8         // Nota del estudiante.
    },
    {
        name: "Laura",     // Nombre de la estudiante.
        grade: 4.7         // Nota de la estudiante.
    }
];

for (const student of students) {
    // Recorremos cada objeto que está dentro del array students.

    console.log(`${student.name} - ${student.grade}`);
    // student.name obtiene el nombre.
    // student.grade obtiene la nota.
    // ${...} inserta esos valores dentro del texto.
}
