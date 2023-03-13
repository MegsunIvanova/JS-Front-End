function sequences(jsonArrays) {
    let arrays = [];
    let arraysAsStrings = [];
    for (const jsonArr of jsonArrays) {
        let sortedArr = JSON.parse(jsonArr).sort((n1, n2) => n2 - n1);

        if (!arraysAsStrings.includes(sortedArr.join(" | "))) {
            arrays.push(sortedArr);
            arraysAsStrings.push(sortedArr.join(" | "));
        }
    }

    let sortedArrays = arrays.sort((a, b) => a.length - b.length);

    sortedArrays.forEach((arr) => console.log(`[${arr.join(", ")}]`));
}

sequences(
    ["[7.14, 7.180, 7.339, 80.09900]",
        "[7.339, 80.0990, 7.140000, 7.18]",
        "[7.339, 7.180, 7.14, 80.099]"]

)