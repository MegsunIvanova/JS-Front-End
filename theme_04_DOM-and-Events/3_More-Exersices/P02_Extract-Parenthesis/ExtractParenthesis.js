function extract(content) {
    const element = document.getElementById(content);
    let textContent = element.textContent;
    let regExpr = /\(([^)]+)\)/g;
    let matches = textContent.match(regExpr);
    let result = matches
        .map((word) => word.slice(1, word.length - 1))
        .join("; ")
    return result;
}