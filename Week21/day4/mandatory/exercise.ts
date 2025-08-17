
// Exercise 1 

class Employee {

    constructor(private name:string, private salary:number, public position:string, protected department:string) {}

    getEmployeeInfo():string {
        return `${this.name} is a ${this.position}`;
    }

}

let employee:Employee = new Employee('Asher', 5000, 'CEO', 'Finance');
console.log(employee.getEmployeeInfo())


// Exercise 2

class Product {
    constructor(readonly id:number, public name:string, public price:number){}

    getProductInfo():string {
        return `Item: ${this.name}  |  Price ${this.price}`;
    }
}

let product:Product = new Product(1, 'IPhone', 1500);
console.log(product.getProductInfo())

//Causes an error, because it's read only;
// product.id = 5;


// Exercise 3 


class Animal {
    constructor(public name:string){}

    makeSound():string {
        return  'Animal makes a sound';
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }

    makeSound(): string {
        return `${this.name} goes Woof`
    }
}

let dog:Dog = new Dog('Spot');
console.log(dog.makeSound());


// Exercise 4 

class Calculator {
    static Add(num1:number, num2:number):number {
        return num1 + num2;
    }

    static Subtract(num1:number, num2:number): number {
        return num1 - num2;
    }
}

console.log(Calculator.Add(5, 5));
console.log(Calculator.Subtract(5,5));


// Exercise 5 

interface User {
    readonly id:number;
    name: string;
    email: string;

}

interface PremiumUser extends User {
    membershipLevel:string;
}

function printUserDetails(user:PremiumUser) {
    console.log(`Name: ${user.name} | Email: ${user.email} | Level: ${user.membershipLevel}`);
}

let user:PremiumUser = {id:1, name:'Asher', email: 'a@gmail.com', membershipLevel: 'Premium'};
printUserDetails(user);