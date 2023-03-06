function totalAmountOfSpice(yield) {

    let extractedSpice = 0;
    let dayCounter = 0;

    while (yield >= 100) {
        dayCounter++;
        extractedSpice += yield;
        crewConsumption();
        yield -= 10;
    }

    crewConsumption();

    console.log(dayCounter);
    console.log(extractedSpice);


    function crewConsumption() {
        let crewConsumptionPerDay = 26;
        if (extractedSpice >= crewConsumptionPerDay) {
            extractedSpice -= crewConsumptionPerDay;
        }
    }
}


totalAmountOfSpice(111);
totalAmountOfSpice(450);