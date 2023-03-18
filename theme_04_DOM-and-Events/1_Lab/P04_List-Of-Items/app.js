function addItem() {
  const ulContainer = document.getElementById("items");
  let input = document.getElementById('newItemText');
  let newLi = document.createElement("li");
  newLi.textContent = input.value;
  ulContainer.appendChild(newLi);
  //clearing the input:
  input.value = '';
}

// function addItem() {
//     let text = document.getElementById('newItemText').value;
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(text));
//     document.getElementById("items").appendChild(li);
//       //clearing the input:
//     document.getElementById('newItemText').value = '';
//   }

// function addItem() {
//     let ulParent = document.getElementById("items");
//     let newLi = document.createElement("li");
//     let inputNewText = document.getElementById("newItemText");
//     let text = inputNewText.value;
//     newLi.textContent = text;
//     ulParent.appendChild(newLi);
// }