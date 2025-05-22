
// Exercise 1 

// const menu = [
//   {
//     type : "starter",
//     name : "Houmous with Pita"
//   },
//   {
//     type : "starter",
//     name : "Vegetable Soup with Houmous peas"
//   },
//   {
//     type : "dessert",
//     name : "Chocolate Cake"
//   }
// ] 

// let exists = menu.some(item => item.type === 'dessert' ? true : false);
// console.log(exists);

// let all = menu.every(item => item.type === 'starter' ? true : false);
// console.log(all);

// exists = menu.some(item => item.type === 'main' ? true : false);

// if (!(exists)) {
//     menu.push({type: 'main', name: 'Cowboy Steak'});
// }

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ];


// let vegan = name => vegetarian.some(item => name.toLowerCase().includes(item));


// menu.forEach((item, i, arr) => vegan(item.name) ? arr[i].vegetarian = true : arr[i].vegetarian = false);

// console.log(menu);


// exercise 2 

function stringChop(str, len){
    let chopped = []
    for (let i=0; i<str.length; i++) {
        chopped.push(str.slice(i, i+len));
        i += len - 1;
    }
    return chopped;
}

console.log(stringChop('developers',2)); 


// Exercise 3 

function findWord(sentence, query) {
    let split = sentence.split(' ');
    let count = split.filter(word => word === query).length;
    return ` The word ${query} was found ${count} times`;
}

console.log(findWord('The quick brown fox fox', 'fox')); 


// exercise 4 

function reverseArray(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[arr.length - i - 1];
        
        arr[arr.length - i - 1] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));
