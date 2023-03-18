const html = document.getElementsByTagName("html")[0];
console.log(html);
// html.innerHTML = "";

// const liElements = document.getElementsByTagName("li"); //HTMLCollection
const liElements = document.getElementsByClassName("list"); //HTMLCollection
// const liElements = document.querySelectorAll("ul>li"); //NodeList
const liItemsArr = Array.from(liElements);

const firstLi = liElements[0];

console.log(firstLi.parentElement);
console.log(firstLi.parentNode);
//difference: parent Element returns null if the parent is not an element node, 
//that is the main difference between parentElement and parentNode. 
//In many cases one can use anyone of them, in most cases, they are the same.

console.log(firstLi.parentElement.parentElement);
console.log(firstLi.children);
console.log([...firstLi.children]); // return array

const thirdLi = liElements[2];
thirdLi.textContent += "(This is a DOM Manipulation)";
console.log(liElements);

for (const li of liElements) {
  console.log(li.id);
  li.setAttribute("class", "list-item");
}

// const textInput = document.getElementById("text-input");
const textInput = document.querySelector("#text-input");
console.log(textInput.value);
textInput.value = "Changed Value";
textInput.textContent = "Changed Again"; //not working

for (const li of liElements) {
  // li.innerHTML += "<p>Custom Paragraph</p>";
  // li.style.backgroundColor = "red";
  li.innerHTML = "<p>My Paragraph</p>"
}

//create, append, remove and replace DOM elements example:
//these operations are slow
liItemsArr
  .forEach((li) => {
    const paragraph = document.createElement('p');
    const h1 = document.createElement("h1");
    h1.textContent = "This is a header"
    paragraph.textContent = "This is a new Paragraph";
    // li.appendChild(paragraph); //will add new element to the end
    li.prepend(paragraph); //will add new element to the start
    // li.removeChild(paragraph);
    li.replaceChild(h1, paragraph);
  });

//DOM Events:
const btnElement = document.getElementById("btn");
btnElement.addEventListener("click", clickHandler);
// btnElement.addEventListener("mouseover", clickHandler);
// btnElement.addEventListener("mouseout", clickHandler);
textInput.addEventListener("keypress", clickHandler);

function clickHandler(e) {
  console.log(e.target);
}

function keypressHandler (e) {
  console.log(e.target);
}

