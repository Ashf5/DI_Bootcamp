
type User = {
 type: 'user';
 name: string;
 age: number;
};

type Product = {
 type: 'product';
 id: number;
 price: number;
};

type Order = {
 type: 'order';
 orderId: string;
 amount: number;
};

const handleData = (listData: (User | Product | Order)[]) => {
    for (let obj of listData) {
        if (obj.type === 'user') {
            console.log(`Hello ${obj.name}, you are ${obj.age} years old`);
        }else if (obj.type === 'product') {
            console.log(`Product ID: ${obj.id} | Price: ${obj.price}`);
        }else {
            console.log(`Order ID: ${obj.orderId} | Amount: ${obj.amount}`);
        }
    }
}

const testData:  (User | Product | Order)[] = [
  { type: "user", name: "Alice", age: 28 },
  { type: "product", id: 101, price: 19.99 },
  { type: "order", orderId: "ORD123", amount: 250 },
  { type: "user", name: "Bob", age: 35 },
  { type: "product", id: 202, price: 49.5 },
  { type: "order", orderId: "ORD456", amount: 1200 }
];

handleData(testData);