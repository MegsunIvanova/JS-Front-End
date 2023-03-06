function carWash(commands) {
    let value = 0;

    for (const command of commands) {
        applyCommand(command);
    }

    return `The car is ${value.toFixed(2)}% clean.`

    function applyCommand(command) {
        switch (command) {
            case "soap":
                return value += 10.00;
            case "water":
                return value *= 1.20;
            case "vacuum cleaner":
                return value *= 1.25;
            case "mud":
                return value *= 0.90;
        }
    }
}

console.log(
    carWash(
        ['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']
    )
);

console.log(
    carWash(
        ["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]
    )
);