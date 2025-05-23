
// Exercise 1 

// function printFullName({first, last}) {
//     return `Your full name is ${first} ${last}`;
    
// }

// let fullName = printFullName({first: 'Elie', last:'Schoppik'});
// console.log(fullName);


// Exercise 2 

// function keysAndValues(obj) {
//     let keys = Object.keys(obj);
//     keys.sort();
//     let values = []

//     keys.forEach(key => values.push(obj[key]));
//     return [keys, values];
    
// }

// let sortedArrays = keysAndValues({ b: 1, a: 2, c: 3 });
// console.log(sortedArrays);


// Exercise 3 

// class Counter {
//   constructor() {
//     this.count = 0;
//   }

//   increment() {
//     this.count++;
//   }
// }

// const counterOne = new Counter();
// counterOne.increment();
// counterOne.increment();

// const counterTwo = counterOne;
// counterTwo.increment();

// console.log(counterOne.count);

// the output will be 3 because the counterTwo points to the same object