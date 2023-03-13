let person = {
    firstName: "Peter",
    lastName: "Pan",
    fullName () {
        return this.firstName + " " + this.lastName;
    }
};

const getFullName = person.fullName;
const anotherPerson = {firstName: "Bob", lastName: "Smith"};
anotherPerson.fullName = getFullName; //функцията може да се ползва свободно
console.log(anotherPerson.fullName());
