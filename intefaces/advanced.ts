// w/ interface
interface NamedPerson {
  name: string;
  age?: number; // optional argument `?`
  [propName: string]: any; // allows properties and types for object literals
  greet(lastName): void;
}

function greet(person: NamedPerson) {
  console.log(`Hello ${person.name}`);
}

// same type requirement for input
function changeName(person: NamedPerson) {
  person.name = 'Jeff';
}

const person: NamedPerson = {
  name: 'Justin',
  age: 21,
  greet(lastName: string) {
    this.lastName = lastName;
  },
  hobbies: ['Surfing'],
};

greet(person);
person.greet('Cook');

// implement an interface
class Person implements NamedPerson {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  greet(name: string): void {
    console.log(name);
  }
}

// function types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

const myDoubleFunc: DoubleValueFunc = (num1: number, num2: number) => {
  return num1 * num2;
};

// Interface inheritance
// age is now required
interface AgedPerson extends NamedPerson {
  age: number;
}

const agedPerson: AgedPerson = {
  name: 'me',
  age: 33,
  greet(name) {
    console.log(name);
  },
};

// Interfaces do not get compiled. They are just there for TS development.
