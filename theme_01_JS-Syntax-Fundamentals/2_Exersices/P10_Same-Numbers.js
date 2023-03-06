function solve(number) {
    let sum = 0;
    let isSameDigits = true;
    let digit = (number % 10);

    while (number != 0) {
        let currentDigit = (number % 10);
        sum += currentDigit;
        if (currentDigit !== digit) {
            isSameDigits = false;
        }

        number = Math.trunc(number / 10);
    }

    console.log(isSameDigits);
    console.log(sum);
}

solve(2222222);
solve(1234);