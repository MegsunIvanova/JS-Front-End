function multiplyNumbers(...params) { //arguments will be taken as array
    let sum = 1;
    for (let index = 0; index < params.length; index++) {
        sum *= params[index];
    }

    console.log(sum);
}

function multiplyNumbers2() {
    //arguments can be taken with key word "arguments" as object
    //  and Object.values() will transform it to array
    let params = Object.values(arguments);
    let sum = 1;
    for (let index = 0; index < params.length; index++) {
        sum *= params[index];
    }

    console.log(sum);
}

multiplyNumbers(1, 2, 3);

multiplyNumbers2(1, 2, 3);

multiplyNumbers(5, 6, 7, 8, 9);

multiplyNumbers2(5, 6, 7, 8, 9);

