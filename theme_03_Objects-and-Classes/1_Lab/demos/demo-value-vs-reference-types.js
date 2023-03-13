//=============== value types ===============

let num = 3;

function printNum (myNum) {
    myNum = 5;
    console.log(myNum);
}

printNum(num); //5
console.log(num); //3


//=============== reference types ===============

let arr = [1,2,3,4,5];

//Impure function -> function mutates data outside of its scope
function printArr (myArr) {
    myArr.push(100);
    console.log(myArr);
}

printArr(arr); //[1,2,3,4,5,100]
console.log(arr); //[1,2,3,4,5,100]