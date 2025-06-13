
let currentPokemon = 1;

let buttons = document.querySelectorAll('button');
Array.from(buttons).map(button => button.addEventListener('click', buttonEvent));


async function getPokemon(id=randomNumber()) {
    try{
        let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        let data = await fetch(url)
        if (! data.ok) {
            throw new Error('Error fetching the data: ' + data);
        }
        let jsonData = await data.json();
        return jsonData;
    }catch(err) {
        return err;
    }
    
    
}

let randomNumber =  () => Math.floor(Math.random() * 1025) + 1;

function parsePokemonJson(jsonData) {
    let pokemonObj;
    try{
        pokemonObj = {
            id: jsonData.id,
            name: jsonData.name,
            weight: jsonData.weight,
            height: jsonData.height,
            type: jsonData.types[0].type.name,
            picture: jsonData.sprites.front_default,
        }
    }catch(err) {
        return err;
    }
    return pokemonObj;
}

async function buttonEvent(e) {

    // See which button was called and get appropriate pokemon.
    addLoading()
    let jsonData;
    if (e.target.id === 'random_button') {
        jsonData = await getPokemon();
    }else if (e.target.id === 'previous_button') {
        if (currentPokemon < 2) {
            console.log('already at 1');
            jsonData = await getPokemon(1);
        }else {
            jsonData = await getPokemon(currentPokemon - 1);
        }
    } else {
        if (currentPokemon < 0) {
            console.log('Error, fetching the first');
            jsonData = await getPokemon(1);
            currentPokemon = 1;
        }else {
            jsonData = await getPokemon(currentPokemon + 1);
        }
    }

    // call the parse pokemon and make sure there's no errors
    let pokemonObj = parsePokemonJson(jsonData);

    if (pokemonObj instanceof Error) {
        alert(pokemonObj);
        removeLoading();
        return;
    }
    // update currentpokemon 
    if (pokemonObj.id != currentPokemon) {
        currentPokemon = pokemonObj.id;
    }
    displayOnScreen(pokemonObj);

}

function displayOnScreen(pokemonObj) {
    let infoScreen = document.getElementById('info_screen');
    infoScreen.innerHTML = `<h3>${pokemonObj.name}</h3><p>Pokemon #${pokemonObj.id}<br>Height: ${pokemonObj.height}cm<br>Weight: ${pokemonObj.weight}gr<br>Type: ${pokemonObj.type}</p>`;

    let pictureScreen = document.getElementById('picture_screen');
    pictureScreen.innerHTML = '';
    let img = document.createElement('img');
    img.src = pokemonObj.picture;
    pictureScreen.appendChild(img);
    removeLoading();
}


// Add a loader to the middle
function addLoading()  {
    let middleDiv = document.getElementById('middle');
    
    let span = document.createElement('span');

    span.classList.add('loader');
    middleDiv.appendChild(span);
}

function removeLoading() {
    let middleDiv = document.getElementById('middle');
    middleDiv.innerHTML = '';
}