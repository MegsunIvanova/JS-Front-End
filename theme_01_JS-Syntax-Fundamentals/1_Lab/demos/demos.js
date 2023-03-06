let num = 1;
let name = "Kiril";
//ще направи конкатенация *не е добра практика
let output = name + num;
console.log(output);

let arr = [];
let obj = {};
let isLoading = true;

// за да видим типа на променливата
console.log(typeof num);
console.log(typeof obj);
console.log(typeof isLoading);


// ** e оператор за степен
let step = 2;
let number = 3;
console.log(number ** step);


// == сравнява стойността, а === сравнява стойността и типа,
// затова е препоръчително да се ползва ===


// аналогично != сравнява стойността, а !== сравнява стойността и типа,
// затова е препоръчително да се ползва !==

let first = 1;
let second = '1';
if (first === second) {
    console.log('Equal!')
}

if (first !== second) {
    console.log('Not Equal!')
}


// за да проверим дали first e между 5 и 20  [5, 20]
if (5 <= first && first <= 20) {
    console.log('Between five and twenty!')
}

// тернарен оператор
let outputT = 5 <= first && first <= 20
    ? 'In Between'
    : 'Not In Between';


// if else
if (5 <= first && first <= 20) {
    console.log('Between five and twenty!');
} else {
    console.log('Not In Between');
}


// switch-case
let name2 = 'Kiro';
switch (name2) {
    case 'Kiro':
        console.log('The right name');
        break;
    default:
        console.log('Default');
}

// ако искаме да проверим дали променливата е декларарирана:
let name3;
if (name3) {
    console.log("Declared");
}

// the following values are considered FALSY -> false, 0, -0, "", null, undefined, NaN
// the following values are considered TRUTHY -> === undefined, === null. === true, === false, === 0
let age = 0;
if (age) {
    console.log(age);
}

// for-loop
for (let i = 0; i < 10; index++) {
    console.log(i);
    
}

