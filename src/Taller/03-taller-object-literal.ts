const student = {
name: "Laura",
age: 20,
career: "Ingeniería de Sistemas",
semester: 4,
city : "jamundi"
};

// 1. Imprimir las propiedades
console.log(student.name);
console.log(student.age);
console.log(student.career);
console.log(student.semester);
console.log(student.city)

// 2. Modificar el semestre
student.semester = 5;

// 3. Agregar la ciudad
student.city = "Cali";

// 4. Mostrar el objeto completo
console.log(student);

//Reto

const product = {
    id: 5,
    name: "tablet",
    price: 250000,
    category: "Tecnologia",
    available: true
};

const descripcion = `El producto ${product.name} tiene un precio de ${product.price} y pertenece a la categoria ${product.category}`;

console.log(descripcion);