let numbers = [31, 2, 432, 32, 5, -1];
let names = ['Kiro', 'Asq', 'Pesho', "Gosho"];

let sortedAsc = [...numbers].sort((aNum, bNum) => {
    let result = aNum - bNum;
    console.log(`First ${aNum} Second: ${bNum} Result ${result}`);
    return result;
});

let sortedDesc = [...numbers].sort((aNum, bNum) => {
    let result = bNum - aNum;
    console.log(`First ${aNum} Second: ${bNum} Result ${result}`);
    return result;
});


let sortedNamesAsc = [...names].sort((aName, bName) => {
    let result = aName.localeCompare(bName);
    return result;
});

let sortedNamesDesc = [...names].sort((aName, bName) => {
    let result = bName.localeCompare(aName);
    return result;
});

console.log(numbers);
console.log(sortedAsc);
console.log(sortedDesc); 

console.log(names); 
console.log (sortedNamesAsc);
console.log (sortedNamesDesc);