function validate() {
    const emailInput = document.getElementById("email");
    emailInput.addEventListener("change", changeValidation);

    function changeValidation() {
        let email = emailInput.value;
        let regExpr = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (email.match(regExpr)) {
            emailInput.classList.remove("error");
        } else {
            emailInput.classList.add("error");
        }      
    }

}