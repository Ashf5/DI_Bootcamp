
let button = document.getElementById('get_info_button');
button.addEventListener('click', findSomeone);

async function findSomeone(e) {
    // Delete any data that may be there 
    clearScreen();
    // Display the loading icon 
    loading();
    // Get a random number 1 to 83 to query the api
    let randomNum = Math.floor(Math.random() * 83) + 1;
    let url = `https://www.swapi.tech/api/people/${randomNum}`;
    let characterJson;
    try{
        let characterData = await fetch(url);
        if (! characterData.ok){
            throw new Error('Error occured While fetching data')
        }
        characterJson = await characterData.json();
        
    }catch(err) {
        displayError(err);
        return;
    }

    let characterObj = await returnData(characterJson);
    clearScreen();
    displayData(characterObj);
    

}

// Takes the character json and returns the character data in an obj
async function returnData(jsonObj) {
    try{
        let properties = jsonObj.result.properties;
        let name = properties.name;
        let height = properties.height;
        let gender = properties.gender;
        let birthdate = properties.birth_year;
        let homePlanet = await getHomePlanet(jsonObj);
        return {name, height, gender, birthdate, homePlanet};
    }catch(err) {
        displayError(new Error('Didn\'t receive proper data'));
    }
    
}

// This function takes in the character json and returns the home planet
async function getHomePlanet(jsonObj) {
    try{
        let url = jsonObj.result.properties.homeworld;
        let homeResults = await fetch(url);
        if (! homeResults.ok) {
            throw new Error('Error getting planet')
        }
        let homeResultsJson = await homeResults.json();
        return homeResultsJson.result.properties.name;
        
    }catch (err) {
        displayError(err);
    }
}

function displayData(characterData) {
    let div = document.getElementById('info_div');

    let h1 = document.createElement('h1');
    h1.innerText = characterData.name;

    let heightElement = document.createElement('h4');
    heightElement.innerText = `Height: ${characterData.height}`;

    let genderElement = document.createElement('h4');
    genderElement.innerText = `Gender: ${characterData.gender}`;

    let birthDateElement = document.createElement('h4');
    birthDateElement.innerText = `Born: ${characterData.birthdate}`;

    let homePlanetElement = document.createElement('h4');
    homePlanetElement.innerText = `Home Planet: ${characterData.homePlanet}`;

    div.append(h1, heightElement, genderElement, birthDateElement, homePlanetElement)
}

function clearScreen() {
    let div = document.getElementById('info_div');
    div.innerHTML = '';

}

function loading() {
    let div = document.getElementById('info_div')
    let iElement = document.createElement('i');
    iElement.classList.add('fa-solid', 'fa-spinner', 'fa-spin-pulse', 'spinner');
    div.appendChild(iElement);
}


function displayError(err) {
    console.log(err);
    clearScreen();
    let div = document.getElementById('info_div');
    div.innerHTML = '<h3>Oh No! That person isnt available</h3>';

}