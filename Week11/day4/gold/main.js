
// Exercise 1 

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(arr => console.log(arr)).catch(err => console.log(err));

// promise.all waits for all to resolve then returns all the results in an array. If any are rejected it returns an error.

// Exercise 2 

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

// Will return [2, 4, 6]