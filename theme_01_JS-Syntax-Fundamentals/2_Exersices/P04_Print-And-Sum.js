function printAndSum(start, end) {
    let output = [];
    let sum = 0;

    for (let currentNum = start; currentNum <= end; currentNum++) {
        output.push(currentNum);
        sum += currentNum;
    }

    console.log(`${output.join(" ")}`);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);