function solve (name, age) {
    let output = `My name is: ${name} and my age is: ${age}`;
    console.log (output);
}

solve ("Kiril", 24);



// .toFixed(2) ще закръгли числото до 2ри знак след дес.запетая, връща стринг
function solve (grate) {
    console.log(grate.toFixed(2)); 
}

solve (5.25555554);


let min = Number.MIN_SAFE_INTEGER;
let max = Number.MAX_SAFE_INTEGER;


