function generateReport() {
    const inputsThArr = Array.from(document.querySelectorAll("th input[type='checkbox']"))
    const thsTextContent = Array.from(document.getElementsByTagName("th"))
        .map(th => th.textContent.trim().toLowerCase());
    const tableRows = Array.from(document.querySelectorAll("tbody tr"));
    const outputTextarea = document.getElementById("output");

    let indicesOfChecked = [];
    inputsThArr
        .filter(input => input.checked)
        .forEach(input => indicesOfChecked.push(inputsThArr.indexOf(input)));

    let objectsFromTd = [];  
    for (const tr of tableRows) {        
        let tdsTextContent = Array.from(tr.children)
            .map(td => td.textContent);
        let tdObject = {};
        indicesOfChecked.forEach(index => {
            let key = thsTextContent [index];
            let value = tdsTextContent [index];
            tdObject[key] = value;
        });
        objectsFromTd.push(tdObject);
    }

    outputTextarea.value = JSON.stringify(objectsFromTd);

}