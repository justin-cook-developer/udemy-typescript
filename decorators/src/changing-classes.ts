// decorators allow the dev to add dynamic behavior at runtime
// outside of the inheritance hierarachy

// ***** RETURNING A NEW CONSTRUCTOR *****

// when decorators are attached to classes, you can return a new constructor

function WithTemplate2(template: string, hookId: string) {
  // this generic syntax says we are taking in a constructor
  // which will take any amount of arguments of any type
  // and produce an object with a `Name` key
  return function<T extends { new (..._: any[]): { Name: string } }>(
    ogConstructor: T
  ) {
    // new constructor can also take in same args
    return class extends ogConstructor {
      constructor(..._: any[]) {
        // call the original constructor
        super();

        // execute additional logic
        const hookElement: HTMLElement | null = document.getElementById(hookId);

        if (hookElement) {
          hookElement.innerHTML = template;

          // we know h1 is in the template, but would be good to check if you didn' know for sure
          // double check that `Name` is not an empty string
          if (template.includes("h1") && this.Name) {
            hookElement.querySelector("h1")!.textContent = this.Name;
          }
        }
      }
    };
  };
}

// now using this decorator to alter the `Person2` constructor
@WithTemplate2("<h1>My Person Object</h1>", "app")
class Person2 {
  private name: string = "Justin";

  public get Name(this: Person2): string {
    return this.name;
  }
}

const me = new Person2();

// ***** OTHER DECORATOR RETURN VALUES *****
// decorators on methods and accessors can return descriptor objects
// on both, you can take in the `PropertyDescriptor`, and return a new descriptor object

// ***** EXAMPLE: AUTOBIND DECORATOR *****

// Autobind will bind a method to it's object
// no need for constructor or method name
// will use method descriptor
function Autobind(
  _: any,
  _2: string,
  desc: PropertyDescriptor
): PropertyDescriptor {
  // grab the method from the descriptor
  const ogMethod: Function = desc.value;

  // return a new descriptor
  return {
    configurable: true,
    enumerable: true,
    // add this `get` layer, so `object.thisMethod`
    // will always return a method bound to the `object`
    // `this` will always refer to the object calling the getter
    get(): Function {
      return ogMethod.bind(this);
    },
  };
}

class Printer {
  private message: string = "this works";

  // make sure `showMessage` is always bound to it's object
  // making event listener work
  @Autobind
  public showMessage(this: Printer): void {
    console.log(this.message);
  }
}

const p = new Printer();

const button: HTMLButtonElement = document.querySelector("button")!;

button.addEventListener("click", p.showMessage);

// ***** EXAMPLE: DECORATOR FOR VALIDATION *****

// this is what the global validation object will look like
interface ValidatorConifg {
  // class name
  [property: string]: {
    // property name
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConifg = {};

// make sure a field is required
function Required(target: any, propName: string) {
  const { name } = target.constructor;

  if (!(name in registeredValidators)) {
    registeredValidators[name] = {};
  }

  if (!(propName in registeredValidators[name])) {
    registeredValidators[name][propName] = [];
  }

  registeredValidators[name][propName].push("required");
}

// make sure a number is positive
function PositiveNumber(target: any, propName: string) {
  const { name } = target.constructor;

  if (!(name in registeredValidators)) {
    registeredValidators[name] = {};
  }

  if (!(propName in registeredValidators[name])) {
    registeredValidators[name][propName] = [];
  }

  registeredValidators[name][propName].push("positive");
}

// check all validations for an object (class)
function validate(obj: any): boolean {
  const objValidatorConfig = registeredValidators[obj.constructor.name];

  // if constructor name not in registeredValidators obj, return true
  if (!objValidatorConfig) return true;

  let isValid = true;

  // check all properties in class's validation object
  for (const prop in objValidatorConfig) {
    // check each validator for each property
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required": {
          isValid = isValid && !!obj[prop];
          break;
        }
        case "positive": {
          isValid = isValid && (obj[prop] as number) > 0;
          break;
        }
      }
    }
  }

  return isValid;
}

// apply validation decorators to properties
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

const courseForm: HTMLFormElement = document.querySelector("form")!;
const titleEl: HTMLInputElement = document.getElementById(
  "title"
)! as HTMLInputElement;
const priceEl: HTMLInputElement = document.getElementById(
  "price"
)! as HTMLInputElement;

courseForm.addEventListener("submit", (e: Event): void => {
  e.preventDefault();

  const title = titleEl.value.trim();
  const price = +priceEl.value;

  const course: Course = new Course(title, price);

  if (!validate(course)) {
    alert("shittty");
  } else {
    alert("yay");
  }
});
