
import {people} from './data.js';

function averageAge(people) {
    let totalAge = people.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
    let avg = totalAge / people.length;
    console.log(avg);
}

averageAge(people);