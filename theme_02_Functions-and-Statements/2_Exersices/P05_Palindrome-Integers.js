function palindromeChecker(numbers) {
    for (const num of numbers) {
        console.log(isPalindrome(num));
    }

    function isPalindrome(number) {
        let numberAsText = "" + number;
        let reversed = numberAsText.split("").reverse().join("");
        return numberAsText === reversed;
    }
}

palindromeChecker([123, 323, 421, 121]);

//================================other solution:
function palindromeInteger(numbers) {
    const isPalindrome = (num) => Number([...num.toString()].reverse().join("")) === num;
    return numbers
        .map(isPalindrome)
        .join ("\n");

    // numbers
    //     .forEach((num) => {
    //         console.log(isPalindrome(num));
    //     });

    // function isPalindrome(num) {
    //     let reversed = Number([...num.toString()].reverse().join(""));
    //     return num === reversed;
    // }
}

console.log(palindromeInteger([123, 323, 421, 121]));