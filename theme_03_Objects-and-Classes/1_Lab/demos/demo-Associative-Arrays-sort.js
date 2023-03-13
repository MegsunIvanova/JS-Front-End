let people = {
    'Kiril': { age: 25, email: 'kiril@abv.bg' },
    'Peter': { age: 24, email: 'pesho@abv.bg' },
    'Georgi': { age: 23, email: 'gogo@abv.bg' },
}

const entries = Object.entries(people); //[[],[],[]]
let sortedByName = entries.sort((personA, personB) => {
    // console.log(personA);
    // console.log(personB);
    let personAName = personA[0];
    let personBName = personB[0];
    return personAName.localeCompare(personBName);
});

for (const [name, info] of sortedByName) {
    console.log(name);
    console.log(info);
 
}