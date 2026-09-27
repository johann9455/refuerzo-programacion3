export function add(a: number, b: number): number {  // Exportamos la función suma
    return a + b;                                    // Retornamos el resultado
}

export function multiply(a: number, b: number): number { // Exportamos la función multiplicación
    return a * b;                                         // Retornamos el resultado
}

console.log(add(10, 5));                              // Probamos la suma: 15
console.log(multiply(10, 5));                         // Probamos la multiplicación: 502

