
// Exercise 1 
// function compareToTen(num) {
//     return new Promise((res, rej) => {
//         res(num <= 10);
//         rej(num > 10);
//     })
// }

// // promise should reject 
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// Exercise 2 

// const promise = new Promise((res) => {
//     setTimeout(()=>res('success'), 4 * 1000);
// })

// let message = promise.then(result => console.log(result));


// Exercise 3 

let promise1 = new Promise((res, rej) => {
    res(3);
});

let promise2 = new Promise((res, rej) => {
    rej('Boo!');
})

promise1.then(result => console.log(result));
promise2.then(result => console.log(result))
.catch(res => console.log(res));