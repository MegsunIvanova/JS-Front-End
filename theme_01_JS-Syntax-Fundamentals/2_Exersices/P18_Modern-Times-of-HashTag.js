function modernTimes(text) {
    let words = text.split(" ");

    let result = [];
    for (const word of words) {
        if (word.startsWith("#") && word.length > 1 && checkIfWordIsValid(word)) {
            result.push(word.slice(1));
        }
    }

    console.log(result.join("\n"));


    function checkIfWordIsValid(myWord) {
        let myWordToLowerCase = myWord.toLowerCase().slice(1);
        let isValid = true;

        for (const symbol of myWordToLowerCase) {
            let asciiCode = symbol.charCodeAt(0);
            if (!(asciiCode >= 97 && asciiCode <= 122)) {
                isValid = false;
                break;
            }
        }

        return isValid;
    }
}


// modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');

modernTimes('The symbol # is known #variously in English-speaking #regions as the #number sign')
