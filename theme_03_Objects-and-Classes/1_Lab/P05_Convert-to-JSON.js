function convertToJSON(name, lastName, hairColor) {
    return JSON.stringify({ name, lastName, hairColor });
}

console.log(convertToJSON(
    'George', 'Jones', 'Brown'
));