// ***** BASIC GENERIC EXAMPLES *****

// generics are containers that will work with many types, which must be specified
// might be implemented with Inheritance under the hood

// array type is generic
// requires a type parameter
const names: string[] = ["Max", "Manuel"];
const otherNames: Array<string> = ["Ethan", "Blake", "Mitch"];

// generic promise that returns a string
const promise: Promise<string> = new Promise((res: Function) => {
  setTimeout(() => {
    res("this is done");
  }, 2000);
});

// promise type allows `.split` in ts
promise.then((data) => {
  console.log(data.split(" "));
});

// ***** BASIC GENERIC FUNCTION *****

// return an intersection of two object types
// function merge<T, U>(objA: T, objB: U): T & U {
//   return Object.assign(objA, objB);
// }

// type defs with `merge` are not necessary
// const mergedObject = merge<
//   { name: string; hobbies: string[] },
//   { age: number }
// >({ name: "Justin", hobbies: ["Swimming", "Coding", "Learning"] }, { age: 20 });

// ts will infer the types of your params
const mergedObject = merge(
  { name: "Justin", hobbies: ["Swimming", "Coding", "Learning"] },
  { age: 20 }
);

// generic allows the mergedObject's type to be inferred
console.log(mergedObject.hobbies);

// make sure that merge only takes types that inherit from Object
// applying type bounds to generic for flexible, but type sage behavior
function merge<T extends Object, U extends Object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// ***** SECOND GENERIC FUNCTION *****

// using an interface to specify a type constraint
interface Lengthy {
  length: number;
}

// guarantees the presence of `.length`
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";

  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length) {
    descriptionText = `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("hello there"));

// ***** KEYOF CONSTRAINT *****

// bad b/c no guarantee obj has the key
// function extractAndConvert(obj: object, key: string) {
//   return obj[key];
// }

// `keyof` operator allows us to know that `key` is in `obj`
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "Justin" }, "name"));

// ***** GENERIC CLASSES *****
class MyStorage<T> {
  private readonly data: T[] = [];

  public addItem(this: MyStorage<T>, item: T): void {
    this.data.push(item);
  }

  // with reference types, we would need to define `.equals` or pass same reference
  // hard to use with objects.
  public removeItem(this: MyStorage<T>, item: T): void {
    this.data.splice(this.data.indexOf(item), 1);
  }

  public get items(this: MyStorage<T>): T[] {
    return [...this.data];
  }
}

// works best with primitives b/c no ref equality
const stringStorage = new MyStorage<string>();

stringStorage.addItem("hello world");
stringStorage.addItem("I like types");

// stringStorage.addItem(33); will error, not type compatible

stringStorage.removeItem("I like types");

console.log(stringStorage.items);

// ***** GENERIC UTILITY TYPES *****

// Partial

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// Partial makes all properties on objects optional
// allow us to build a type, step by step, with validation

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};

  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;

  return courseGoal as CourseGoal;
}

// Readonly
const names2: Readonly<string[]> = ["Justin"];
// names2.push("Blake"); error, cannot add to this
