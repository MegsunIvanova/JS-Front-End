function calc(num1, operator, num2) {
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "*":
            result = num1 * num2;
            break;
    }

    console.log(result.toFixed(2));
}

calc(5,
    '+',
    10
);

calc(25.5,
    '-',
    3
);