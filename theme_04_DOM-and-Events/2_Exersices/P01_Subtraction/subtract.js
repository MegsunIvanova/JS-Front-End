function subtract() {
    const firstInput = document.getElementById("firstNumber");
    const secondInput = document.getElementById("secondNumber");
    const resultDiv = document.getElementById("result");

    let result = Number(firstInput.value) - Number(secondInput.value);
    resultDiv.textContent = result;
}