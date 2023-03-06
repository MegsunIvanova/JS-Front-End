function simpleCalculator(firstNum, secondNum, operation) {
        const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;

    //declaring Object
    const operationMap = {
        add, //the key for function add() === add: add
        subtract,
        multiply,
        divide
    }

    return operationMap [operation] (firstNum, secondNum); // operationMap [operation] -> returns function

    // switch (operation) {
    //     case "add":
    //         return add(firstNum, secondNum);
    //     case "subtract":
    //         return subtract(firstNum, secondNum);
    //     case "multiply":
    //         return multiply(firstNum, secondNum);
    //     case "divide":
    //         return divide(firstNum, secondNum);
    //     default:
    //         console.log("Invalid Operation");
    //         break;
    // }
}

console.log(
    simpleCalculator(
        5,
        5,
        'multiply'
    ));