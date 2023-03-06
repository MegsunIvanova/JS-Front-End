let str = "I am JavaScript developer";
let sub = str.substring(5, 10);
console.log(sub); // Expected output: JavaS


let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration.";
while (text.includes('bg')) {
    text = text.replace(".bg", ".com");
}
console.log(text);// Expected output: Hello, john@softuni.com, you have been using john@softuni.com in your registration.


// split(separator)
let textToSplit = "I love fruits";
console.log(textToSplit.split(" ")); //// Expected output: ['I', 'love', 'fruits']