var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // note shortcut to create a property with username
    function Person(name, username) {
        this.username = username;
        this.age = 21; // this entity and those that inherit it can access. note assignment.
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    // has access to private
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
        this.printAge();
    };
    return Person;
}());
var person = new Person('Justin', 'j_dawg');
person.setType('student');
// Inheritance
// class Justin extends Person {
//   // this declaration ovverides name declaration on Person
//   // lower on prototype chain
//   name: string = 'max';
//   constructor(name: string, username: string) {
//     super(name, username);
//   }
// }
var Justin = /** @class */ (function (_super) {
    __extends(Justin, _super);
    function Justin(username) {
        var _this = _super.call(this, 'max', username) || this;
        // works b/c age is protected
        _this.age = 21;
        console.log(_this.age);
        return _this;
        // console.log(this.type); error! private cant be accessed if not on base class
    }
    return Justin;
}(Person));
var justin = new Justin('j_dawg');
// Getters and Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Defualt';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (str) {
            if (str.length > 3) {
                this._species = str;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
// Abstract Class
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject(name) {
        var _this = _super.call(this) || this;
        _this.projectName = name;
        return _this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var website = new ITProject('website');
console.log(website);
website.changeName('Drunk Buds');
console.log(website);
// Priivate constructors and singletons
// useful when you only want one instantiation of Class
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('Justin');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
