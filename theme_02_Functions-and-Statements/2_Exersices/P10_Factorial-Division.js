function factorialDivision(firstNum, secondNum) {
    let result = factorial(firstNum) / factorial(secondNum);
    return result.toFixed(2);

    function factorial(num) {
        if (num === 1) {
            return num;
        }

        return num * factorial(num - 1);
    }
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));