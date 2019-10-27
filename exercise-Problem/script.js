"use strict";
var myAccount = {
    money: 1000,
    deposit: function (value) {
        this.money += value;
    },
};
var mySelf = {
    name: 'Justin',
    bankAccount: myAccount,
    hobbies: ['Computing', 'Surfing'],
};
mySelf.bankAccount.deposit(1000);
console.log(mySelf);
// const sayHi = () => console.log('heyyyyo');
var sayHi = /** @class */ (function () {
    function sayHi() {
    }
    sayHi.prototype.speak = function (mesage) {
        if (mesage === void 0) { mesage = 'hey'; }
        console.log('say hiiii' + mesage);
    };
    return sayHi;
}());
var yo = new sayHi();
yo.speak();
