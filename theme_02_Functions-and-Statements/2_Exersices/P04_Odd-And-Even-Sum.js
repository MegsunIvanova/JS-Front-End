function oddAndEvenSum(number) {
    let digits = ("" + number).split("");
    let oddSum = 0;
    let evenSum = 0;

    for (const digit of digits) {

        if ((digit * 1) % 2 !== 0) {
            oddSum += (digit * 1);
        } else {
            evenSum += (digit * 1);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);