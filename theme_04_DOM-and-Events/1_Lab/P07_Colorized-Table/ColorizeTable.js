function colorize() {
    const evenRows = Array.from(document.querySelectorAll("table tr:nth-child(even)"));
    evenRows.forEach((tr) => {
        tr.style.backgroundColor = "Teal";
        // console.log(tr);
    });
}