function loadingBar(number) {
    const bar = function () {
        let loaded = "%".repeat(number / 10);
        let notComplete = ".".repeat(10 - number / 10);

        return `[${loaded}${notComplete}]`;
    }

    if (number === 100) {
        console.log("100% Complete!");
        console.log(bar());
    } else {
        console.log(`${number}% ${bar()}`);
        console.log("Still loading...");
    }
}

// loadingBar(0);
// loadingBar(30);
// loadingBar(50);
loadingBar(100);
