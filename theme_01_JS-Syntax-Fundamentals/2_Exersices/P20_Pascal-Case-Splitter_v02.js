function splitPascalCase(text) {
    let regex = /(?=[A-Z])/;
    let output = text.split(regex).join(", ");
    console.log(output);
}

splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitPascalCase('HoldTheDoor');
splitPascalCase('ThisIsSoAnnoyingToDo');