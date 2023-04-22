function solve(input) {

    let horses = input.shift().split("|");

    let commandParser = {
        "Retake": retake,
        "Trouble": trouble,
        "Rage": rage,
        "Miracle": miracle,
        "Finish": finish
    }

    // console.log(input)
    for (const line of input) {
        let [command, ...tokens] = line.split(" ");
        commandParser[command](...tokens);
        // console.log("=====================")
        // console.log(line)
        // console.log(horses)
        if (command === "Finish") {
            break;
        }
    }

    function retake(overTakingHorse, overtakenHorse) {
        let overtakingIndex = horses.indexOf(overTakingHorse);
        let overtakenIndex = horses.indexOf(overtakenHorse);

        if (overtakenIndex > overtakingIndex) {
            horses[overtakenIndex] = overTakingHorse;
            horses[overtakingIndex] = overtakenHorse;
            console.log(`${overTakingHorse} retakes ${overtakenHorse}.`)
        }
    }

    function trouble(horseToDrop) {
        let index = horses.indexOf(horseToDrop);
        if (index > 0) {
            let nextHorse = horses[index - 1];
            horses[index] = nextHorse;
            horses[index - 1] = horseToDrop;
            console.log(`Trouble for ${horseToDrop} - drops one position.`)
        }

    }


    function rage(horseToRage) {
        let index = horses.indexOf(horseToRage);
        let newIndex = Math.min(horses.length - 1, index + 2);
        //???
        for (let i = index; i < newIndex; i++) {
            horses[i] = horses[i + 1];
        }

        horses[newIndex] = horseToRage;
        console.log(`${horseToRage} rages 2 positions ahead.`);

    }

    function miracle() {
        let horseToBecomeFirst = horses.shift();
        horses.push(horseToBecomeFirst);
        console.log(`What a miracle - ${horseToBecomeFirst} becomes first.`)

    }

    function finish() {
        console.log(horses.join("->"));
        console.log(`The winner is: ${horses[horses.length - 1]}`)
    }
}

// solve(['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish']);

// solve(['Onyx|Domino|Sugar|Fiona',
//     'Trouble Onyx',
//     'Retake Onyx Sugar',
//     'Rage Domino',
//     'Miracle',
//     'Finish'])


solve
(['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])


