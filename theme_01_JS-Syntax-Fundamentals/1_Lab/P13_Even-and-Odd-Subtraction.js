function solve(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (const number of arr) {
        if (number % 2 === 0) {
            oddSum += number;
        } else {
            evenSum += number;
        }
    }

    console.log(oddSum - evenSum);
}

// solve([1, 2, 3, 4, 5, 6]);
// solve([3, 5, 7, 9]);