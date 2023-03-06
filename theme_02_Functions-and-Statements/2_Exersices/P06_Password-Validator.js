function passwordValidator(password) {

    let isValidPassword = true;

    lengthValidation(password, isValidPassword);
    onlyLettersAndDigitsValidation(password, isValidPassword);
    atLeastTwoDigitsValidation(password, isValidPassword);

    if (isValidPassword) {
        console.log("Password is valid");
    }

    function lengthValidation() {
        if (password.length < 6 || password.length > 10) {
            console.log("Password must be between 6 and 10 characters");
            isValidPassword = false;
        }
    }

    function onlyLettersAndDigitsValidation() {
        if (!/^[A-Za-z0-9]*$/.test(password)) {
            console.log("Password must consist only of letters and digits");
            isValidPassword = false;
        }
    }

    function atLeastTwoDigitsValidation() {
        let passwordWithoutDigits = password.split(/\d/).join("");

        let lengthChange = password.length - passwordWithoutDigits.length;

        if (lengthChange < 2) {
            console.log("Password must have at least 2 digits");
            isValidPassword = false;
        }
    }
}

// passwordValidator('logIn');
// passwordValidator('MyPass123');
passwordValidator('Pa$s$s1');

