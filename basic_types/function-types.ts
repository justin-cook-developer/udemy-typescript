// good to let typescript infer function types when defining functions
// just type parameters and return type

function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(result: number): void {
  console.log(result);
}

printResult(add(1, 2));

// use function types when we will assign a function to a variable
let combineValues: (a: number, b: number) => number;

combineValues = add;

printResult(combineValues(1, 3));

// typing functions which return callbacks
let makeCurriedAdd: (a: number) => (b: number) => number;

makeCurriedAdd = (n1: number) => (n2: number) => n1 + n2;

// typing function arguments
function takeValAndPrint(val: any, cb: (val: any) => void) {
  cb(val);
}

takeValAndPrint(3, console.log);
