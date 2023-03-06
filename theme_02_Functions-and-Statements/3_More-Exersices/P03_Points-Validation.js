function pointsValidation([x1, y1, x2, y2]) {
    console.log(textOutput(x1, y1, 0, 0));
    console.log(textOutput(x2, y2, 0, 0));
    console.log(textOutput(x1, y1, x2, y2));

    function isValidDistance(x1, y1, x2, y2) {
        let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return Number.isInteger(distance);
    }

    function textOutput(x1, y1, x2, y2) {
        if (isValidDistance(x1, y1, x2, y2)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }
}

// pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);