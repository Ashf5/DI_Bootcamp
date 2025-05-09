
// Exercise 1 


// let num = Math.floor(Math.random() * 100) + 1;
// for (let i = 0; i <= num; i++) {
//     console.log(i);
// }


// exercise 2

// function capitalize(sentence) {
//     let string1 = '';
//     let string2 = '';

//     for (let i = 0; i < sentence.length; i++) {
//         if (i % 2 == 0) {
//             string1 += sentence[i].toUpperCase();
//             string2 += sentence[i].toLowerCase();
//         }else {
//             string2 += sentence[i].toUpperCase();
//             string1 += sentence[i].toLowerCase();
//         }
//     }
//     return [string1, string2];
// }

// console.log(capitalize('abcdef'));


// exercise 3 

// function isPalindrome(word) {
//     let reverse = '';
//     for (let letter = word.length - 1; letter >=0; letter--) {
//         reverse += word[letter];
//     }
//     if (reverse === word) {
//         return true;
//     }
//     return false;
// }
// console.log(isPalindrome('madam'));


// exercise 4 

// function biggestNumberInArray(arrayNumber) {
//     let highest = 0;
//     for (let number of arrayNumber) {
//         if (number > highest) {
//             highest = number;
//         }
//     }
//     return highest;
// }

// console.log(biggestNumberInArray([]));


// exercise 5 

// function unique(li) {
//     let newLi = []
//     for (let num of li) {
//         if (!(newLi.includes(num))) {
//             newLi.push(num);
//         }
//     }
//     return newLi;
// }

// console.log(unique([1,2,3,3,3,4,5]));


// Exercise 6 

function createCalendar(year, month) {
    // create table headers 
    let calendarDiv = document.createElement('div');
    let table = document.createElement('table');
    calendarDiv.appendChild(table);
    table.innerHTML = '<thead><tr><th>SU</th><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th></tr></thead><tbody></tbody>';

    document.body.appendChild(calendarDiv);

    let tbody = table.getElementsByTagName('tbody')[0];

    let date = new Date(year, month - 1, 1);
    let day = date.getDay();

    let days = []
    let newElement;
    // make the days until the month starts
    for (let i = 0; i < day; i++) {
        newElement = document.createElement('td');
        newElement.innerText = '.';
        days.push(newElement)
    }

    // make the days of the month
    let count = 1
    while(date.getMonth() === month - 1) {

        // Create new td elements
        newElement = document.createElement('td');
        newElement.innerText = `${count}`;
        days.push(newElement);

        // Move to next day and up count
        date.setDate(date.getDate() + 1);
        count += 1
    }

    // make the days until the end of the week
    while (date.getDay() !== 0) {
        // Create new td elements
        newElement = document.createElement('td');
        newElement.innerText = '.';
        days.push(newElement);

        // Move to next day and up count
        date.setDate(date.getDate() + 1);
    }

    // Add to table 
    let row;
    for (let i = 0; i < days.length; i++) {
        if (i % 7 === 0) {
            if (i != 0) {
                tbody.appendChild(row);
            }
            row = document.createElement('tr');
        }
        row.appendChild(days[i]);
        
    }
    tbody.appendChild(row)
    table.style.border = '2px solid black';
    
}

createCalendar(2025, 4);