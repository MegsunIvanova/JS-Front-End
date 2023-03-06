function expenses(...input) {
    // console.log(input);
    let [lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice] = input;

    let helmetsExpenses = Math.trunc(lostFights / 2) * helmetPrice;
    let swordsExpenses = Math.trunc(lostFights / 3) * swordPrice;
    let shieldsExpenses = Math.trunc(lostFights / 6) * shieldPrice;
    let armorExpenses = Math.trunc(lostFights / 12) * armorPrice;

    let totalExpenses = helmetsExpenses + swordsExpenses + shieldsExpenses + armorExpenses;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)

}

expenses(7,
    2,
    3,
    4,
    5
);

expenses(23,
    12.50,
    21.50,
    40,
    200
);