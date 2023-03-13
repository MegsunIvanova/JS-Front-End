function makeDictionary(input) {
    // let dictionary = {};

    // for (const jsonString of input) {
    //     let object = JSON.parse(jsonString);
    //     Object.entries(object).forEach(([terms, description]) => dictionary[terms] = description);
    // }

    let dictionary = input.reduce((data, current) => {
        Object.entries(JSON.parse(current))
            .forEach(([terms, description]) => data[terms] = description);
        return data;
    }, {})

    Object.entries(dictionary)
        .sort((e1, e2) => e1[0].localeCompare(e2[0]))
        .forEach(([term, definition]) => console.log(`Term: ${term} => Definition: ${definition}`));

}


makeDictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]

);