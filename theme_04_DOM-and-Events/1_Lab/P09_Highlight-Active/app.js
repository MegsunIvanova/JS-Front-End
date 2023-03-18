function focused() {
    const allInputs = Array.from(document.getElementsByTagName("input"));
    allInputs.forEach((input) => {
        input.addEventListener("focus", focusHandler);
        input.addEventListener("blur", blurHandler);
    });

    function focusHandler(e) {
        // this.parentNode.setAttribute("class", "focused");        
        this.parentNode.classList.add("focused");
    }

    function blurHandler(e) {
        if (this.parentNode.classList.contains("focused")) {
            this.parentNode.classList.remove("focused");
        }
    }
}