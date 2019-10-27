// can also use tsc --outFile output.js input1.js input2.js w/o commonJS
import { CircleMath } from './circleMath';
import { RectangleMath } from './rectangleMath';

console.log(CircleMath.calculateCircumference(4));
console.log(RectangleMath.calculateRectangleArea(4, 5));
