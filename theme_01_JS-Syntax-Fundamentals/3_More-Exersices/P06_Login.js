function login(input) {
    let username = input[0];
    let password = username.split("").reverse().join("");

    for (i = 1; i < input.length; i++) {
        if (input[i] === password) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (i < 4) {
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}

login(['Acer','login','go','let me in','recA']);
login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);