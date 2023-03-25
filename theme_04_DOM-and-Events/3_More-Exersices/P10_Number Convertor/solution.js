function solve() {
    const inputForNumber = document.getElementById("input");
    const selectMenuFrom = document.getElementById("selectMenuFrom");
    const selectMenuTo = document.getElementById("selectMenuTo");
    const button = document.getElementsByTagName("button")[0];
    const inputForResult = document.getElementById("result");

    button.addEventListener("click", convertHandler);

    createElement("option", selectMenuTo, "Binary", "binary");
    createElement("option", selectMenuTo, "Hexadecimal", "hexadecimal");

    function convertHandler() {
        let number = Number(inputForNumber.value);

        // let fromType = selectMenuFrom.options[selectMenuFrom.selectedIndex].value;
        let toType = selectMenuTo.options[selectMenuTo.selectedIndex].value;
        console.log(toType)

        let parser = {
            binary(decimal) {
                return Number(decimal).toString(2);
            },

            hexadecimal(decimal) {
                return Number(decimal).toString(16).toUpperCase();
            }
        }

        let convertedNumber = parser[toType](number);

        inputForResult.value = convertedNumber;
    }

    function createElement(type, parent, textContent, value) {
        const newElement = document.createElement(type);
        parent.appendChild(newElement);
        newElement.textContent = textContent;
        newElement.value = value;
        return newElement;
    }

}