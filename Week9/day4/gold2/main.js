
// Exercise 1 

let arr = [1,2,3,4,5];
let sum = arr.reduce((total, current) => total + current);
console.log(sum);


// Exercise 2 

let arr2 = [1,2,2,4,6,6];
unique = []
arr2.forEach(value => !(unique.includes(value)) ? unique.push(value) : 0);
console.log(unique);


// Exercise 3 

function removeSome(arr) {
    let nonDesirables = [null, 0, "", false, undefined, NaN];
    return arr.filter(value => !(nonDesirables.includes(value)));
}

let sample = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let cleaned = removeSome(sample);
console.log(cleaned);


// Exercise 4 

function repeat(str, num) {
    return str.repeat(num);
}

console.log(repeat('Ha!',3));

// Exercise 5 

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

rabbit = ' '.repeat(7) + rabbit;
turtle = ' '.repeat(7) + turtle;

console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.trim().padEnd(9, '=');

console.log(startLine);
console.log(turtle);
console.log(rabbit);