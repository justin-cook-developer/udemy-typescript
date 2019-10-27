namespace CircleMath {
  const PI = 3.14;

  export namespace CoolFunctions {
    export const calculateArea: (rad: number) => number = (rad: number): number => PI * rad ** 2;
  }

  export const calculateCircumference: (rad: number) => number = (
    radius: number
  ): number => 2 * PI * radius;
}
