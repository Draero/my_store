const username: string | number= 'droear';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,3);

class Person {
  // Añadiendo el atributo de encapsulamiento se inicializan las variables
  // de manera directa.
  constructor(public age: number, public lastName: string) {}
}

/* class Person {
  age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
} */

 const nico = new Person(15, 'Molina');
