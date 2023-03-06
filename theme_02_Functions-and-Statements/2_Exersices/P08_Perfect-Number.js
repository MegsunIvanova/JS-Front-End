function perfectNumber(number) {
    if (number <= 0) {
        console.log("It's not so perfect.");
        return;
    }

    let sumOfDivisors = 0;
    for (let divisor = 1; divisor < number; divisor++) {
        if (number % divisor === 0) {
            sumOfDivisors += divisor;
        }

        if (sumOfDivisors > number) {
           break;
        }
    }

    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber (6);
perfectNumber (28);
perfectNumber (1236498);