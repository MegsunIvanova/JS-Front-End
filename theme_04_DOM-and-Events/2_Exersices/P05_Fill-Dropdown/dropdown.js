function addItem() {
    const select = document.getElementById("menu");
    const newItemTextInput = document.getElementById("newItemText");
    const newItemValueInput = document.getElementById("newItemValue");

    const newItemText = newItemTextInput.value;
    const newItemValue = newItemValueInput.value;
    const newOption = document.createElement("option");
    newOption.textContent = newItemText;
    newOption.value = newItemValue;

    select.appendChild(newOption);
    
    newItemTextInput.value = "";
    newItemValueInput.value = "";
}