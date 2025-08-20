
// Exercise 1

const processValue = (value: string | number) => {
    if (typeof value === 'string') {
        let newString: string = '';
        for (let index = value.length -1; index >= 0; index--) {
            newString += value[index];
        }
        return newString;
    }
    let currency = value / 100;
    return currency.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });

}

console.log(processValue("hello"));
console.log(processValue(500000));


// Exercise 2 

const reducer = (total:number, number:number|string):number => {
    if (typeof number === 'number') {
        return total + number;
    }
    return total;
}

const sumNumbersInArray = (arr:(number|string)[]):number => {
    return arr.reduce<number>(reducer, 0);
}

console.log(sumNumbersInArray([5, 'hello', 10, 'whats up']))


// Exercise 3 


type AdvancedUser = {
    name:string;
    age:number;
    address?:string;
}

const introduceAdvancedUser = (user:AdvancedUser):string => {
    return `Hello, ${user.name}. You are ${user.age} years old. ${user.address ? "You live in " + user.address : ""}`
}

let user = {name:'Asher', age: 24, address: 'Jerusalem'}

console.log(introduceAdvancedUser(user))



// Exercise 4 

const welcomeUser = (name:string, greeting?:string):string => {
    if (greeting) {
        return `${greeting}, ${name}`
    }
    return `Hello ${name}`
}

console.log(welcomeUser('Asher', 'Whats up'))