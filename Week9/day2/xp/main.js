
// Exercise 1 

// 1.1
// a = 3

// 1.2 
// a const is the same thing

// 2 
// first 0 and then after function call it's 5.

// if were declared with a const then you'd get an error when you reassign

// 3
// makes a global variable and ouput will be hello

// 4
// output will be test because it's the closest scope 

// still test 


// 5 
// in the if block gets 5 and out it gets 2 
// this is because it was redeclared in the if showing it's a different variable 


// exercise 2 

// function winBattle(){
//     return true;
// }

// winBattle = () => true;

// let experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);


// exercise 3 

// let isString = (string) => typeof string === 'string' ? true : false;

// console.log(isString(0))
// console.log(isString('hello'))


// exercise 4 

// let getSum = (x,y) => x + y;

// console.log(getSum(5,6));


// exercise 5 

// declaration 

// function getGram(kilo) {
//     return kilo * 1000;
// }

// console.log(getGram(9));

// // expression
// // difference is this isn't hoisted so you can't call before declared.
// let getGram2 = function (kilo) {
//     return kilo * 1000;
// }

// console.log(getGram2(9));

// let getGram3 = kilo => kilo * 1000;

// console.log(getGram3(9));


// exercise 6 

// (function (numChildren, partner, location, title){
//     let p = document.createElement('p');
//     p.innerText = `You will be a ${title} in ${location}, and married to ${partner} with ${numChildren} kids`;

//     let div = document.getElementById('exercise-6');
//     div.appendChild(p);
// })(5, 'Yael', 'Jerusalem', 'Engineer');


// exercise 7 

// (function (user) {
//     let nav = document.getElementById('navbarList');
//     let li = document.createElement('li');
//     li.innerText = `hello ${user}`;
//     nav.appendChild(li);

// })('asher');


// exercise 8 

function makeJuice(size) {
    let ingredients = [];
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        let str = ''
        for (let item of ingredients) {
            str += item + ', ';
        }
        str = str.slice(0, -2);

        let p = document.createElement('p');
        p.innerText = `The client wants a ${size} juice, containing ${str}`;

        let div = document.getElementById('exercise-8');
        div.appendChild(p);
    }
    addIngredients('apples', 'carrots', 'mango');
    addIngredients('cherries', 'blueberries', 'coconuts');
    displayJuice();
}

makeJuice('medium');
