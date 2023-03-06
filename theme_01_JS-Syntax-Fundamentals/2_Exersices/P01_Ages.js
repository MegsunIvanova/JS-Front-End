function solve(age) {
    let result;
    if (0 <= age && age <= 2) {
        result = "baby";
    } else if (2 < age && age <= 13) {
        result = "child";
    } else if (13 < age && age <= 19) {
        result = "teenager";
    } else if (19 < age && age <= 65) {
        result = "adult";
    } else if (65 < age) {
        result = "elder";
    } else {
        result = "out of bounds";
    }

    console.log(result);
}

solve(20);
solve(1);
solve(100);
solve(-1);

