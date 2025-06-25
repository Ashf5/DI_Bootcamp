

function findNumbers(str) {
    let nums = str.match(/[0-9]+/g);
    console.log(nums.join(''));
    
}

// findNumbers('k5k3q2g5z6x9bn');


function validateName(fullName) {
    let pattern = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
    let validName = pattern.test(fullName);
    let response = validName ? "You're name is valid" : "Please enter a real name";
    console.log(response);
    
}

validateName('Asher Fried')