function signCheck(...numbers) {
    let result = "Positive";

    for (const number of numbers) {
        if (number < 0 && result === "Positive") {
            result = "Negative"
        } else if (number < 0 && result === "Negative") {
            result = "Positive"
        } else if (number === 0) {
            result = "Zero"
        }
    }

    console.log(result);

}

signCheck(5,
    12,
    -15
);

signCheck(-6,
    -12,
    14
);

signCheck(-1,
    -2,
    -3
);

signCheck(-5,
    1,
    1
);