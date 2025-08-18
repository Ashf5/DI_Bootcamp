
// Exercise 1 

// type Person = {
//     name: string;
//     age: number;
// }

// type Address = {
//     street: string;
//     city: string;
// }

// type PersonWithAddress = Person & Address;

// let person: PersonWithAddress = {
//     name: 'Asher',
//     age: 25,
//     street: 'rothschild',
//     city: 'Tel Aviv'
// }


// Exercise 2

const describeValue = (value: number | string):string => {
    if(typeof value === 'number') return 'This is a number';
    return 'This is a string';
}

console.log(describeValue(43));
console.log(describeValue('hi'));


// Exercise 3 

let someValue: any = 'hello any';
let casted = (someValue as string);
console.log(casted.toUpperCase())


// Exercise 4 
// note: this is unsafe, because the first element may not be a string.
const getFirstElement = (li: (number|string)[]):string => {
    return li[0] as string;
}


// Exercise 5

const logLength = <T  extends {length:number}>(value:T) => {
    console.log(value.length);
}

logLength('Hello');


// Exercise 6 

type Person = {
    name: string;
    age: number;
}

type Job = {
    position: 'Developer' | 'Manager';
    department: string;
}

type Employee = Person & Job;

const describeEmployee = (employee: Employee):string => {
    if (employee.position === 'Manager') return `${employee.name} is a Manager in ${employee.department}. He is ${employee.age} years old`;
    return `${employee.name} is a Developer in ${employee.department}. He is ${employee.age} years old`;
}

let employee:Employee = {
    name: 'Asher',
    age: 24,
    position: 'Developer',
    department: 'R&D'
}
console.log(describeEmployee(employee));


// Exercise 7

const formatInput = <T extends {toString(): string}>(value:T) => {
    let strValue = value.toString();
    let formatted = strValue as string;
    return formatted;
}