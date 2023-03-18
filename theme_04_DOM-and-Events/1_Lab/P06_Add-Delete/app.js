function addItem() {
    const ulContainer = document.getElementById("items");
    let input = document.getElementById('newItemText');
    let newLi = document.createElement("li");
    const newAnchor = document.createElement("a");
    newLi.textContent = input.value;
    newAnchor.textContent = "[Delete]";
    newAnchor.setAttribute("href", "#");
    newAnchor.addEventListener("click", deleteHandler);
    newLi.appendChild(newAnchor);
    ulContainer.appendChild(newLi);
    //clearing the input:
    input.value = '';

    function deleteHandler(e) {
        // const liItem = e.currentTarget.parentNode;
        // liItem.remove();

        const anchor = this; //= e.currentTarget;
        anchor.parentElement.remove();
    }
}

// function addItem() {
//     let textToAdd = document.getElementById('newItemText').value;
//     if (textToAdd.length === 0) {
//         return;
//     }
//     let newLi = document.createElement("li");
//     newLi.appendChild(document.createTextNode(textToAdd));

//     let anchor = document.createElement("a");
//     anchor.appendChild(document.createTextNode("[Delete]"));
//     anchor.href = "#";
//     anchor.addEventListener("click", deleteLi);
//     newLi.appendChild(anchor);

//     document.getElementById("items").appendChild(newLi);
//     //clearing the input:
//     document.getElementById('newItemText').value = '';

//     function deleteLi(event) {
//         // const targetAnchor = event.currentTarget;
//         // let toDelete = targetAnchor.parentNode;
//         // toDelete.parentNode.removeChild(toDelete);
//         newLi.remove();
//     }
// }