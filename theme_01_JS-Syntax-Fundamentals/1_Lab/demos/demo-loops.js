// for-of loop -> like foreach in java
let otherArray = [4, 5, 6];
let array = [1, 2, 3, ...otherArray];

for (const num of array) {
    console.log(num);
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

