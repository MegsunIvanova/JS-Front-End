function printCertificate(grade, [firstName, lastName], printHeader, printNames, printGrade) {
    if (getGradeAsText(grade) !== "Fail (2)") {
        printHeader();
        printNames(firstName, lastName);
        printGrade(grade);
    } else {
        console.log("Student does not qualify");
    }
}

function printHeader() {
    console.log("~~~-   {@}   -~~~");
    console.log("~- Certificate -~");
    console.log("~~~-  ~---~  -~~~");
}

function printNames(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}


function printGrade(grade) {
    console.log(getGradeAsText(grade))
}

function getGradeAsText(grade) {
    if (grade >= 5.50) {
        return `Excellent (${formatToSecondDecimal(grade)})`;
    } else if (grade < 5.50 && grade >= 4.50) {
        return `Very good (${formatToSecondDecimal(grade)})`;
    } else if (grade < 4.50 && grade >= 3.50) {
        return `Good (${formatToSecondDecimal(grade)})`;
    } else if (grade < 3.50 && grade >= 3) {
        return `Poor (${formatToSecondDecimal(grade)})`;
    }

    return "Fail (2)";
}

function formatToSecondDecimal(grade) {
    return grade.toFixed(2);
}



printCertificate(
    4.50, 
    ['Peter', 'Carter'],
    printHeader,
    printNames,
    printGrade
    );
// printCertificate(2.99, ['Kiril', 'Kirilov']);

//==================================================

let numbers =[1,2,3,4,5,6,7];

let mappedNumbers = numbers
    .map(multiplyByTwo); //first-class functions can be passed directly
console.log (mappedNumbers); 

function multiplyByTwo (value) {
    return value * 2;
}