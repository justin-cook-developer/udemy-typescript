// Decorators are title cased by convention

// ***** FIRST DECORATOR *****

// Decorators for classes recieve one param
// the constructor of the class

// function Logger(constructor: Function) {
//   console.log("logging...");
//   console.log(constructor);
// }

// ***** DECORATOR FACTORIES *****

// making Logger more customizable
function Logger(logString: string) {
  return (constructor: Function) => {
    console.log(logString);
    console.log(constructor);
  };
}

// ***** MORE USEFUL DECORATOR *****

// render some template to the dom
// similar to Angular

function WithTemplate(template: string, hookId: string) {
  // setting constructor to `any` allows us to call with `new`
  return (constructor: any) => {
    console.log("rendering template");

    const hookElement: HTMLElement | null = document.getElementById(hookId);
    // can use constructor function inside of a decorator
    const person: Person = new constructor();

    if (hookElement) {
      hookElement.innerHTML = template;

      // we know h1 is in the template, but would be good to check if you didn' know for sure
      if (template.includes("h1")) {
        hookElement.querySelector("h1")!.textContent = person.Name;
      }
    }
  };
}

// attach decorator(s) to the class
// decorator gets called when the class is defined
// decorators execute bottom up
@Logger("this is a log string")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  private name: string = "Justin";

  public get Name(this: Person): string {
    return this.name;
  }
}

// ***** PROPERTY DECORATOR *****

// property decorators take two args
// first arg is the target of the property. If instance property, prototype of object. If static field, target refers to construcor function.

function Log(target: any, propertyName: string | Symbol) {
  console.log("property decorator");
  console.log(target, propertyName);
}

// ***** ACCESSOR DECORATOR *****

// target and propertyName are same as property decorator
// decriptor is

function MakeLogger(message: string) {
  function Log2(
    target: any,
    propertyName: string | Symbol,
    descriptor: PropertyDescriptor
  ): void {
    console.log(message);
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
  }

  return Log2;
}

// ***** METHOD DECORATOR *****
// same sig accessor decorators

// ***** PARAMETER DECORATOR *****

// target is same as property
// methodName is name of method param is in
// position is index of param in list, zero based

function Log4(
  target: any,
  methodName: string | Symbol,
  position: number
): void {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(methodName);
  console.log(position);
}

// property, accessor, and method decorators, per member, go top down
// property, accessor, and method decorators execute before class decorators
// parameter decorators execute when their method is defined

@Logger("On the product class")
class Product {
  // property decorator
  // executes at definition
  @Log
  private readonly _title: string;
  private _price: number;

  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }

  @MakeLogger("Accessor Decorator")
  public get title(this: Product): string {
    return this._title;
  }

  @MakeLogger("Accessor Decorator")
  public get price(this: Product): number {
    return this._price;
  }

  // setters do not have return type annotations
  public set price(this: Product, @Log4 price: number) {
    if (price > 0) {
      this._price = price;
    } else {
      throw new Error("Prices should be positive.");
    }
  }

  @MakeLogger("Method Decorator")
  public getPriceWithTax(): number {
    return this._price * 1.075;
  }
}
