// function Car(name) {
//   this.name = name;
//   this.acceleration = 0;

//   this.honk = function() {
//       console.log("Toooooooooot!");
//   };

//   this.accelerate = function(speed) {
//       this.acceleration = this.acceleration + speed;
//   }
// }

// var car = new Car("BMW");
// car.honk();
// console.log(car.acceleration);
// car.accelerate(10);
// console.log(car.acceleration);

class Car {
  public name: string;
  public speed: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log('Toooooot');
  }

  accellerate(increment: number): void {
    this.speed += increment;
  }
}

// // Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };

// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
// console.log(rectangle.calcSize());

abstract class TwoSidedShapes {
  public width: number = 0;
  public length: number = 0;
}

class Rectangle extends TwoSidedShapes {
  calcSize(): number {
    return this.width * this.length;
  }
}

// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ""
// };

// Object.defineProperty(person, "firstName", {
//   get: function () {
//       return this._firstName;
//   },
//   set: function (value) {
//       if (value.length > 3) {
//           this._firstName = value;
//       }
//       else {
//           this._firstName = "";
//       }
//   },
//   enumerable: true,
//   configurable: true
// });

// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);

class Person {
  private _firstName: string = '';

  get firstName(): string {
    return this._firstName;
  }

  set firstName(name: string) {
    if (name.length) {
      this.firstName = name;
    }
  }
}
