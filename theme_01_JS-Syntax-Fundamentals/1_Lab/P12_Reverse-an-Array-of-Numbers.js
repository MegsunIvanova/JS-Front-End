function solve(n, arr) {
    let reversedArr = [];

    for (let i = 0; i < n; i++) {
        reversedArr.unshift(arr[i]);
    }

    console.log(reversedArr.join(" "));
}

// solve(3, [10, 20, 30, 40, 50]);
// solve(4, [-1, 20, 99, 5]);