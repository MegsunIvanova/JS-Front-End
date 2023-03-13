function garageParser(input) {
    let garage = {};
    for (const line of input) {
        let [garageNum, carInfo] = line.split(" - ");
        garageNum = Number(garageNum);
        if (!garage.hasOwnProperty(garageNum)) {
            garage[garageNum] = [];
        }

        let car = {};

        let carProperties = carInfo.split(", ");
        for (const property of carProperties) {
            let [key, value] = property.split(": ");
            car[key] = value;
        }

        garage[garageNum].push(car);
    }

    for (const key in garage) {
        console.log(`Garage № ${key}`);
        let cars = garage[key];
        cars.forEach(car => console.log(carInfo(car)));
    }

    function carInfo(car) {
        let carArr = Object.entries(car);
        let output = carArr
            .map(([key, value]) => `${key} - ${value}`)
            .join(", ");
        return "--- " + output;
    }

}

garageParser(
    ['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
);