// Exercise 1
var processValue = function (value) {
    if (typeof value === 'string') {
        var newString = '';
        for (var index = value.length - 1; index >= 0; index--) {
            newString += value[index];
        }
        return newString;
    }
    var currency = value / 100;
    return currency.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
};
console.log(processValue("hello"));
console.log(processValue(500000));
// Exercise 2 
var reducer = function (total, number) {
    if (typeof number === 'number') {
        return total + number;
    }
    return total;
};
var sumNumbersInArray = function (arr) {
    return arr.reduce(reducer, 0);
};
console.log(sumNumbersInArray([5, 'hello', 10, 'whats up']));
var introduceAdvancedUser = function (user) {
    return "Hello, ".concat(user.name, ". You are ").concat(user.age, " years old. ").concat(user.address ? "You live in " + user.address : "");
};
var user = { name: 'Asher', age: 24, address: 'Jerusalem' };
console.log(introduceAdvancedUser(user));
// Exercise 4 
var welcomeUser = function (name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name);
    }
    return "Hello ".concat(name);
};
console.log(welcomeUser('Asher', 'Whats up'));
