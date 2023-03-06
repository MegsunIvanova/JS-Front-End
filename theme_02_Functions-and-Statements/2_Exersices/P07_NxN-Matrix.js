function printMatrix(num) {
    let matrix = [];
    for (let row = 0; row < num; row++) {
        let rowArr = [];
        for (let col = 0; col < num; col++) {
            rowArr.push(num);
        }
        console.log(rowArr.join(" "));
    }
}

printMatrix(3);
printMatrix(7);
printMatrix(2);

//================================other solution:
function createMatrix (num) {
    let arr = new Array(num).fill(new Array(num).fill(num));
    arr.forEach(row => console.log(row.join(" ")));
}

createMatrix(3);
createMatrix(7);
createMatrix(2);