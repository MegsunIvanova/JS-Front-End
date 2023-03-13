function convertToObject(jsonString) {
    let data = JSON.parse(jsonString);

    // for ([key, value] of Object.entries(data)) {
    //     console.log(`${key}: ${value}`);
    // }
    
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');