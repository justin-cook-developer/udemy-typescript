"use strict";
// Decorators are title cased by convention
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// ***** FIRST DECORATOR *****
// Decorators for classes recieve one param
// the constructor of the class
// function Logger(constructor: Function) {
//   console.log("logging...");
//   console.log(constructor);
// }
// ***** DECORATOR FACTORIES *****
// making Logger more customizable
function Logger(logString) {
    return (constructor) => {
        console.log(logString);
        console.log(constructor);
    };
}
// ***** MORE USEFUL DECORATOR *****
// render some template to the dom
// similar to Angular
function WithTemplate(template, hookId) {
    // setting constructor to `any` allows us to call with `new`
    return (constructor) => {
        console.log("rendering template");
        const hookElement = document.getElementById(hookId);
        // can use constructor function inside of a decorator
        const person = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            // we know h1 is in the template, but would be good to check if you didn' know for sure
            if (template.includes("h1")) {
                hookElement.querySelector("h1").textContent = person.Name;
            }
        }
    };
}
// attach decorator(s) to the class
// decorator gets called when the class is defined
// decorators execute bottom up
let Person = class Person {
    constructor() {
        this.name = "Justin";
    }
    get Name() {
        return this.name;
    }
};
Person = __decorate([
    Logger("this is a log string"),
    WithTemplate("<h1>My Person Object</h1>", "app")
], Person);
// ***** PROPERTY DECORATOR *****
// property decorators take two args
// first arg is the target of the property. If instance property, prototype of object. If static field, target refers to construcor function.
function Log(target, propertyName) {
    console.log("property decorator");
    console.log(target, propertyName);
}
// ***** ACCESSOR DECORATOR *****
// target and propertyName are same as property decorator
// decriptor is
function MakeLogger(message) {
    function Log2(target, propertyName, descriptor) {
        console.log(message);
        console.log(target);
        console.log(propertyName);
        console.log(descriptor);
    }
    return Log2;
}
// ***** METHOD DECORATOR *****
// same sig accessor decorators
// ***** PARAMETER DECORATOR *****
// target is same as property
// methodName is name of method param is in
// position is index of param in list, zero based
function Log4(target, methodName, position) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(methodName);
    console.log(position);
}
// property, accessor, and method decorators, per member, go top down
// property, accessor, and method decorators execute before class decorators
// parameter decorators execute when their method is defined
let Product = class Product {
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }
    get title() {
        return this._title;
    }
    get price() {
        return this._price;
    }
    // setters do not have return type annotations
    set price(price) {
        if (price > 0) {
            this._price = price;
        }
        else {
            throw new Error("Prices should be positive.");
        }
    }
    getPriceWithTax() {
        return this._price * 1.075;
    }
};
__decorate([
    Log
], Product.prototype, "_title", void 0);
__decorate([
    MakeLogger("Accessor Decorator")
], Product.prototype, "title", null);
__decorate([
    MakeLogger("Accessor Decorator"),
    __param(0, Log4)
], Product.prototype, "price", null);
__decorate([
    MakeLogger("Method Decorator")
], Product.prototype, "getPriceWithTax", null);
Product = __decorate([
    Logger("On the product class")
], Product);
//# sourceMappingURL=basics.js.map