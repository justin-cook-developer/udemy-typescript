// good to let typescript infer function types when defining functions
// just type parameters and return type
function add(n1, n2) {
    return n1 + n2;
}
function printResult(result) {
    console.log(result);
}
printResult(add(1, 2));
// use function types when we will assign a function to a variable
var combineValues;
combineValues = add;
printResult(combineValues(1, 3));
// typing functions which return callbacks
var makeCurriedAdd;
makeCurriedAdd = function (n1) { return function (n2) { return n1 + n2; }; };
// typing function arguments
function takeValAndPrint(val, cb) {
    cb(val);
}
takeValAndPrint(3, console.log);
