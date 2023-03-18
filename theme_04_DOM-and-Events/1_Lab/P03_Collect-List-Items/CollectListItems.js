function extractText() {
    const itemNodes = Array.from(document.querySelectorAll("#items > li"));
    const textarea = document.getElementById("result");

    itemNodes
        .forEach((li) => {
            textarea.textContent += li.textContent + "\n"
        });
}

// function extractText() {
//     const itemNodes = document.querySelectorAll("ul#items li");
//     const textarea = document.getElementById("result");

//     for (let node of itemNodes) {
//         textarea.value += node.textContent + "\n";
//     }

// }

// function extractText() {
//     const elements = document.querySelectorAll("ul#items li");
//     const elementsArr = [...elements];
//     const textareaElement = document.getElementById("result");
//     textareaElement.value = elementsArr.map(node => node.textContent).join("\n");

// }