function printNumbers(number) {
    console.log(number);
    if (number > 0) {
        printNumbers(number - 1); //function invokes itself
    }

}

printNumbers(10);