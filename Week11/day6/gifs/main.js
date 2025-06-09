
let submitButton = document.getElementById('search');
submitButton.addEventListener('click', getGif);

let deleteButton = document.getElementById('delete_all');
deleteButton.addEventListener('click', deleteAll);

async function getGif(e) {
    e.preventDefault();
    try {
        let query = document.forms[0].query.value;
        document.forms[0].query.value = '';
        // if empty input throw error
        if (query === '') {
            throw new Error('You cannot enter empty query')
        }

        let url = `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=${query}&limit=1`
        let response = await fetch(url);
        // if not good response throw error
        if (response.ok) {
            let json = await response.json()
            let parsedGif = parseGif(json);
            if (parsedGif) {
                addGifToPage(parsedGif);
            } else {
                throw new Error('Error with the received data');
            }
        } else {
            throw new Error('error fetching data')
        }
    } catch (err) {
        console.log(err);

    }

}

// Takes in the json and returns the url of the gif
function parseGif(jsonObj) {
    try {
        let url = jsonObj.data[0].images.original.url;
        return url;
    } catch (err) {
        return false;
    }
}

function addGifToPage(url) {
    let root = document.getElementById('gif_section');
    let div = document.createElement('div');
    // Todo add class to style 
    let img = document.createElement('img');
    img.src = url;

    let button = document.createElement('button');
    button.innerText = 'Delete';
    button.addEventListener('click', deleteSelf);
    div.append(img, button);
    root.appendChild(div);
    
}

function deleteSelf(e) {
    let parent = e.target.parentElement.parentElement;
    parent.removeChild(e.target.parentElement);
}

function deleteAll(e) {
    let div = document.getElementById('gif_section');
    div.innerHTML = '';
}