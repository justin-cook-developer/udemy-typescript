enum ProgrammingLanguage {
  Javascript = "Javascript",
  Typescript = "Typescript",
  Java = "Java",
  CSharp = "CSharp",
  Python = "Python",
}

enum Product {
  Hosting = "Cloud",
  AI = "AI",
}

// marking abstract b/c Employee is too generic
abstract class Employee {
  private static id: number = 0;

  private readonly id: number = ++Employee.id;

  // init fields with shorthand syntax
  constructor(private name: string, private readonly departmentId: number) {}

  // syntax for getters
  // title case variable names for convention
  public get ID(this: Employee): number {
    return this.id;
  }

  public get Name(this: Employee): string {
    return this.name;
  }

  public get DepartmentId(this: Employee): number {
    return this.departmentId;
  }

  public equals(rhs: Object): boolean {
    if (!(rhs instanceof Employee)) return false;

    const rhsEmployee: Employee = rhs as Employee;

    return (
      this.ID === rhsEmployee.ID &&
      this.Name === rhsEmployee.Name &&
      this.DepartmentId === rhsEmployee.DepartmentId
    );
  }
}

class Developer extends Employee {
  constructor(
    name: string,
    departmentId: number,
    private programmingLanguage: ProgrammingLanguage
  ) {
    super(name, departmentId);
  }

  public get ProgrammingLanguage(this: Developer): ProgrammingLanguage {
    return this.programmingLanguage;
  }

  // syntax for setters
  // no return type
  public set ProgrammingLanguage(
    this: Developer,
    language: ProgrammingLanguage
  ) {
    this.programmingLanguage = language;
  }

  public equals(this: Developer, rhs: Object): boolean {
    if (!(rhs instanceof Developer)) return false;

    const rhsDev = rhs as Developer;

    return (
      super.equals(rhsDev) &&
      this.ProgrammingLanguage === rhsDev.ProgrammingLanguage
    );
  }
}

class SalesPerson extends Employee {
  constructor(name: string, departmentId: number, private product: Product) {
    super(name, departmentId);
  }

  public get Product(this: SalesPerson): Product {
    return this.product;
  }

  public set Product(this: SalesPerson, product: Product) {
    this.product = product;
  }

  public equals(this: SalesPerson, rhs: Object): boolean {
    if (!(rhs instanceof SalesPerson)) return false;

    const rhsSales = rhs as SalesPerson;

    return super.equals(rhsSales) && this.Product === rhsSales.Product;
  }
}

class Department {
  // using readonly b/c we should never set a new array
  private readonly employees: Employee[] = [];

  // shorthand syntax for init'ing properties
  constructor(private readonly id: number, private name: string) {}

  private includesEmployee(this: Department, employee: Employee): boolean {
    return this.employees.some((e: Employee) => e.equals(employee));
  }

  public get ID(this: Department): number {
    return this.id;
  }

  // dummy `this` param adds extra type safety
  // do not need to pass anything in
  public get Name(this: Department): string {
    return this.name;
  }

  public addEmployee(this: Department, employee: Employee): void {
    if (!this.includesEmployee(employee)) {
      this.employees.push(employee);
    }
  }

  public printEmployees(this: Department): void {
    this.employees.forEach((e: Employee) => console.dir(e));
  }

  public toString(this: Department): string {
    return `This object represents the ${this.name} department.`;
  }
}

const sales: Department = new Department(1, "sales");

const blake: SalesPerson = new SalesPerson("Blake", 1, Product.Hosting);

sales.addEmployee(blake);
sales.printEmployees();

console.log("");

const justin: Developer = new Developer(
  "Justin",
  1,
  ProgrammingLanguage.Typescript
);

console.log(justin.ProgrammingLanguage);

justin.ProgrammingLanguage = ProgrammingLanguage.Java;

console.log(justin.ProgrammingLanguage);

sales.addEmployee(justin);
sales.printEmployees();

console.log(sales.toString());
