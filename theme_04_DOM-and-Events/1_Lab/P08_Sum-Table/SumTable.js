function sumTable() {
    const secondTds = Array.from(document.querySelectorAll("table tr:not(:last-of-type) td:nth-child(2)"));
    let result = secondTds
        .map((td) => Number(td.textContent))
        .reduce((sum, num) => sum + num, 0);

    const tdWithSum = document.getElementById("sum");
    tdWithSum.textContent = result;
}