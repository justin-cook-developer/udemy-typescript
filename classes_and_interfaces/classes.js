"use strict";
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
var ProgrammingLanguage;
(function (ProgrammingLanguage) {
    ProgrammingLanguage["Javascript"] = "Javascript";
    ProgrammingLanguage["Typescript"] = "Typescript";
    ProgrammingLanguage["Java"] = "Java";
    ProgrammingLanguage["CSharp"] = "CSharp";
    ProgrammingLanguage["Python"] = "Python";
})(ProgrammingLanguage || (ProgrammingLanguage = {}));
var Product;
(function (Product) {
    Product["Hosting"] = "Cloud";
    Product["AI"] = "AI";
})(Product || (Product = {}));
var Employee = (function () {
    function Employee(name, departmentId) {
        this.name = name;
        this.departmentId = departmentId;
        this.id = ++Employee.id;
    }
    Object.defineProperty(Employee.prototype, "ID", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "DepartmentId", {
        get: function () {
            return this.departmentId;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.equals = function (rhs) {
        if (!(rhs instanceof Employee))
            return false;
        var rhsEmployee = rhs;
        return (this.ID === rhsEmployee.ID &&
            this.Name === rhsEmployee.Name &&
            this.DepartmentId === rhsEmployee.DepartmentId);
    };
    Employee.id = 0;
    return Employee;
}());
var Developer = (function (_super) {
    __extends(Developer, _super);
    function Developer(name, departmentId, programmingLanguage) {
        var _this = _super.call(this, name, departmentId) || this;
        _this.programmingLanguage = programmingLanguage;
        return _this;
    }
    Object.defineProperty(Developer.prototype, "ProgrammingLanguage", {
        get: function () {
            return this.programmingLanguage;
        },
        set: function (language) {
            this.programmingLanguage = language;
        },
        enumerable: true,
        configurable: true
    });
    Developer.prototype.equals = function (rhs) {
        if (!(rhs instanceof Developer))
            return false;
        var rhsDev = rhs;
        return (_super.prototype.equals.call(this, rhsDev) &&
            this.ProgrammingLanguage === rhsDev.ProgrammingLanguage);
    };
    return Developer;
}(Employee));
var SalesPerson = (function (_super) {
    __extends(SalesPerson, _super);
    function SalesPerson(name, departmentId, product) {
        var _this = _super.call(this, name, departmentId) || this;
        _this.product = product;
        return _this;
    }
    Object.defineProperty(SalesPerson.prototype, "Product", {
        get: function () {
            return this.product;
        },
        set: function (product) {
            this.product = product;
        },
        enumerable: true,
        configurable: true
    });
    SalesPerson.prototype.equals = function (rhs) {
        if (!(rhs instanceof SalesPerson))
            return false;
        var rhsSales = rhs;
        return _super.prototype.equals.call(this, rhsSales) && this.Product === rhsSales.Product;
    };
    return SalesPerson;
}(Employee));
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.includesEmployee = function (employee) {
        return this.employees.some(function (e) { return e.equals(employee); });
    };
    Object.defineProperty(Department.prototype, "ID", {
        get: function () {
            return this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Department.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Department.prototype.addEmployee = function (employee) {
        if (!this.includesEmployee(employee)) {
            this.employees.push(employee);
        }
    };
    Department.prototype.printEmployees = function () {
        this.employees.forEach(function (e) { return console.dir(e); });
    };
    Department.prototype.toString = function () {
        return "This object represents the " + this.name + " department.";
    };
    return Department;
}());
var sales = new Department(1, "sales");
var blake = new SalesPerson("Blake", 1, Product.Hosting);
sales.addEmployee(blake);
sales.printEmployees();
console.log("");
var justin = new Developer("Justin", 1, ProgrammingLanguage.Typescript);
console.log(justin.ProgrammingLanguage);
justin.ProgrammingLanguage = ProgrammingLanguage.Java;
console.log(justin.ProgrammingLanguage);
sales.addEmployee(justin);
sales.printEmployees();
console.log(sales.toString());
//# sourceMappingURL=classes.js.map