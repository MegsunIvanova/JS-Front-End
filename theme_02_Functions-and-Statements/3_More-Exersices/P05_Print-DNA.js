function printDNA(length) {
    let letters = [..."ATCGTTAGGG"];

    let typesModel = [rowTypeOne, rowTypeTwo, rowTypeThree, rowTypeTwo];

    for (let i = 0; i < length; i++) {
        let indexOfType = i % typesModel.length;
        console.log(typesModel[indexOfType](i));
    }


    function rowTypeOne(index) {
        [firstLetter, secondLetter] = getLetters(index);
        return `**${firstLetter}${secondLetter}**`;
    }

    function rowTypeTwo(index) {
        [firstLetter, secondLetter] = getLetters(index);
        return `*${firstLetter}--${secondLetter}*`;
    }

    function rowTypeThree(index) {
        [firstLetter, secondLetter] = getLetters(index);
        return `${firstLetter}----${secondLetter}`;
    }

    function getLetters(index) {
        index *= 2;
        if (index >= letters.length) {
            index %= letters.length;
        }

        let firstLetter = letters[index];
        let secondLetter = letters[index + 1];

        return [firstLetter, secondLetter];
    }

}

// printDNA(4);
printDNA(11);
