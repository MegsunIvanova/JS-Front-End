function schedule(input) {
    let meetings = {};
    for (const entry of input) {
        [day, person] = entry.split(" ");
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }
}

schedule(
    ['Monday Peter',
        'Wednesday Bill',
        'Monday Tim',
        'Friday Tim']
);