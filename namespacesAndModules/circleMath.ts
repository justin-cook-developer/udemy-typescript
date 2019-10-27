export namespace CircleMath {
  const PI = 3.14;

  export const calculateCircumference: (rad: number) => number = (
    radius: number
  ): number => 2 * PI * radius;
}
