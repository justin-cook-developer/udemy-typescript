function greet(person) {
    console.log("Hello " + person.name);
}
// same type requirement for input
function changeName(person) {
    person.name = 'Jeff';
}
var person = {
    name: 'Justin',
    age: 21
};
greet(person);
// greet({ name: 'hey', age: 34 }); error - obj literal does not meet interface. Checked more strictly. Age key fails.
