function armies(input) {
    let leadersArmiesMap = {};
    let armyNamesLeadersMap = {};

    for (const line of input) {
        commandParser(line);
    }

    let leadersTotalCountMap = {};

    Object.keys(leadersArmiesMap).forEach((leader) => {
        let armiesCount = leadersArmiesMap[leader].reduce((totalCount, currentArmy) => {
            totalCount += currentArmy.armyCount;
            return totalCount;
        }, 0);
        leadersTotalCountMap[leader] = armiesCount;
    });

    Object.entries(leadersTotalCountMap)
        .sort((entryA, entryB) => entryB[1] - entryA[1])
        .forEach(([leader, totalCount]) => {
            console.log(`${leader}: ${totalCount}`);
            leadersArmiesMap[leader]
                .sort((armyA, armyB) => armyB.armyCount - armyA.armyCount)
                .forEach((army) => console.log(`>>> ${army.armyName} - ${army.armyCount}`));
        });

    function commandParser(line) {
        if (line.endsWith(" arrives")) {
            let leader = line.slice(0, line.indexOf(" arrives"));
            return leaderArrives(leader);

        } else if (line.includes(": ")) {
            let [leader, armyProperties] = line.split(": ");
            let [armyName, armyCount] = armyProperties.split(", ");
            armyCount = Number(armyCount);
            return addArmyToLeader(leader, armyName, armyCount);

        } else if (line.includes(" + ")) {
            let [armyName, countToAdd] = line.split(" + ");
            countToAdd = Number(countToAdd);
            return addCountToArmies(armyName, countToAdd)

        } else if (line.endsWith(" defeated")) {
            let leader = line.slice(0, line.indexOf(" defeated"));
            return leaderDefeated(leader);
        }
    }

    function leaderArrives(leader) {
        leadersArmiesMap[leader] = [];
    }

    function addArmyToLeader(leader, armyName, armyCount) {
        if (leadersArmiesMap.hasOwnProperty(leader)) {
            let army = { armyName, armyCount };
            leadersArmiesMap[leader].push(army);

            if (!armyNamesLeadersMap.hasOwnProperty(armyName)) {
                armyNamesLeadersMap[armyName] = [];
            }
            armyNamesLeadersMap[armyName].push(leader);
        }
    }

    function addCountToArmies(armyName, countToAdd) {
        if (armyNamesLeadersMap.hasOwnProperty(armyName)) {
            let leaders = armyNamesLeadersMap[armyName];

            leaders.forEach(leader => {
                leadersArmiesMap[leader]
                    .filter((army) => army.armyName === armyName)
                    .forEach((army) => army.armyCount += countToAdd)
            });
        }
    }

    function leaderDefeated(leader) {
        if (leadersArmiesMap.hasOwnProperty(leader)) {
            let armies = leadersArmiesMap[leader];
            armies
                .map((army) => army.armyName)
                .forEach(armyName => {
                    let leadersArr = armyNamesLeadersMap[armyName];
                    let index = leadersArr.indexOf(leader);
                    leadersArr.splice(index, 1);
                });

            delete leadersArmiesMap[leader];
        }
    }
}

armies(
    ['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']
);