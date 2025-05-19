
// exercise 1

// let landscape = function() {

//  let result = "";


//  let flat = x => {
//     for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }

//  let mountain = x => {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++){
//      result = result + "'"
//    }
//    result = result + "\\"
//  }

//  flat(4);
//  mountain(4);
//  flat(4)

//  return result;
// }

// console.log(landscape());



// exercise 2 

// const addTo = x => y => x + y;
// const addToTen = addTo(10);
// console.log(addToTen(3));

// will return 13 first call outer function with 10 and returns the inner function with a reference to the 10. Then the inner function was called with 3.



// exercise 3 

// const curriedSum = (a) => (b) => a + b
// let sum = curriedSum(30)(1)
// console.log(sum);

// It will be 31, double parentheses first calls outer with 30 and then inner is returned whick is called with a argument of 1


// exercise 4 

// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// let sum = add5(12)
// console.log(sum);

// will be 17 similiar to exercise 2


// exercise 5 

// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// let sum = compose(add1, add5)(10)
// console.log(sum);


// output will be 16, compose takes in two functions, one adds 5 one adds one, then calls one on the other