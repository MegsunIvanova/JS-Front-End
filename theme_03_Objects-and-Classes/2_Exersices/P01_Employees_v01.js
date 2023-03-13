function parseEmployees(input) {
    let employees = [];
    for (const employeeName of input) {
        let personalNum = employeeName.length;
        employees.push({ employeeName, personalNum });
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.employeeName} -- Personal Number: ${employee.personalNum}`);
    }
}

parseEmployees(
    [
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
    ]
);