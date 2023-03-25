function editElement(htmlElement, textToReplace, newText) {
    let currentTextContent = htmlElement.textContent;

    let newContent = currentTextContent;
    while (newContent.includes(textToReplace)) {
        newContent = newContent.replace(textToReplace, newText);
    }

    htmlElement.textContent = newContent;
}