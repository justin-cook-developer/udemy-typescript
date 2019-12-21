// ***** INTERSECTION TYPES *****

// takes things common to both types for non-objects
// for objects, just combines all keys into one type

// would usually use interfaces for this, but demoing intersection

type Admin = {
  name: string;
  privilige: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Justin",
  privilige: ["dba", "deploy"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type NumbersOnly = Combinable & Numeric;

// const name: NumbersOnly = "Jusitn"; error
// const iAmAwesome: NumbersOnly = true; error
const myAge: NumbersOnly = 21;

// ***** type guards *****

// instanceof is another good type guard, for classes and objects

function add(a: Combinable, b: Combinable): string | number {
  // this check is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee): void {
  console.log(`Name: ${emp.name}`);

  // another type guard
  // this could be good for reducers
  if ("privilige" in emp) {
    console.log("Privileges: " + emp.privilige);
  }
}

// ***** DISCRIMINATED UNION *****

// each object in a union type, has one identifying key
// usually type: string
// key allows you to discriminate and stay type safe

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// this would be prime for redux reducers
// use interfaces to define action objects
function moveAnimal(animal: Animal): number {
  let speed: number;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  return speed;
}

// ***** TYPE CASTING *****

// `!` means this will never return `null`
// `as` is the syntax for typecasting
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

// casting to `HTMLInputElement` allows this action
userInputElement.value = "Hi there!";

// ***** INDEX PROPERTIES *****

// don't know what `prop` will be, but it will be a string
// can have any number of key-val pairs of that format
interface ErrorContainer {
  // can have pre-defined types, but must match the prop format
  id: string;
  [prop: string]: string;
}

const EmailError: ErrorContainer = {
  id: "1",
  email: "This email is already taken.",
  password: "Your password is too short.",
};

// ***** FUNCTION OVERLOADS *****

// defining return types for any possible arg combos
function add2(a: number, b: number): number;
function add2(a: number, b: string): string;
function add2(a: string, b: number): string;
function add2(a: string, b: string): string;
function add2(a: Combinable, b: Combinable): string | number {
  // this check is a type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

// ts now knows the return type is string
console.log(add2("1", 2).concat(" - YEET"));

// ***** OPTIONAL CHAINING *****
// don't know if a key is in object
const fetchedUserData = {
  id: "u1",
  name: "Justin",
  // job: { title: "CEO", description: "My own company" },
};

// safely access properties that may or may not be defined
// console.log(fetchedUserData?.job?.title);

// ***** NULLISH COALESCING *****
const userInput = null;
// if `null` or `undefined`, use the empty string
const storedData = userInput ?? "Default";

console.log(storedData);
