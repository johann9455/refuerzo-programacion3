# Taller de TypeScript

## 1. Nombre del estudiante

Johann Sosa Valencia

## 2. Descripción del ejercicio

Taller práctico de fundamentos de TypeScript para reforzar
conceptos básicos como variables, tipos de datos, arreglos,
destructuración, funciones, promesas y otros conceptos.

## 3. Tecnologías utilizadas

- TypeScript
- JavaScript
- Node.js
- Visual Studio Code

## 4. Instrucciones para ejecutar el proyecto

1. Clonar o descargar el proyecto.
2. Abrir el proyecto en Visual Studio Code.
3. Instalar las dependencias con:

```bash
npm install

## 5. Ejecutar el proyecto
npm run dev

Taller de programacion johann sosa valencia

1. const y let
Actividad
Crea 01-variables.ts. Declara university, semester y students. Imprime las variables, modifica
semester y students e intenta modificar university.



Código inicial
const university = "Universidad XYZ";
let semester = 3;
let students =25;
 

Preguntas
1.	¿Qué diferencia existe entre const y let?
La constante no se puede modificar y las variables con let si se pueden modificar
2.	¿Qué sucede al intentar modificar university?
Como esta en la imagen sale que no se puede asignar ya que es una constante
3.	¿Cuándo utilizarías const?
Cuando vamos a usar información que sabemos que no va a cambiar el nombre de una universidad el número de cedula de una persona
4.	¿Cuándo utilizarías let?
Cuando sabemos que se va a modificar por ejemplo el nombre de una persona que está en una puesto etc.

2. Template strings
Actividad
Construye una frase utilizando variables y $ {}.

Código inicial
const name = "Carlos";
const age = 21;
const career = "Ingenieria de Sistemas";
 

Resultado esperado
Hola, Carlos, tengo 21 años y estudio Ingeniería de Sistemas.
Reto
Construye: Carlos tiene 21 años y en 5 años tendrá 26 anos., calculando el segundo valor a partir de
age.
 
 

3. Object literal
Actividad
Crea un objeto student con nombre, edad, carrera y semestre. Imprime sus propiedades, modifica el
semestre, agrega city y muestra el objeto completo.
Código inicial
const student = {
name: "Laura",
age: 20,
career: "Ingenieria de Sistemas",
semester: 4
 

Reto

Crea un objeto product con id, name, price, category y available. Construye una descripcion usando
template strings.
 
 

4. Arrays
Actividad
Crea un arreglo de productos. Imprime el primero y el ultimo, agrega y elimina elementos, consulta su
longitud y recorrelo con for ... of.
Código inicial
const products = [
"Laptop",
"Mouse",
"Keyboard",
"Monitor"
]:  

Reto

Taller practico - Fundamentos de TypeScript
Crea un arreglo de objetos students con nombre y nota. Recorre el arreglo e imprime: Ana - 4.5, etc.
 
 

5. Functions

Actividad

Crea una funcion greet(name: string): string, una funcion add(a: number, b: number): number y una
función isApproved(grade: number): boolean. La nota minima para aprobar es 3.0.
 
 
Reto

Crea calculateAverage() que reciba un arreglo de notas y retorne el promedio.
 

 

6. Object destructuring
Actividad
A partir de un objeto student, extrae name, career y semester mediante destructuring.

Código inicial
const { name, career, semester } = student;
 
Reto

Dado un producto con id, name, price y category, extrae solamente name y price.
 
 


7. Array destructuring
Actividad
Dado un arreglo de colores, extrae sus tres elementos mediante destructuring.

Código inicial
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
 Z

Reto

Dado [10, 20, 30, 40, 50], obtén el primer, segundo y último elemento. Investiga cómo utilizar ... rest.
 

 



8. import / export
Actividad
Crea src/main.ts, src/math.ts y src/messages.ts. Exporta funciones desde los dos ultimos archivos 

impórtalas en main.ts.

math.ts
export function add(a: number, b: number): number {
return a + b;

export function multiply(a: number, b: number): number {
return a * b;
 
messages.ts
export function greet(name: string): string {
return `Hola $ {name}`;
}
 
 

 
Preguntas
¿Que funcion cumplen export e import? ¿ Que ventajas tiene dividir el codigo en diferentes archivos?
R/ 	• Export: permite que una función, variable o elemento de un archivo pueda ser utilizado desde otro archivo. 
• Import: permite traer ese elemento que fue exportado desde otro archivo para poder utilizarlo.
Ventajas de dividir el código
•	Organización: cada archivo puede encargarse de una función específica. 
•	Facilidad de mantenimiento: es más fácil encontrar y modificar el código. 
•	Reutilización: puedes importar una función y utilizarla en diferentes archivos. 
•	Menos código acumulado: evitas tener todo el programa dentro de un único archivo. 
En pocas palabras: export permite compartir código y import permite utilizar ese código desde otro archivo.
9. Promises
Actividad
Crea una funcion que simule una operacion de 2 segundos y retorne una Promise.
Código inicial
function getMessage(): Promise {
return new Promise((resolve) => {
setTimeout(() => {
resolve("Operación completada");
}, 2000);
});
getMessage().then((message) => {
console.log(message);
 Reto
Modifica la función para que pueda producir un error usando reject(). Utiliza .then() y .catch().
 
 
10. Fetch API
Actividad
Consume la API publica JSONPlaceholder y obtiene los usuarios.
Endpoint
https://jsonplaceholder.typicode.com/users
Código inicial
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
console.log(users);
.catch(error => {
console.error(error);
})
 
 
 
Preguntas
¿Qué devuelve fetch()? ¿Que representa response? ¿Por qué se utiliza response.json()? ¿Porque hay dos .then()? ¿Que sucede si la peticion falla?
.fetch() → pide datos a una API.
.then() → recibe lo que devuelve la petición.
.json() → convierte la respuesta en datos que podemos utilizar.
.catch() → captura errores.
fetch() devuelve una Promise:
Es decir, no devuelve inmediatamente los usuarios. Devuelve una Promise que dice:
"Estoy haciendo la petición; cuando tenga la respuesta, te aviso."
¿Qué representa response?
Response representa la respuesta que nos dio el servidor.
Pero ojo: response todavía no son directamente los usuarios.
Es como recibir un paquete.
¿Por qué utilizamos response.json()?
Por que usamos Jason Porque necesitamos extraer los datos de la respuesta y convertirlos a JSON para poder trabajar con ellos.
Que sucede si la petición falla

Si la petición falla, se ejecuta el .catch(), que captura el error y permite mostrarlo en la consola para saber qué salió mal.
11. Async / Await
Actividad
Reescribe el ejercicio anterior utilizando async/await y try/catch.
Estructura sugerida
Taller práctico - Fundamentos de TypeScript
async function getUsers() {
try {
// fetch
// response.json()
// console.log()
} catch (error) {
console.error(error);
 
 
 









