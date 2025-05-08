
let input = prompt("Enter a few words seperated by commas");
let words = input.split(',');

//find longest string and strip the whitespace
let longest = 0;
for (let word of words) {
    word = word.trim();
    if (word.length > longest) {
        longest = word.length;
    }
}
console.log('*'.repeat(longest + 4));

let temp;
for (let word of words) {
    temp = word.trim();
    console.log(`* ${temp}${" ".repeat(longest - temp.length)} *`);
}

console.log('*'.repeat(longest + 4));
