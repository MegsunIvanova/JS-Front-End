function solve() {
  const output = document.getElementById("output");
  const textArea = document.getElementById("input");

  let sentences = textArea.value.split(".");
  // sentences.splice(sentences.length - 1, 1);
  sentences.pop();

  while (sentences.length > 0) {
    let paragraphSentences = sentences.splice(0, 3)
      .map((p) => p.trimStart());
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `${paragraphSentences.join(".")}.`;
    output.appendChild(newParagraph);
  }

}