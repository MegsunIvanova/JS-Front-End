function solve() {
    const table = document.querySelector("table");
    // const checkDiv = document.getElementById("check");
    const output = document.querySelector("#check > p")
    const tableInputs = Array.from(document.querySelectorAll("tbody input"));
    const [checkBtn, clearBtn] = Array.from(document.getElementsByTagName("button"));

    checkBtn.addEventListener("click", checkHandler);
    clearBtn.addEventListener("click", clearHandler)

    function checkHandler() {
        if (isValid()) {
            table.style.border = "2px solid green";
            output.style.color = "green";
            output.textContent = "You solve it! Congratulations!"
        } else {
            table.style.border = "2px solid red";
            output.style.color = "red";
            output.textContent = "NOP! You are not done yet..."
        }
    }

    function isValid() {
        let matrix = [];

        for (let index = 0; index < tableInputs.length; index++) {
            const input = tableInputs[index];
            // const min = Number(input.min);
            // const max = Number(input.max);
            const value = Number(input.value);
            if (!(value >= 1 && value <= 9)) {
                return false;
            }

            let row = Math.floor(index / 9);
            let col = index % 9;
            if (col === 0) {
                matrix.push([]);
            }

            matrix[row][col] = value;

        }

        for (let row = 0; row < matrix.length; row++) {
            let rowSet = new Set();
            let colSet = new Set();
            for (let col = 0; col < matrix.length; col++) {
                rowSet.add(matrix[row][col]);
                colSet.add(matrix[col][row]);
            }

            if (rowSet.size < 9 || colSet.size < 9) {
                return false;
            }

        }

        return true;

    }

    function clearHandler() {
        table.style.border = "none";
        output.textContent = "";
        tableInputs.forEach((input) => input.value = "");
    }
}
