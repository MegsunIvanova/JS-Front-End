function pianist(input) {
    let n = input.shift();
    //{piece: {compositor, key}}
    let piecesCollection = {};
    let commandParser = {
        "Add": addPiece,
        "Remove": removePiece,
        "ChangeKey": changeKey
    };

    for (let index = 0; index < n; index++) {
        const [piece, composer, key] = input.shift().split("|");
        piecesCollection[piece] = { composer, key };
    }

    // console.log(piecesCollection)

    for (const inputLine of input) {
        if (inputLine === "Stop") {
            break;
        }

        let commandLineTokens = inputLine.split("|");
        let command = commandLineTokens[0];
        commandParser[command](...commandLineTokens.slice(1));
    }

    function addPiece(piece, composer, key) {
        if (!piecesCollection.hasOwnProperty(piece)) {
            piecesCollection[piece] = { name: piece, composer, key };
            console.log(`${piece} by ${composer} in ${key} added to the collection!`)
        } else {
            console.log(`${piece} is already in the collection!`);
        }
    }

    function removePiece(piece) {
        if (piecesCollection.hasOwnProperty(piece)) {
            delete piecesCollection[piece];
            console.log(`Successfully removed ${piece}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey(piece, newKey) {
        if (piecesCollection.hasOwnProperty(piece)) {
            piecesCollection[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    for (const piece in piecesCollection) {
        const { key, composer } = piecesCollection[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`)
    }

}

pianist(
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