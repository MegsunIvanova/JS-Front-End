function schoolRegister(input) {
    let register = input.reduce((data, line) => {
        let [name, grade, avgScore] = getNameGradeScoreArr(line);
        avgScore = Number(avgScore);
        grade = Number(grade) + 1;

        if (avgScore >= 3) {
            if (!data.hasOwnProperty(grade)) {
                data[grade] = {
                    students: [],
                    sumOfAvgScore: 0.00,

                    get classAvgScore() {
                        return this.students.length === 0 ? 0 : this.sumOfAvgScore / this.students.length;
                    },

                    addStudent(name, avgScore) {
                        this.students.push(name);
                        this.sumOfAvgScore += avgScore;
                    },
                }
            }

            data[grade].addStudent(name, avgScore);

        }

        return data;
    }, {});

    let sortedGrades = Object.keys(register).sort((g1, g2) => g1 - g2);



    let sortedOutput = sortedGrades.reduce((data, grade) => {
        let gradeData = register[grade];
        let listOfStudents = gradeData.students.join(", ");
        let avgAnnualScoreForClass = gradeData.classAvgScore.toFixed(2);
        let line = [];
        line.push(`${grade} Grade`);
        line.push(`List of students: ${listOfStudents}`);
        line.push(`Average annual score from last year: ${avgAnnualScoreForClass}`);
        data.push(line.join("\n"));
        return data;
    }, []);

    console.log(sortedOutput.join("\n\n"));

    function getNameGradeScoreArr(line) {
        return (line.replace("Student name: ", "")
            .replace(", Grade:", "")
            .replace(", Graduated with an average score:", ""))
            .split(" ");
    }

}

schoolRegister(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]

);