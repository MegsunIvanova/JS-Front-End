function addAndSubtract(numOne, numTwo, numThree) {
    function sum(x, y) {
        return x + y;
    }

    function subtract(x, y) {
        return x - y;
    }

    let sumOfFirstTwo = sum(numOne, numTwo);
    let result = subtract(sumOfFirstTwo, numThree);
    console.log(result);

}

addAndSubtract(23, 6, 10);

//================================other solution:

const calculations = (firstNum, secondNum, thirdNum) => {
    const calcSum = (a, b) => a + b;
    const calcSubtract = (mySum, num) => mySum - num;

    return calcSubtract(calcSum(firstNum, secondNum), thirdNum);
}

console.log(calculations(23, 6, 10));