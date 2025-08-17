
// Exercise 1 

let greeting = 'Hello, World!';
console.log(greeting);


// Exercise 2 

let age: number = 5;
let name:string = 'Asher';

console.log(age, name);


// Exercise 3 
let id: number|string;
id = 10;
console.log(id);


// Exercise 4
const isPositive = (num:number):string => {
    if(num > 0) {
        return 'Positive';
    }else if (num < 0) {
        return 'Negative';
    }
    return 'Zero'
}

console.log(isPositive(0));


// Exercise 5 

const getDetails = (name:string, age:number): [string, number, string] => {
    return [name, age, `Hello ${name}! You are ${age} years old`]
}

const details = getDetails("Alice", 25);
console.log(details); 


// Exercise 6 

type Person = {
    name: string;
    age: number;
}

const createPerson = (name:string, age:number):Person => {
    return {name, age};
}

let person = createPerson('Asher', 24);
console.log(person);

// Exercise 7

let inputElement = document.getElementById('inputElement') as HTMLInputElement;
inputElement.value = 'Some cool input';


// Exercise 8

const getAction = (role:string):string => {
    switch(role) {
        case 'admin':
            return 'Manage users and settings';
        case 'editor':
            return 'Edit content';
        case 'viewer':
            return 'View content';
        case 'guest':
            return 'Limited access';
        default:
            return 'Invalid role';
    }
}

console.log(getAction("admin")); // Output: Manage users and settings
console.log(getAction("editor")); // Output: Edit content
console.log(getAction("viewer")); // Output: View content
console.log(getAction("guest")); // Output: Limited access
console.log(getAction("unknown")); // Output: Invalid role


// Exercise 9

function greet():string;
function greet(name:string):string;

function greet(name?:string):string {
    if (name) {
        return `Hello ${name}`;
    }
    return 'Hello there stranger';
}

console.log(greet("Alice")); 
console.log(greet());      