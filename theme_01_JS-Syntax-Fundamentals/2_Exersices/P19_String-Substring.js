// function stringSubstring(word, text) {
//     wordToLowerCase = word.toLowerCase();
//     textToLowerCase = text.toLowerCase();



//     if (textToLowerCase.includes(wordToLowerCase)) {
//         // console.log(text.substring(index, index + word.length));
//         console.log(word);
//     } else {
//         console.log(`${word} not found!`);
//     }

// }


function stringSubstring(word, text) {
    let wordsFromText = text.split(" ");

    let output = `${word} not found!`;
    for (const currentWord of wordsFromText) {
        if (currentWord.toLowerCase() === word.toLowerCase()) {
            output = word;
            break;
        }
    }

    console.log(output);

}


stringSubstring('javascript',
    'JavaScript is the best programming language'
);

stringSubstring('python',
    'JavaScript is the best programming language'
);