"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// can also use tsc --outFile output.js input1.js input2.js
var circleMath_1 = require("./circleMath");
var rectangleMath_1 = require("./rectangleMath");
console.log(circleMath_1.CircleMath.calculateCircumference(4));
console.log(rectangleMath_1.RectangleMath.calculateRectangleArea(4, 5));
