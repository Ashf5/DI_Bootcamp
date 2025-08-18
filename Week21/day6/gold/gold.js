// Exercise 1 
var getProperty = function (user, property) {
    if (property in user)
        return user[property];
    return undefined;
};
var adminUser = {
    name: "Alice",
    email: "alice@example.com",
    adminLevel: 3,
};
console.log(getProperty(adminUser, "name"));
console.log(getProperty(adminUser, "foo"));
// Exercise 2 
function castToType(value, converter) {
    return converter(value);
}
console.log(castToType("123", Number));
// Exercise 3 
function getArrayLength(li) {
    return li.length;
}
console.log(getArrayLength([1, 2, 3]));
var Box = /** @class */ (function () {
    function Box() {
        this.arr = [];
    }
    Box.prototype.add = function (item) {
        this.arr.push(item);
    };
    Box.prototype.get = function (index) {
        return this.arr[index];
    };
    return Box;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.collection = [];
    }
    Queue.prototype.add = function (i) {
        this.collection.push(i);
    };
    Queue.prototype.remove = function () {
        this.collection.pop();
    };
    return Queue;
}());
var queue = new Queue;
queue.add(5);
queue.add(10);
queue.remove();
console.log(queue);
queue.add(8);
