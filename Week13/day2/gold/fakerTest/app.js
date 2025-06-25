
import { faker } from '@faker-js/faker';


let users = [];

function populateArray(arr) {
    for (let i=0; i < 10; i++) {
        let name = faker.person.fullName();
        let city = faker.location.city();
        let street = faker.location.streetAddress();

        users.push({name, city, street});
    }
    console.log(users);
    
}

populateArray(users);