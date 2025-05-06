
// Exercise 1 

let person1 = {
    fullName : 'Asher',
    weight: 70,
    height: 1.7,
    mass : function () {
        return (this.height * this.height) / this.weight
    }
        
};

let person2 = {
    fullName : 'Moshe',
    weight: 80,
    height: 1.6,
    mass : function () {
        return (this.height * this.height) / this.weight
    }
        
};

function compare(person1, person2) {
    if (person1.mass() > person2.mass()) {
        return person1.fullName;
    } else {
        return person2.fullName;
    }
}
console.log(compare(person1, person2))


// Exercise 2 

function average(list) {
    let sum = 0;
    for (let num of list) {
        sum += num
    }
    return sum / list.length;
}

function passing (list) {
    let grade = average(list);
    if (grade >= 65) {
        console.log('You passed!');
    } else {
        console.log("you didn't pass.");
    }
}

passing([6, 89, 9]);