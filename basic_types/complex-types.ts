// object

// `object` is the top level type; bad use

// explicityly type an object
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Justin",
//   age: 21,
// };

// TS will infer object types
const person = {
  name: "Justin",
  age: 21,
};

// console.log(person.nickName); will error; no nickName property

console.log(person.name);

// arrays
const numbers: number[] = [1, 2, 3, 4];

const names: string[] = ["Justin", "Blake", "Ethan", "Mitch"];

const people: { name: string; age: number }[] = [
  person,
  { name: "Blake", age: 21 },
];

for (const person of people) {
  console.log(person);
}

// tuples
const ageName: [number, string] = [21, "Justin"];

// tuples allow `.push()`
// ageName.push("Me");

console.log(ageName);

// enums
// give human labels to values
// good for identifiers
enum MathConstants {
  PI = 3.14,
  i = Math.sqrt(-1),
}

console.log(MathConstants.PI);

// union types
let random: number | string;

const randomNum: number = Math.random();

if (randomNum >= 0.5) {
  random = "String";
} else {
  random = 4.2;
}

// literal types
// correspond to exact values
const justin: "Justin" = "Justin";
const twentyOne: 21 = 21;

// custom types
type Password = "yolo" | "send it";

const myPassword: Password = "yolo";

type User = { name: string; age: number };
