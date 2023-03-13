function piccolo(input) {
    let carNumbers = [];

    for (const line of input) {
        let [command, carNum] = line.split(", ");
        if (command === "IN" && !carNumbers.includes(carNum)) {
            carNumbers.push(carNum);
        } else if (command === "OUT" && carNumbers.includes(carNum)) {
            let index = carNumbers.indexOf(carNum);
            carNumbers.splice(index, 1);
        }
    }
   
    if (carNumbers.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        carNumbers
            .sort((c1, c2) => c1.localeCompare(c2))
            .forEach(c => console.log(c));
    }
}

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU']

);

piccolo(
    ['IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'OUT, CA1234TA']

);