function catalogueParser(input) {

    let catalogue = input
        .reduce((data, line) => {
            let [productName, productPrice] = line.split(" : ");
            data[productName] = Number(productPrice);
            return data;
        }, {});

    let sortedCatalogue = Object.entries(catalogue)
        .sort((entryA, entryB) => entryA[0].localeCompare(entryB[0]));

    sortedCatalogue.forEach(([productName, productPrice], index) => {
        let firstLetter = productName.toUpperCase().charAt(0);
        let previousFirstLetter = sortedCatalogue[Math.max(0, index - 1)][0].toUpperCase().charAt(0);
        if (firstLetter !== previousFirstLetter || index === 0) {
            console.log(firstLetter);
        }

        console.log(`  ${productName}: ${productPrice}`);
    });

}


catalogueParser(
    [
        'Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10'
    ]
);