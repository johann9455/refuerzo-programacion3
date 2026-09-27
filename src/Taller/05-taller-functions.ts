function greet(name: string): string {        // Recibe un nombre y devuelve un texto.
    return `Hola ${name}`;                    // Devuelve el saludo.
}

console.log(greet("Johann"));              // Prueba la función greet.

function add(a: number, b: number): number {  // Recibe dos números y devuelve un número.
    return a + b;                             // Suma los dos números.
}

console.log(add(5, 3));                    // Prueba la función add.

function isApproved(grade: number): boolean { // Recibe una nota y devuelve true o false.
    return grade >= 3.0;                      // Aprueba si la nota es 3.0 o superior.
}
console.log(isApproved(4.0)); 

function calculateAverage(grades: number[]): number { // Recibe un arreglo de notas y devuelve el promedio.
    let total = 0;     
                               

    for (const grade of grades) {                    // Recorre las notas.
        total += grade;                              // Suma cada nota.
    }

     // Prueba la función calculateAverage.

    return total / grades.length;                    // Calcula y devuelve el promedio.
}
console.log(calculateAverage([4.0, 3.5, 5.0])); // Prueba la función isApproved.


             

