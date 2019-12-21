"use strict";
var e1 = {
    name: "Justin",
    privilige: ["dba", "deploy"],
    startDate: new Date(),
};
var myAge = 21;
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privilige" in emp) {
        console.log("Privileges: " + emp.privilige);
    }
}
function moveAnimal(animal) {
    var speed;
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
var userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
var EmailError = {
    id: "1",
    email: "This email is already taken.",
    password: "Your password is too short.",
};
function add2(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add2("1", 2).concat(" - YEET"));
var fetchedUserData = {
    id: "u1",
    name: "Justin",
};
var userInput = null;
var storedData = (userInput !== null && userInput !== void 0 ? userInput : "Default");
console.log(storedData);
//# sourceMappingURL=app.js.map