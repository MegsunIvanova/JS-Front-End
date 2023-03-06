function sumDigits(number) {
    let numberAsString = number.toString();
    let sum = 0;
    for (const digitAsString of numberAsString) {
        let digit = Number(digitAsString);
        sum += digit;
    }

    console.log(sum);
}

sumDigits(245678);