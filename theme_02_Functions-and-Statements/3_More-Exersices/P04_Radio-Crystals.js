function makeRadioCrystals([target, ...chunks]) {

    let removingOperations = [cut, lap, grind, etch];

    for (let index = 0; index < chunks.length; index++) {
        let currentChunk = chunks[index];
        console.log(`Processing chunk ${currentChunk} microns`);
        let currentOperation = { name: "", count: 0 };

        while (currentChunk - target >= 1) {
            let operation = getRemoveOperation(currentChunk);
            if (currentOperation.name === "") {
                currentOperation.name = operation.name;
            } else if (currentOperation.name !== operation.name) {
                currentChunk = finishPreviousOperation(currentOperation, currentChunk);
                currentOperation.name = operation.name;
                currentOperation.count = 0;
            }

            currentChunk = operation(currentChunk);
            currentOperation.count++;
        }

        if (currentOperation.name !== "") {
            currentChunk = finishPreviousOperation(currentOperation, currentChunk);
        }
        
        if (currentChunk - target === -1) {
            currentChunk = xRay(currentChunk);
            console.log("X-ray x1")
        }
        console.log(`Finished crystal ${currentChunk} microns`);

    }

    function finishPreviousOperation(operation, chunk) {
        console.log(`${formatName(operation.name)} x${operation.count}`);
        chunk = transportingAndWashing(chunk);
        console.log("Transporting and washing");
        return chunk;
    }

    function formatName(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function getRemoveOperation(chunk) {
        return removingOperations
            .filter((f) => f(chunk) >= target - 1)
            .reduce((result, currentFunction) => {
                return result(chunk) < currentFunction(chunk) ? result : chunk;
            });
    }

    function cut(chunk) {
        return chunk / 4;
    }

    function lap(chunk) {
        return chunk * 0.80;
    }

    function grind(chunk) {
        return chunk - 20;
    }

    function etch(chunk) {
        return chunk - 2;
    }

    function xRay(chunk) {
        return chunk + 1;
    }

    function transportingAndWashing(chunk) {
        return Math.floor(chunk);
    }

}

// makeRadioCrystals([1375, 50000]);
// makeRadioCrystals([1000, 4000, 8100]);
makeRadioCrystals([1375, 1374]);