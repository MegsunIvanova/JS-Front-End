function solve() {
  const text = document.getElementById("text").value;
  const namingConvention = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");

  if (namingConvention === "Camel Case") {
    result = camelCase(text);
  } else if (namingConvention === "Pascal Case") {
    result = pascalCase(text);
  } else {
    result = "Error!"
  }

  resultElement.textContent = result;

  function pascalCase(text) {
    return text.split(" ")
      .map((word) => {
        let firstLetter = word.slice(0, 1).toUpperCase();
        let otherLetters = word.slice(1).toLowerCase();
        return firstLetter + otherLetters;
      }).join("");
  }

  function camelCase(text) {
    let arr = text.split(" ");
    let firstWord = arr.shift().toLowerCase();
    let otherWords = pascalCase(arr.join(" "));

    return firstWord + otherWords;
  }
}