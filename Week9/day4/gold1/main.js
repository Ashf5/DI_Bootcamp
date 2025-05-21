
// Exercise 1 

// [1, 2, 3].map(num => {
//   if (typeof num === 'number') return num * 2;
//   return ;
// });

// since all type numbers it will return an array of all the numbers doubled


// Exercise 2 

// [[0, 1], [2, 3]].reduce(
//   (acc, cur) => {
//     return acc.concat(cur);
//   },
//   [1, 2],
// );

// it will join the array given (after the function with the array of arrays) all into one array


// Exercise 3 

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     console.log(num, i);
//     alert(num);
//     return num * 2;
// })

// i is the index of the item


// Exercise 4 

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
let flattened = array.flat(2);
console.log(flattened);


const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
let flatGreeting = greeting.flat()
console.log(flatGreeting);

let greetingString = flatGreeting.join(' ');
console.log(greetingString);


const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
let untrap = trapped.flat(30);
console.log(untrap);
