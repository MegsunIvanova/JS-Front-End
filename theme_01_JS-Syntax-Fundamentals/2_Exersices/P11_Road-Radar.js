function solve(speed, area) {
    let speedLimit;
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break;
        case 'residential':
            speedLimit = 20;
            break;
    }

    let output;
    if (speed <= speedLimit) {
        output = `Driving ${speed} km/h in a ${speedLimit} zone`;

    } else {
        let overTheLimit = speed - speedLimit;
        let status;
        if (overTheLimit <= 20) {
            status = 'speeding';
        } else if (overTheLimit <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }

        output = `The speed is ${overTheLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`;

    }

    console.log(output);
}

// solve(40, 'city');
// solve(21, 'residential');
// solve(120, 'interstate');
// solve(200, 'motorway');