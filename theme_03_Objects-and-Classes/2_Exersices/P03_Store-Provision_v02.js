function storeProvision(stock, orderedProducts) {
    let combined = [...stock, ...orderedProducts]; //destructing two arr and combine it to one
    let store = combined.reduce((data, currentValue, index) => {
        if (index % 2 === 0) {
            if (!data.hasOwnProperty(currentValue)) {
                data[currentValue] = 0;
            }
        } else {
            let value = Number(currentValue);
            let previousProp = combined[index - 1];
            data[previousProp] += value;
        }

        return data;
    }, {});

    // console.log(store);

    for (const key in store) {
        console.log(`${key} -> ${store[key]} `)
    }
}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]

);