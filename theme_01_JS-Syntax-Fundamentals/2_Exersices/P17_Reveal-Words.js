function revealWords(input, expression) {

    let data = input.split(", ");
    data.sort((wordA, wordB) => wordB.length - wordA.length);
    // console.log(data);

    data.forEach((word) => {
        expression = expression.replace("*".repeat(word.length), word)
    });

    console.log(expression);


}

// revealWords('great',
//     'softuni is ***** place for learning new programming languages'
// );

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)