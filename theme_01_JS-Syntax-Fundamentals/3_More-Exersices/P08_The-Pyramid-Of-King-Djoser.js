function materials(step, increment) {
    let layerCount = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;

    while (step > 0) {
        layerCount++;
        let total = step ** 2;
        let outer = 4 * step - 4;
        let inner = total - outer;
        if (step <= 2) {
            gold += total;

        } else {
            stone += inner;
            
            if (layerCount % 5 === 0) {
                lapisLazuli += outer;
            } else {
                marble += outer;
            }

        }

        step -= 2;
    }

    console.log(`Stone required: ${Math.ceil(stone * increment)}`);
    console.log(`Marble required: ${Math.ceil(marble * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(layerCount * increment)}`);

}


// materials(11,
//     1
// );

// materials(11,
//     0.75
// );

// materials(12,
//     1
// );

materials(23,
    0.5
);