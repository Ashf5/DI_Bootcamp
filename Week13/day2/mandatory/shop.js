let products = require('./products');

function search(itemName) {
    let foundItem = undefined;
    for (let item of products) {
        if (item.name === itemName) {
            foundItem = item;
            break;
        }
    }
    return foundItem;
}

console.log(search('Iphone'));
console.log(search('Adidas Ultraboost'));