
// Exercise 1
// part 1 

// const people = ["Greg", "Mary", "Devon", "James"];

// people.shift();

// people.splice(2,1, 'Jason');

// people.push('Asher');

// console.log(people.indexOf('Mary'));

// console.log(people.slice(1, -1));

// console.log(people.indexOf('Foo')); // Gets -1 because it's not found

// let last = people[people.length - 1];

// console.log(last);

// Part 2 : Loops 

// for (let person of people){
//     console.log(person);
// }

// for (let person of people){
//     console.log(person);
//     if (person == 'Devon'){
//         break;
//     }
// }

// Exercise 2 

// let colors = ['Orange', 'Red', 'Blue', 'Purple', 'Yellow'];
// let suffixes = ['st', 'nd', 'rd', 'th'];
// for (let i = 0; i < colors.length; i++) {
//     let suffix;
//     switch(i){
//         case 0:
//         case 1:
//         case 2:
//             suffix = suffixes[i];
//             break;
//         default:
//             suffix = suffixes[3];
//             break;
//     }
//     console.log(`${colors[i]} is my ${i + 1}${suffix} choice`);
// }

// Exercise 3 
// let input;
// do {
//     input = prompt("enter a number");
// }while(Number(input) < 10);

// Exercise 4 

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);

// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);

// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);

// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1])


// // Exercise 5 

// let family = {
//     familyName : 'Fried',
//     members : 2,
//     city : 'Jerusalem'
// }

// for (let key in family){
//     console.log(key)
// }

// for (let key in family){
//     console.log(family[key])
// }


// Exercise 6 

// let sentence = "";
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'reindeer'
// }

// for (key in details) {
//     sentence += `${key} ${details[key]} `
// }
// console.log(sentence)


// Exercise 7 

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secretName = "";
names.sort();
for( let letter of names){
    secretName += letter[0];
}
console.log(secretName)