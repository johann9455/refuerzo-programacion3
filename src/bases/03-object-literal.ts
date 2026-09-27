interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  postalcode: string;
  city: string;
}

const iroman: Person = {
  firstName: "Julian",
  lastName: "Torres",
  age: 45,
  address: {
    postalcode: "1234",
    city: "New York",
  },
};

console.log(iroman);

//const spiderman = iroman;

const spiderman = structuredClone(iroman);

spiderman.firstName = "Peter";
spiderman.lastName = "parker";
spiderman.age = 22;
spiderman.address!.city = "Cali";

const hulk = structuredClone(spiderman);

hulk.firstName = "Bruce";
hulk.lastName = "Bruce";
hulk.age = 50;
hulk.address!.city = "bogota";

const thor: Person = {
  firstName: "Thor",
  lastName: "Odison",
  age: 1500,
  address: {
    postalcode: "1234",
    city: "Asgard",
  },
};

console.log({ iroman, spiderman, hulk, thor });