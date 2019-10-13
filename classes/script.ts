class Person {
  public name: string; // anyone can access
  protected age: number = 21; // this entity and those that inherit it can access. note assignment.
  private type: string; // only this entity can access

  // note shortcut to create a property with username
  constructor(name: string, public username: string) {
    this.name = name;
    this.username = username;
  }

  private printAge() {
    console.log(this.age);
  }

  // has access to private
  public setType(type: string) {
    this.type = type;
    console.log(this.type);
    this.printAge();
  }
}

let person = new Person('Justin', 'j_dawg');

person.setType('student');

// Inheritance
// class Justin extends Person {
//   // this declaration ovverides name declaration on Person
//   // lower on prototype chain
//   name: string = 'max';

//   constructor(name: string, username: string) {
//     super(name, username);
//   }
// }

class Justin extends Person {
  constructor(username: string) {
    super('max', username);
    // works b/c age is protected
    this.age = 21;
    console.log(this.age);
    // console.log(this.type); error! private cant be accessed if not on base class
  }
}

const justin = new Justin('j_dawg');

// Getters and Setters
class Plant {
  private _species: string = 'Defualt';

  get species() {
    return this._species;
  }

  set species(str: string) {
    if (str.length > 3) {
      this._species = str;
    }
  }
}

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;

  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

// Abstract Class
abstract class Project {
  projectName: string = 'Default';
  budget: number;

  abstract changeName(name: string): void;

  calcBudget(): number {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  constructor(name: string) {
    super();
    this.projectName = name;
  }

  changeName(name: string): void {
    this.projectName = name;
  }
}

const website = new ITProject('website');
console.log(website);
website.changeName('Drunk Buds');
console.log(website);

// Priivate constructors and singletons
// useful when you only want one instantiation of Class
class OnlyOne {
  private static instance: OnlyOne;

  // name is readonly; cannot do instance.name = 'Jeff'
  private constructor(public readonly name: string) {
    this.name = name;
  }

  static getInstance(): OnlyOne {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('Justin');
    }

    return OnlyOne.instance;
  }
}
