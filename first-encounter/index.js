"use strict";
console.log("hello");
var myName = "Justin Cook";
function add(a, b) {
  return a + b;
}
var buttons = document.getElementsByTagName("button");
buttons[0].addEventListener("click", function(event) {
  console.log("You clicked the button");
});
