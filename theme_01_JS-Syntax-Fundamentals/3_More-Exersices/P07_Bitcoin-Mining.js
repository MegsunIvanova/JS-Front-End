function miningData(goldByDays) {
    let firstDayOFPurchase;
    let totalBitcoins = 0;
    let money = 0;

    for (let i = 0; i < goldByDays.length; i++) {
        let currentDay = i + 1;
        let goldDigged = goldByDays[i];
        if (currentDay % 3 === 0) {
            goldDigged *= 0.70;
        }

        money += goldDigged * 67.51;
        if (money >= 11949.16) {
            if (totalBitcoins === 0) {
                firstDayOFPurchase = currentDay;
            }

            totalBitcoins += Math.trunc(money / 11949.16);
            money %= 11949.16;
        }

    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDayOFPurchase}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}


// miningData([100, 200, 300]);
// miningData([50, 100]);
miningData([3124.15, 504.212, 2511.124]);