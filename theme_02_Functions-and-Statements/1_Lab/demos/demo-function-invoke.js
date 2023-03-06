const printStars = function (count) {
    return "*".repeat(count);
}

//functions can be invoked many times
for (let index = 0; index < 20; index++) {
    console.log(
        printStars(5)
    );
}
