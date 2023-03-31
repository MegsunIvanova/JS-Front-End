function solve(input) {
    let items = (input.shift()).split("!");

    let commandParser = {
        Urgent: urgent,
        Unnecessary: unnecessary,
        Correct: correct,
        Rearrange: rearrange
    }

    function urgent(item) {
        if (!items.includes(item)) {
            items.unshift(item);
        }
    }

    function unnecessary(item) {
        let index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
        }
    }

    function correct(oldItem, newItem) {
        let index = items.indexOf(oldItem);
        if (index !== -1) {
            items[index] = newItem;
        }
    }

    function rearrange(item) {
        let index = items.indexOf(item);
        if (index !== -1) {
            items.splice(index, 1);
            items.push(item);
        }
    }

    for (const commandLine of input) {
        if (commandLine === "Go Shopping!") {
            break;
        }
        const tokens = commandLine.split(" ");
        const command = tokens.shift();
        commandParser[command](...tokens);
    }

    console.log(items.join(", "));

}

solve(
    ["Tomatoes!Potatoes!Bread",
        "Unnecessary Milk",
        "Urgent Tomatoes",
        "Go Shopping!"]
);

solve(
    ["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"]
);

solve(
    ["Tomatoes!Potatoes!Bread",
        "Urgent Apple",
        "Urgent Potatoes",
        "Unnecessary Tomatoes ",
        "Unnecessary Onion ",
        "Correct Bread White-Bread",
        "Correct Bread Sugar",
        "Rearrange Potatoes",
        "Rearrange Onion",
        "Go Shopping!"]
);