function flightsSchedule([flightsInput, flightsChanges, statusForPrint]) {
    let flightsByNum = flightsInput
        .map((line) => line.split(" "))
        .reduce((data, [flightNumber, destination]) => {
            data[flightNumber] = { destination };
            return data;
        }, {});

    flightsChanges
        .map((line => line.split(" ")))
        .filter(([flightNum, __s]) => flightsByNum.hasOwnProperty(flightNum))
        .forEach(([flightNumber, status]) => flightsByNum[flightNumber].status = status);


    let flightsForPrint;

    if (statusForPrint[0] === "Ready to fly") {
        flightsForPrint = Object.values(flightsByNum)
            .filter(f => !f.hasOwnProperty("status"));

        flightsForPrint.forEach(f => f.status = statusForPrint[0]);
    } else {
        flightsForPrint = Object.values(flightsByNum)
            .filter((flight) => flight.status === statusForPrint[0]);
    }

    flightsForPrint.forEach(f => console.log(`{ Destination: '${f.destination}', Status: '${f.status}' }`));

}

// flightsSchedule(
//     [['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK430 Cancelled'],
//     ['Cancelled']
//     ]
// );

flightsSchedule(
    [['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'],
    ['Ready to fly']
    ]
);