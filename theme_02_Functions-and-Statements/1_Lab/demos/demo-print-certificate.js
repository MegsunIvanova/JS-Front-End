function printCertificate(grade, [firstName, lastName]) {
    if (getGradeAsText() !== "Fail (2)") {
        printHeader();
        printNames();
        printGrade();
    } else {
        console.log("Student does not qualify");
    }

    function printHeader() {
        console.log("~~~-   {@}   -~~~");
        console.log("~- Certificate -~");
        console.log("~~~-  ~---~  -~~~");
    }

    function printNames() {
        console.log(`${firstName} ${lastName}`);
    }


    function printGrade() {
        console.log(getGradeAsText())
    }

    function getGradeAsText() {
        if (grade >= 5.50) {
            return `Excellent (${formatToSecondDecimal()})`;
        } else if (grade < 5.50 && grade >= 4.50) {
            return `Very good (${formatToSecondDecimal()})`;
        } else if (grade < 4.50 && grade >= 3.50) {
            return `Good (${formatToSecondDecimal()})`;
        } else if (grade < 3.50 && grade >= 3) {
            return `Poor (${formatToSecondDecimal()})`;
        }

        return "Fail (2)";
    }

    function formatToSecondDecimal() {
        return grade.toFixed(2);
    }

}


printCertificate(4.50, ['Peter', 'Carter']);
printCertificate(2.99, ['Kiril', 'Kirilov']);
