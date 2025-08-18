

// Exercise 1 

interface User {
    name:string;
    email:string
}

interface Admin {
    adminLevel:number;
}

type AdminUser = Admin & User;

const getProperty = (user:AdminUser, property:string) => {
    if (property in user) return user[property];
    return undefined;
}


const adminUser: AdminUser = {
  name: "Alice",
  email: "alice@example.com",
  adminLevel: 3,
};


console.log(getProperty(adminUser, "name"));       
console.log(getProperty(adminUser, "foo"));        



// Exercise 2 

function castToType<T>(value: any, converter: (val:any) => T):T {
    return converter(value);
}

console.log(castToType<number>("123", Number));


// Exercise 3 

function getArrayLength<T extends string | number>(li:T[]):number {
    return li.length as number;
}

console.log(getArrayLength([1, 2, 3]));


// Exercise 4 

interface StorageBox<T> {
    add(i:T):void;
    get(i:number):T;
}

class Box<T> implements StorageBox<T> {
    arr:T[] = [];

    add(item:T) {
        this.arr.push(item);
    }

    get(index:number) {
        return this.arr[index]
    }
}


// Exercise 5 


interface Item<T> {
    value: T;
}

class Queue<T> {
    collection: T[] = [];

    add(i:T) {
        this.collection.push(i);
    }

    remove() {
        this.collection.pop()
    }
}

let queue = new Queue<number>;
queue.add(5)
queue.add(10)
queue.remove()
console.log(queue)
queue.add(8)