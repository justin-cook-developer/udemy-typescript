"use strict";
// ***** RETURNING A NEW CONSTRUCTOR *****
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// when decorators are attached to classes, you can return a new constructor
function WithTemplate2(template, hookId) {
    // this generic syntax says we are taking in a constructor
    // which will take any amount of arguments of any type
    // and produce an object with a `Name` key
    return function (ogConstructor) {
        // new constructor can also take in same args
        return class extends ogConstructor {
            constructor(..._) {
                // call the original constructor
                super();
                // execute additional logic
                const hookElement = document.getElementById(hookId);
                if (hookElement) {
                    hookElement.innerHTML = template;
                    // we know h1 is in the template, but would be good to check if you didn' know for sure
                    // double check that `Name` is not an empty string
                    if (template.includes("h1") && this.Name) {
                        hookElement.querySelector("h1").textContent = this.Name;
                    }
                }
            }
        };
    };
}
// now using this decorator to alter the `Person2` constructor
let Person2 = class Person2 {
    constructor() {
        this.name = "Justin";
    }
    get Name() {
        return this.name;
    }
};
Person2 = __decorate([
    WithTemplate2("<h1>My Person Object</h1>", "app")
], Person2);
const me = new Person2();
// ***** OTHER DECORATOR RETURN VALUES *****
// decorators on methods and accessors can return descriptor objects
// on both, you can take in the `PropertyDescriptor`, and return a new descriptor object
// ***** EXAMPLE: AUTOBIND DECORATOR *****
// Autobind will bind a method to it's object
// no need for constructor or method name
// will use method descriptor
function Autobind(_, _2, desc) {
    // grab the method from the descriptor
    const ogMethod = desc.value;
    // return a new descriptor
    return {
        configurable: true,
        enumerable: true,
        // add this `get` layer, so `object.thisMethod`
        // will always return a method bound to the `object`
        // `this` will always refer to the object calling the getter
        get() {
            return ogMethod.bind(this);
        },
    };
}
class Printer {
    constructor() {
        this.message = "this works";
    }
    // make sure `showMessage` is always bound to it's object
    // making event listener work
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
const registeredValidators = {};
function Required(target, propName) {
    const { name } = target.constructor;
    if (!(name in registeredValidators)) {
        registeredValidators[name] = {};
    }
    if (!(propName in registeredValidators[name])) {
        registeredValidators[name][propName] = [];
    }
    registeredValidators[name][propName].push("required");
}
function PositiveNumber(target, propName) {
    const { name } = target.constructor;
    if (!(name in registeredValidators)) {
        registeredValidators[name] = {};
    }
    if (!(propName in registeredValidators[name])) {
        registeredValidators[name][propName] = [];
    }
    registeredValidators[name][propName].push("positive");
}
function validate(obj) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig)
        return true;
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required": {
                    isValid = isValid && !!obj[prop];
                    break;
                }
                case "positive": {
                    isValid = isValid && obj[prop] > 0;
                    break;
                }
            }
        }
    }
    return isValid;
}
class Course {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}
__decorate([
    Required
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
const titleEl = document.getElementById("title");
const priceEl = document.getElementById("price");
courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = titleEl.value.trim();
    const price = +priceEl.value;
    const course = new Course(title, price);
    if (!validate(course)) {
        alert("shittty");
    }
    else {
        alert("yay");
    }
});
//# sourceMappingURL=changing-classes.js.map