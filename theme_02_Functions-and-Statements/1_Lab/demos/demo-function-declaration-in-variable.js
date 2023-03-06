
// printStars(6); -> the function can't be invoked before its declaration 
// when is declared as variable;

const printStars = function (count) {
    console.log("*".repeat(count));
} /*useful when we want to declare function in another function*/


printStars(4);
