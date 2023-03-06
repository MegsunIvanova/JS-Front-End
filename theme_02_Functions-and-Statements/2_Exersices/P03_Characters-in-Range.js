function printCharsBetween(symbolOne, symbolTwo) {
    let from = Math.min(symbolOne.charCodeAt(0), symbolTwo.charCodeAt(0));
    let to = Math.max(symbolOne.charCodeAt(0), symbolTwo.charCodeAt(0));
    let output = [];

    for (let i = from + 1; i < to; i++) {
        output.push(String.fromCharCode(i));
    }

    console.log(output.join(" "));

}

printCharsBetween('a', 'd');
printCharsBetween('#', ':');
printCharsBetween('C', '#');

//================================other solution:

function charactersInRange(firstChar, secondChar) {
    const getFirstCharAsciiCode = (char) => char.charCodeAt(0);
    let firstCharAscii = getFirstCharAsciiCode(firstChar);
    let secondCharAscii = getFirstCharAsciiCode(secondChar);

    let minAscii = Math.min(firstCharAscii, secondCharAscii);
    let maxAscii = Math.max(firstCharAscii, secondCharAscii);

    let chars = [];
    for (let asciiCode = minAscii + 1; asciiCode < maxAscii; asciiCode++) {
        chars.push(String.fromCharCode(asciiCode));
    }

    return chars.join(" ");
}

console.log(charactersInRange('a', 'd'));
console.log(charactersInRange('#', ':'));
console.log(charactersInRange('C', '#'));