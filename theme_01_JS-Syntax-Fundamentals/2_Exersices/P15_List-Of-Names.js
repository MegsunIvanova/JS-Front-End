function printAndSum(names) {
    console.log([...names]
        .sort((aName, bName) => aName.localeCompare(bName))
        .map((name, index) => `${index + 1}.${name}`)
        .join('\n'));
}

printAndSum(["John", "Bob", "Christina", "Ema"]);