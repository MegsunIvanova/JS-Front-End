function solve(input) {
    let items = (input.shift()).split("!");
    let commandLines = input.splice(0, input.length - 2);

    let commandParser = {
        Urgent: function (item) {
            if (!items.includes(item)) {
                items.unshift(item);
            }
        },

        Unnecessary: function (item) {
            let index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
            }
        },

        Correct: function (oldItem, newItem) {
            let index = items.indexOf(oldItem);
            if (index !== -1) {
                items[index] = newItem;
            }
        },

        Rearrange: function (item) {
            let index = items.indexOf(item);
            if (index !== -1) {
                items.splice(index, 1);
                items.push(item);
            }
        }
    }

    for (const commandLine of commandLines) {
        [command, ...arguments] = commandLine.split(" ");
        commandParser[command](...arguments);
    }

    return items.join(", ");

}

console.log(solve(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]));
