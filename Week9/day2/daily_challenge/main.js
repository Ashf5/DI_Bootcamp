
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let displayGroceries = obj => obj.fruits.forEach(fruit => console.log(fruit));


displayGroceries(groceries);


let cloneGroceries = () => {
    let user = client;
    client = 'Betty';
    console.log(user);
    // doesn't change, passed by value

    let shopping = groceries;
    groceries.totalPrice = '35$';
    console.log(shopping.totalPrice);
    // changes because passed by reference 

    groceries.paid = false;
    console.log(shopping.paid);
    // also passed by reference 
    
    
    
}

cloneGroceries()