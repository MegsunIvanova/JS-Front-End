let person = {
    name: "Kiril",
    age: 25,
    colorHair: "brown",
    "my-grades": [5, 5, 5],
    info: { email: 'kiril@gmail.com' }
};

console.log(person.name);
console.log(person.age);
console.log(person.colorHair);
console.log(person["my-grades"]);
console.log(person.info.email);

person.name = "Valio";
person["my-grades"].push(3);
console.log(person.name);
console.log(person["my-grades"]);

console.log(person);
delete person.colorHair;
console.log(person);
