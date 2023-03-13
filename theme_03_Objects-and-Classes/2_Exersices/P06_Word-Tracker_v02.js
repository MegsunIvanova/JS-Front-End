function wordTracker(input) {
    let searchedWords = input.shift().split(" ");
    let words = {};
    for (const word of searchedWords) {
        let count = input.filter((w) => w === word).length;
        words[word] = count;
    }

    let sortedWords = Object.entries(words).sort((e1, e2) => {
        return e2[1] - e1[1];
    });

    for (const [word, count] of sortedWords) {
        console.log(`${word} - ${count}`);
    }
}

wordTracker(
    [
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]

);