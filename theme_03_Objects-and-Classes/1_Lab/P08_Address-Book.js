function addressBook(input) {
    let addressBookMap = {};
    for (let line of input) {
       let [name, address] = line.split(":");
        addressBookMap[name] = address;
    }

    let entries = Object.entries(addressBookMap);

    entries.sort(([firsKey, firstValue], [secondKey, secondValue]) => {
        return firsKey.localeCompare(secondKey);
    });

    for ([key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}

addressBook(
    ['Tim:Doe Crossing',
        'Bill:Nelson Place',
        'Peter:Carlyle Ave',
        'Bill:Ornery Rd']
);