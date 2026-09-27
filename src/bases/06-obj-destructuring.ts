const person = { name: 'Tony', age: 45, key: 'Ironman' };

const { key, name: ironmanName, age } = person;



console.log({ ironmanName, age, key });

interface Hero { name: string; age: number; key: string; rank ?: string; }

const useContext =
({ key, name, age, rank = 'sin rango' }: Hero) => {
return {
keyName: key,
 user: {
 name,
 age
 },

  rank: rank
  };
 };

const { rank, keyName, user } = useContext(person);
const { name } = user;
console.log ({ rank, keyName, name});

const estudiante = {
    nombre: 'Juan',
    edad: 20,
    carrera: 'Ingenieria',
    universidad: 'Universidad Nacional'
};

const { nombre, edad, carrera, universidad } = estudiante;

const nuevaEdad = edad + 1;
const correcionNombre = 'Pedro Perez';
const cambioDeCarrera = 'Medicina';

estudiante.edad = 21;

console.log(`El estudiante ${correcionNombre} tiene ${nuevaEdad} años, estudia ${cambioDeCarrera} 
    en la ${universidad}.`);

console.log({nombre, edad, carrera, universidad });

console.log(`El estudiante con la nueva edad es: ${estudiante.edad}`);
