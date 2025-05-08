
// Exercise 1 

// function displayNumbersDivisible(divisor=23) {
//     for(let i=0; i < 500; i++) {
//         if (i % divisor === 0) {
//             console.log(i);
//         }
//     }
// }

// displayNumbersDivisible()


// Exercise 2 

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ['banana', 'orange', 'apple'];

// function myBill() {
//     let total = 0;
//     for (item of shoppingList) {
//         // Check if in stock 
//         if (item in stock && stock[item] > 0) {
//             total += prices[item];
//             stock[item] -= 1;
//         } else {
//             console.log(`${item}s aren't in stock`);
//         }
//     }
//     return total
// }

// console.log(myBill())


// Exercise 3 

// function changeEnough(price, change) {
//     let total = 0;
//     for (let i=0; i < change.length; i++) {
//         switch (i) {
//             case 0:
//                 total += change[i] * .25;
//                 break;
//             case 1: 
//                 total += change[i] * .10;
//                 break;
//             case 2:
//                 total += change[i] * .05;
//                 break;
//             case 3:
//                 total += change[i] * .01;
//                 break
//         }
//     }
//     if (total >= price) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(changeEnough(0.75, [0,0,20,5]))


// Exercise 4

// function hotelCost() {
//     let number;
//     do {
//         number = prompt("How many nights do you want to stay?");
//     } while(isNaN(number))
//     return 140 * number;
// }

// function planeRideCost() {
//     let destination;
//     do {
//         destination = prompt("Where are you flying?")
//     }while(destination == "")
//     switch (destination.toLowerCase()){
//         case 'london': 
//             return 183;
//         case 'paris': 
//             return 220;
//     }
//     return 300;
// }

// function rentalCarCost (){
//     let number;
//     do {
//         number = prompt("How many days are you renting the car?");
//     } while(isNaN(number))
//     let price = number * 40;
//     if (number >= 10) {
//         price -= price * .05;
//     }
//     return price;
// }

// function totalVacationCost () {
//     let hotel = hotelCost();
//     let plane = planeRideCost();
//     let rental = rentalCarCost();
//     return hotel + plane + rental;
// }

// console.log(totalVacationCost());

// For exercise 5, see exercise2.js