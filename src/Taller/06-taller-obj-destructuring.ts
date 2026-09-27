const student = {                              // Creamos el objeto student
    name: 'Juan',                              // Guardamos el nombre
    career: 'Ingeniería de Sistemas',          // Guardamos la carrera
    semester: 3                                // Guardamos el semestre
};

const { name, career, semester } = student;    // Extraemos las 3 propiedades del objeto

console.log({ name, career, semester });       // Mostramos las propiedades extraídas


// RETO: Extraer name y price

const product = {                              // Creamos el objeto product
    id: 1,                                     // Guardamos el identificador
    name: 'Laptop',                            // Guardamos el nombre
    price: 2500000,                            // Guardamos el precio
    category: 'Tecnología'                     // Guardamos la categoría
};

const { name: productName, price } = product; // Extraemos name y price; name se guarda como productName

console.log({ productName, price });           // Mostramos el nombre y el precio