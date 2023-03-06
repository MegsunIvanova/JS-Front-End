function solve(multiplier) {

    for (let multiplicand = 1; multiplicand <= 10; multiplicand++) {
        let result = multiplier * multiplicand;
        console.log(`${multiplier} X ${multiplicand} = ${result}`);
    }
}

solve(5);