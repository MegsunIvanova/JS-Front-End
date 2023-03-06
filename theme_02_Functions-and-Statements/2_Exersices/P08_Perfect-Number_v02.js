function isPerfect(number) {
    let divisors = [];

    for (let currentNum = 1; currentNum <= Math.floor(number / 2); currentNum++) {
        if (number % currentNum === 0) {
            divisors.push(currentNum);
        }
    }

    let sumOfDivisors = divisors.reduce((previousVal, currentVal) => previousVal + currentVal, 0);

    if (sumOfDivisors === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isPerfect(6);
isPerfect(28);
isPerfect(1236498);