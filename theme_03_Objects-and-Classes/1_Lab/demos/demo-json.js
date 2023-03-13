let person = {
    firstName: "Peter",
    lastName: "Pan",
    fullName () {
        return this.firstName + " " + this.lastName;
    }
};

let jsonString = JSON.stringify(person);
console.log(jsonString);

let personObjAgain = JSON.parse(jsonString);
console.log(personObjAgain);