
// Exercise 1 

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

let sum = 0;
for (let item of data) {
  sum += item.age * 7;
}
console.log(sum);

let sum2 = data.reduce((total, item) => total + (item.age * 7), 0);

console.log(sum2);



// Exercise 2 

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
let newEmail = userEmail3.trim();
console.log(newEmail);


// Exercise 3 

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }];

let newObj = {};
users.forEach(item => newObj[`${item.firstName} ${item.lastName}`] = item.role);
console.log(newObj);

// Exercise 4 

const letters = ['x', 'y', 'z', 'z'];
const obj = {}

for (let letter of letters) {
  letter in obj ? obj[letter] += 1 : obj[letter] = 1;
}

console.log(obj);

let reduceObj = {};
letters.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return reduceObj;
}, reduceObj);


console.log(reduceObj);

