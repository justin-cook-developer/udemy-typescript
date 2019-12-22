console.log("hello");

const myName: string = "Justin Cook";

function add(a: number, b: number): number {
  return a + b;
}

const buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName(
  "button"
);

buttons[0].addEventListener("click", (event: MouseEvent): void => {
  console.log("You clicked the button");
});
