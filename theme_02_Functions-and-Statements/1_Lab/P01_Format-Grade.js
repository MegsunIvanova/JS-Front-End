function formatGrade(grade) {
    let output = "";
    if (grade >= 2 && grade < 3) {
        output = getGradeFormat("Fail", grade);
    } else if (grade >= 3 && grade < 3.50) {
        output = getGradeFormat("Poor", grade);
    } else if (grade >= 3.50 && grade < 4.50) {
        output = getGradeFormat("Good", grade);
    } else if (grade >= 4.50 && grade < 5.50) {
        output = getGradeFormat("Very good", grade);
    } else if (grade >= 5.50 && grade < 6) {
        output = getGradeFormat("Excellent", grade);
    }

    console.log(output);

    function getGradeFormat(text, grade) {
        if (grade < 3) {
            return `${text} (2)`;
        }
        return `${text} (${grade.toFixed(2)})`;
    }
}

// formatGrade(3.33);
// formatGrade(4.50);
// formatGrade(2.99);

function printCertificate(grade, names) {
    if (grade < 3) {
        console.log("Student does not qualify");
    } else {
        console.log("~~~-   {@}   -~~~");
        console.log("~- Certificate -~");
        console.log("~~~-  ~---~  -~~~");
        console.log(names.join(" "));
        formatGrade(grade);
    }
}

printCertificate(3.33, ['Peter', 'Carter']);
printCertificate(4.50, ['Peter', 'Carter']);
printCertificate(2.99, ['Peter', 'Carter']);