var CircleMath;
(function (CircleMath) {
    var PI = 3.14;
    var CoolFunctions;
    (function (CoolFunctions) {
        CoolFunctions.calculateArea = function (rad) { return PI * Math.pow(rad, 2); };
    })(CoolFunctions = CircleMath.CoolFunctions || (CircleMath.CoolFunctions = {}));
    CircleMath.calculateCircumference = function (radius) { return 2 * PI * radius; };
})(CircleMath || (CircleMath = {}));
var RectangleMath;
(function (RectangleMath) {
    RectangleMath.calculateRectangleArea = function (width, length) { return width * length; };
})(RectangleMath || (RectangleMath = {}));
/// <reference path="CircleMath.ts" />
/// <reference path="RectangleMath.ts" />
var CoolFunctions = CircleMath.CoolFunctions;
console.log(CircleMath.calculateCircumference(4));
console.log(RectangleMath.calculateRectangleArea(4, 5));
console.log(CoolFunctions.calculateArea(3));
