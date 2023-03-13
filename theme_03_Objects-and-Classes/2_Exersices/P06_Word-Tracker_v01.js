function wordTracker(input) {
    let searchedWords = input.shift().split(" ");

    let words = {};
    for (const word of searchedWords) {
        words[word] = 0;
    }

    for (let i = 1; i < input.length; i++) {
        if (words.hasOwnProperty(input[i])) {
            words[input[i]]++;
        }
    }

    let sorted = Object.entries(words).sort((e1, e2) => {
        return e2[1] - e1[1];
    });

    for (const [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}

wordTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]

);