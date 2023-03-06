function getMinNum(...numbers) {
    let min = Math.min(...numbers);
    console.log(min);
}

getMinNum(2, 5, 3);

//================================other solution:

const smallestOfThree = (firstNum, secondNum, thirdNum) => Math.min(firstNum, secondNum, thirdNum);

console.log(smallestOfThree(2, 5, 3));