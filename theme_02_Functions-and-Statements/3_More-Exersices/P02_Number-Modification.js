function numberModification(number) {
    while (getAverage(number) <= 5) {
        number = number * 10 + 9;
    }

    return number;

    function getAverage(num) {
        let digitsArr = ("" + num)
            .split("")
            .map((n) => n * 1);

        let average = digitsArr
            .reduce((a, b) => a + b, 0) / digitsArr.length;

        return average;
    }
}

console.log (numberModification(101));
console.log (numberModification(5835));