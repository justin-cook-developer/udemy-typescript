// w/ interface
interface NamedPerson {
  name: string;
  age?: number; // optional argument `?`
  [propName: string]: any; // allows properties and types for object literals
}

function greet(person: NamedPerson) {
  console.log(`Hello ${person.name}`);
}

// same type requirement for input
function changeName(person: NamedPerson) {
  person.name = 'Jeff';
}

const person = {
  name: 'Justin',
  age: 21,
};

greet(person);
// greet({ name: 'hey', age: 34 }); error - obj literal does not meet interface. Checked more strictly. Age key fails.


