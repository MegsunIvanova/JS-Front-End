// function splitPascalCase(text) {

//     let pattern = /([A-Z][a-z]+)/g;

//     let words = [...text.matchAll(pattern)]
//         .map((arr) => arr[0])
//         .join(", ");
//     console.log(words);
// }


function splitPascalCase(text) {
    let output = "";

    for (const symbol of text) {
        let charCode = symbol.charCodeAt(0);
        if (charCode >= 65 && charCode <= 92 && output.length > 0) {
            output += ", ";
        }

        output += symbol;
    }

    console.log(output);
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitPascalCase('HoldTheDoor');
splitPascalCase('ThisIsSoAnnoyingToDo');