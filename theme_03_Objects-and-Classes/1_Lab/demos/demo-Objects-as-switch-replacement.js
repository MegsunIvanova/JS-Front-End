let count = 5;
// switch (command) {
//     case 'increment':
//         count++;
//         break;
//     case 'decrement':
//         count--;
//         break;
//     case 'reset':
//         count = 0;
//         break;
// }

let commandParser = {
    increment: (count) => ++count,
    decrement: (count) => --count,
    reset: () => 0
}

count = commandParser.increment(count);
console.log (count);
count = commandParser.decrement(count);
console.log (count);
count = commandParser.reset(count);
console.log (count);
