let text = "Password must be between 6 and 10 characters Password must have at least 2 digits";
let regex = /\d+/g;
let reg = new RegExp(`${text}`, 'g');

let execution = regex.exec(text);
// while (execution !== null) {
//     let value = execution[0];
//     console.log (value);
//     execution = regex.exec(text);
// }

// console.log([...text.matchAll(regex)][0]);

console.log(regex.test(text));