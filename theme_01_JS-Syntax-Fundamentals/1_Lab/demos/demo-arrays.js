// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let first = numbers[0];
// let last = numbers[numbers.length -1];
// console.log(first);
// console.log(last);

//won't throw exception
let nonExistent = numbers[-1];
console.log(nonExistent);

// destructuring syntax
let array = [1, 2, 3];
let [first, second, third] = array;
console.log(first); //let first = array[0];
console.log(second); //let first = array[1];
console.log(third); //let first = array[2];


// Rest operator
let numbers = [1, 2, 3, [4, 5, 6]]; //forth element is array
console.log(numbers);

let numbers2 = [1, 2, 3, ...[4, 5, 6]]; //forth element is array but operator '...' will unpack it 
console.log(numbers2);


// when we don't know number of parameters -> like varargs in Java
function solve(name, ...otherParams) {
    console.log(name);
    console.log(otherParams);
}

solve('Kiro', 'test', 'test2', 3);


// for printing we can use .join
let numbers3 = [1, 2, 3, 4, 5];
let output = numbers.join(' ');
console.log(output);


// matrix
let matrix = [[1, 2, 3], [5, 6, 7], [8, 9], [11, 12, 13]];
console.table(matrix);

// pop -> give and delete last element
// shift -> give and delete first element
let numbers4 = [1, 2, 3, 4, 5];
let last = numbers4.pop;
let firstt = numbers4.shift;
console.log(last);
console.log(firstt);

console.log(numbers4);


// unshift -> add element in beginning
let numbers5 = [1, 2, 3, 4, 5];
numbers5.unshift(0);
console.log(numbers5);

numbers5.unshift(...[-2, -1]);
console.log(numbers5);


// push -> add element in end
let numbers6 = [1, 2, 3, 4, 5];
numbers6.push(6);
console.log(numbers6);


// splice ->  give copy of part (slice) of array and modify array, last index is not included
// slice -> give copy with part(slice) of array, last index is not included
let numbers7 = [1, 2, 3, 4, 5];
let mySlice = numbers7.slice(1, 3);
console.log(mySlice);
console.log(numbers7);
let deletedItems = numbers.splice(0, 2);

console.log(deletedItems);
console.log(numbers7);

// will delete elements and replase it with newone
let numbers8 = [1, 2, 3, 4, 5];
let toInsert = [-1, 0];
let deletedItems2 = numbers.splice(0, 2..toInsert);
console.log(deletedItems);
console.log(deletedItems);
console.log(numbers);


//.includes()
console.log(numbers8.includes(3, 4));

// iteration of arr
numbers
    .forEach((num) => {
        console.log(num);
    });

let transformed = numbers
    .map((num) => num * 2);
console.log(transformed);

let even = numbers
    .filter((num) => num % 2 === 0);
console.log(even);

// Mutator Methods (that change the array):
// splice, sort

// Accessor Methods (don't change the array):
// slice, includes, indexOf

// Iterator Methods (receive a callback):
// forEach, map, filter