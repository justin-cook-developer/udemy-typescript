"use strict";
// ***** BASIC GENERIC EXAMPLES *****
// generics are containers that will work with many types, which must be specified
// might be implemented with Inheritance under the hood
// array type is generic
// requires a type parameter
const names = ["Max", "Manuel"];
const otherNames = ["Ethan", "Blake", "Mitch"];
// generic promise that returns a string
const promise = new Promise((res) => {
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
const mergedObject = merge({ name: "Justin", hobbies: ["Swimming", "Coding", "Learning"] }, { age: 20 });
// generic allows the mergedObject's type to be inferred
console.log(mergedObject.hobbies);
// make sure that merge only takes types that inherit from Object
// applying type bounds to generic for flexible, but type sage behavior
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
// guarantees the presence of `.length`
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    }
    else if (element.length) {
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
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "Justin" }, "name"));
// ***** GENERIC CLASSES *****
class MyStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get items() {
        return [...this.data];
    }
}
const stringStorage = new MyStorage();
stringStorage.addItem("hello world");
stringStorage.addItem("I like types");
// stringStorage.addItem(33); will error, not type compatible
stringStorage.removeItem("I like types");
console.log(stringStorage.items);
//# sourceMappingURL=app.js.map