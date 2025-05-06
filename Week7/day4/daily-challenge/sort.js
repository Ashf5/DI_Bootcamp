
const numbers = [5,0,9,1,7,4,2,6,3,8];
// let numberString = numbers.toString();
// let plusString = numbers.join('+');
// console.log(numberString);
// console.log(plusString);


// Sort 
for (let i=0; i < numbers.length; i++) {
    for (let j=i; j < numbers.length; j++) {
        if (numbers[j] > numbers[j+1]) {
            let temp = numbers[j+1];
            numbers[j+1] = numbers[j];
            numbers[j] = temp;
        }
    }
}

console.log(numbers)