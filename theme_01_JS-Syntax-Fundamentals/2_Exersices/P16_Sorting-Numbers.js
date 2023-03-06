function solve(numbers) {
    let sortedAsc = [...numbers].sort((aNum, bNum) => aNum - bNum);
    let result = [];


    while (sortedAsc.length > 0) {
        result.push(sortedAsc.shift());
        if (sortedAsc.length == 0) {
            break;
        }
        result.push(sortedAsc.pop());
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 4]));