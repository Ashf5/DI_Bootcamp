
// Exercise 1 

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// The code unpacks the person object and logs out the information


// Exercise 2 

// function displayStudentInfo(objUser){
//     //destructuring
//     let {first, last} = objUser;
//     console.log(`Your full name is ${first} ${last}`);
    
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'})


// Exercise 3 

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// let arrayUsers = Object.entries(users);
// console.log(arrayUsers);

// arrayUsers.forEach((item, index, arr) => arr[index][1] *= 2);
// console.log(arrayUsers);


// Exercise 4 



// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);

// will be type object



// Exercise 5 

// option 2 correctly extends the Dog constructor 



// Exercise 6 

// two lists with the same content are not equal
// You can't compare two sets of curly brackets that way, it gets a syntax error 


const object1 = { number: 5 }; // string, it's being used as a key
const object2 = object1; // object pointing at object1
const object3 = object2; // also pointing at object1
const object4 = { number: 5}; // new object

object1.number = 4;  // changes all the numbers (besides for object4) to 4
console.log(object2.number)  // 4
console.log(object3.number) // 4
console.log(object4.number) // 5


class Animal{
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(animalSound) {
        return `The ${this.color} ${this.type} ${this.name}, says ${animalSound}`;
    }
}

let farmerCow = new Mammal('lily', 'cow', 'brown');
console.log(farmerCow.sound('moooo'));