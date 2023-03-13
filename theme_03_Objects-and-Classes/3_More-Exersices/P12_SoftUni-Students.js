function softUniStudents(input) {
    let courses = {};
    input.forEach(line => lineParser(line));

    Object.values(courses)
        .sort((courseA, courseB) => courseB.students.length - courseA.students.length)
        .forEach(course => {
            console.log(`${course.name}: ${course.capacity} places left`);
            course.students
                .sort((studentA, studentB) => studentB.credits - studentA.credits)
                .forEach(student => console.log(`--- ${student.credits}: ${student.username}, ${student.email}`));
        });


    function lineParser(line) {
        if (line.includes(": ")) {
            let [course, capacity] = line.split(": ");
            capacity = Number(capacity);
            return addCourse(course, capacity);

        } else {
            let lineRegexExpr = /(?<username>\w+)\[(?<credits>[0-9]+)] with email (?<email>\w+@\w+.\w+) joins (?<course>[\w\W]+)/gm;
            //"{username}[{credits count}] with email {email} joins {course name}" 
            let result = lineRegexExpr.exec(line);

            let username = result.groups.username;
            let credits = result.groups.credits;
            let email = result.groups.email;
            let course = result.groups.course;

            return addStudent(username, credits, email, course);
        }
    }

    function addCourse(courseName, capacity) {
        if (courses.hasOwnProperty(courseName)) {
            courses[courseName].capacity += capacity;
        } else {
            courses[courseName] = { name: courseName, capacity, students: [] };
        }
    }

    function addStudent(username, credits, email, course) {
        if (courses.hasOwnProperty(course) && courses[course].capacity > 0) {
            let student = { username, credits, email };
            courses[course].students.push(student);
            courses[course].capacity--;
        }
    }

}

softUniStudents(
    ['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']
);