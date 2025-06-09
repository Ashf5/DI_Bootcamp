
const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Exercise 1 

// async function getGifs(url) {
//     try {
//         let resp = await fetch(url);
//         let json = await resp.json();
//         console.log(json);
//     } catch (err) {
//         console.log(err);

//     }
// }

// getGifs(url);


// Exercise 2 

// async function getSun() {
//     let url = 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
//     try{
//         let resp = await fetch(url);
//         let json = await resp.json();
//         console.log(json);

//     }catch(err) {
//         console.log(err);

//     }
// }
// getSun()


// Exercise 3 

// async function improved() {
//     try {
//         let response = await fetch("https://www.swapi.tech/api/starships/9/");
//         if (response.ok) {
//             let json = await response.json();
//             console.log(json.result);

//         } else {
//             throw new Error('Request didn\'t work');
//         }
//     } catch (err) {
//         console.log(err);

//     }

// }

// improved()


// Exercise 4 \
// analyze 


function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Will log calling then after 2 seconds log resolved.