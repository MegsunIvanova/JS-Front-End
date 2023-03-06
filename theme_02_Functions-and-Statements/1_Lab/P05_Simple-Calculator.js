function simpleCalculator(numOne, numTwo, operator) {
    console.log(calc(operator));

    function calc(operator) {
        switch (operator) {
            case "multiply":
                return multiply();
            case "divide":
                return divide();
            case "add":
                return add();
            case "subtract":
                return subtract();
        }
    }


    function multiply() {
        return numOne * numTwo;
    }

    function divide() {
        return numOne / numTwo;
    }

    function add() {
        return numOne + numTwo;
    }

    function subtract() {
        return numOne - numTwo;
    }

}

simpleCalculator(5,
    5,
    'multiply'
    );