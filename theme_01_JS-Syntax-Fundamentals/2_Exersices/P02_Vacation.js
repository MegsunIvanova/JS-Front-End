function calcTotalPrice(numberOfPeople, groupType, weekday) {

    let totalPrice = 0;

    if (groupType === "Students") {
        if (weekday === "Friday") {
            totalPrice = 8.45 * numberOfPeople;
        } else if (weekday === "Saturday") {
            totalPrice = 9.80 * numberOfPeople;
        } else if (weekday === "Sunday") {
            totalPrice = 10.46 * numberOfPeople;
        }

        if (numberOfPeople >= 30) {
            totalPrice *= 0.85;
        }

    } else if (groupType === "Business") {
        if (numberOfPeople >= 100) {
            numberOfPeople -= 10;
        }

        if (weekday === "Friday") {
            totalPrice = 10.90 * numberOfPeople;
        } else if (weekday === "Saturday") {
            totalPrice = 15.60 * numberOfPeople;
        } else if (weekday === "Sunday") {
            totalPrice = 16.00 * numberOfPeople;
        }


    } else if (groupType === "Regular") {
        if (weekday === "Friday") {
            totalPrice = 15.00 * numberOfPeople;
        } else if (weekday === "Saturday") {
            totalPrice = 20.00 * numberOfPeople;
        } else if (weekday === "Sunday") {
            totalPrice = 22.50 * numberOfPeople;
        }


        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
            totalPrice *= 0.95;
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

calcTotalPrice(30,
    "Students",
    "Sunday"
);

calcTotalPrice(40,
    "Regular",
    "Saturday"
);