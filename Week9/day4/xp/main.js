
// Exercise 1 

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// colors.forEach((item, index) => console.log(`${index + 1}# choice is ${item}`));

// let violet = colors.some(item => item === 'Violet');
// violet ? console.log('Yeah') : console.log('No...');


// Exercise 2 

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// colors.forEach((item, index) => {
//     let ord = index === 0 ? ordinal[1] : index === 1 ? ordinal[2] : index === 2 ? ordinal[3] : ordinal[0];
//     console.log(`${index + 1}${ord} choice is ${item}`);

// })


// Exercise 3 


// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// // will spread out the two arrays inside the result array


// const country = "USA";
// console.log([...country]);

// // will spread out the letters into an array


// let newArray = [...[,,]];
// console.log(newArray);

// // spreads out into two undefined's 


// exercise 4 

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
// { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
// { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
// { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
// { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
// { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
// { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

// let greetings = users.map(user => 'Hello ' + user.firstName);
// console.log(greetings);

// let filtered = users.filter(user => user.role === 'Full Stack Resident');
// console.log(filtered);

// let filteredBonus = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName);
// console.log(filteredBonus);


// Exercise 5 

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let reduced = epic.reduce((str, item) => str + ` ${item}`);
// console.log(reduced);



// Exercise 6 

const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];

let passed = students.filter(student => student.isPassed);
console.log(passed);
