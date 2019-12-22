// interface members must be public
// they can be readonly, to make it closer to private
interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

// using interface for implementation-detail free inheritance
// also good for multiple inheritance
class Person implements Greetable {
  constructor(readonly name: string, private age: number) {}

  public get Name(): string {
    return this.name;
  }

  public get Age(): number {
    return this.age;
  }

  public greet(this: Person, phrase: string): void {
    console.log(`${phrase} ${this.name}.`);
  }
}

const user1: Greetable = new Person("Justin", 21);

// using interfaces for type checking
// can have optional properties
interface Action {
  type: string;
  payload: string;
  randomKey?: string;
}

const addItemToListAction: Action = {
  type: "ADD_TO_LIST",
  payload: "Pay bills",
};

// interfaces for function types
// can also use custom types
interface AddFn {
  (n1: number, n2: number): number;
}

const add: AddFn = (a: number, b: number): number => a + b;
