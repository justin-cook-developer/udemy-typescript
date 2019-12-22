"use strict";
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "Age", {
        get: function () {
            return this.age;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.greet = function (phrase) {
        console.log(phrase + " " + this.name + ".");
    };
    return Person;
}());
var user1 = new Person("Justin", 21);
var addItemToListAction = {
    type: "ADD_TO_LIST",
    payload: "Pay bills",
};
var add = function (a, b) { return a + b; };
//# sourceMappingURL=interfaces.js.map