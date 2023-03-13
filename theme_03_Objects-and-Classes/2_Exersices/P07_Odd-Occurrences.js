function oddOccurrences(input) {
    let words = input.split(" ");
    let wordOccurrences = {};
    let wordsInOrder = [];
    for (const word of words) {
        let key = word.toLocaleLowerCase();
        if (wordOccurrences.hasOwnProperty(key)) {
            wordOccurrences[key]++;
        } else {
            wordOccurrences[key] = 1;
            wordsInOrder.push(key);
        }
    }

    let output = [];

    for (const key of wordsInOrder) {
        if (wordOccurrences[key] % 2 !== 0) {
            output.push(key);
        }
    }

    console.log(output.join(" "));
}

oddOccurrences(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
);