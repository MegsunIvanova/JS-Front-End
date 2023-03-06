function printTotalPrice(product, quantity) {
    let totalPrice = getUnitPrice(product) * quantity;
    console.log (totalPrice.toFixed(2));

    function getUnitPrice(product) {
        switch (product) {
            case "coffee":
                return 1.50;
            case "water":
                return 1.00;
            case "coke":
                return 1.40;
            case "snacks":
                return 2.00;
        }
    }
}

printTotalPrice("water", 5);
printTotalPrice("coffee", 2);