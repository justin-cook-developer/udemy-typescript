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

class Car {
  public name: string;
  public speed: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public honk(): void {
    console.log('toooooot!');
  }

  public accelerate(increase: number): void {
    this.speed += increase;
  }
}

var car = new Car('BMW');
car.honk();
console.log(car.speed);
car.accelerate(10);
console.log(car.speed);

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
abstract class TwoSidedShape {
  constructor(public width: number, public length: number) {
    this.width = width;
    this.length = length;
  }

  abstract calcSize(): number;
}

class Rectangle extends TwoSidedShape {
  constructor(width: number, length: number) {
    super(width, length);
  }

  public calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
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

class Person {
  private _firstName: string = '';

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}

const person = new Person();
person.firstName = 'Justin';
