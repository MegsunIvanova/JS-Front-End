function wordsToUpperCase(text) {
   let words = text.split(/\W+/)
        .filter((word) => word.length > 0)
        .map((word) => word.toUpperCase())
        .join(", ");

    console.log(words);
}


wordsToUpperCase('Hi, how are you?');
wordsToUpperCase('hello');