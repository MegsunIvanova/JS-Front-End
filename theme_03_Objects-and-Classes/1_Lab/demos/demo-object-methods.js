let person = {
    firstName: "Peter",
    lastName: "Pan",
    age: 25,
    sayHello: function () {
        return `Hello from ${this.firstName} ${this.lastName}`;
    }
};

console.log(person.sayHello());

const keys = Object.keys(person);
console.log(keys);
for (const key of keys) {
    console.log(`Key: ${key}`);
    console.log(`Value: ${person[key]}`);
}


const values = Object.values(person);
console.log(values);


const tuples = Object.entries(person);
console.log(tuples);
// for (const [key, value] of tuples) {
//     console.log(`Key: ${key} Value: ${value}`);
// }
tuples.forEach(([key, value]) => console.log(key, value));


//for-in -> for object iteration
for (const key in person) {
    console.log(key);
    console.log(person[key]);
}
