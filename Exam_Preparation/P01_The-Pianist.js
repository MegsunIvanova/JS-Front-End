function thePianist(input) {
    let number = input.splice(0, 1)[0];
    let piecesLines = input.splice(0, number);
    let commandsLines = input;

    let pieces = piecesLines
        .reduce((data, line) => {
            let [pieceName, composer, key] = line.split("|");
            data[pieceName] = { name: pieceName, composer, key };
            return data;
        }, {});

    const parser = {
        add(pieceName, composer, key) {
            if (pieces.hasOwnProperty(pieceName)) {
                return `${pieceName} is already in the collection!`;
            }

            pieces[pieceName] = { name: pieceName, composer, key };
            return `${pieceName} by ${composer} in ${key} added to the collection!`
        },

        remove(pieceName) {
            if (pieces.hasOwnProperty(pieceName)) {
                delete pieces[pieceName];
                return `Successfully removed ${pieceName}!`;
            }

            return `Invalid operation! ${pieceName} does not exist in the collection.`;
        },

        changeKey(pieceName, newKey) {
            if (pieces.hasOwnProperty(pieceName)) {
                pieces[pieceName].key = newKey;
                return `Changed the key of ${pieceName} to ${newKey}!`;
            }

            return `Invalid operation! ${pieceName} does not exist in the collection.`;
        },

        stop() {
            return Object.values(pieces)
                .map(piece => `${piece.name} -> Composer: ${piece.composer}, Key: ${piece.key}`)
                .join("\r\n");
        }
    }

    commandsLines.forEach(line => {
        let command = line.split("|").splice(0, 1)[0];
        command = command.charAt(0).toLowerCase() + command.slice(1);
        let tokens = line.split("|").slice(1);
        console.log(parser[command](...tokens));
    });

}

thePianist(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]

);