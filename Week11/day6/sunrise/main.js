
let submit = document.getElementById('submitButton');
submit.addEventListener('click', getSunrise);

async function getSunrise(e) {
    e.preventDefault();
    let url = 'https://api.sunrise-sunset.org/json?';
    let data;
    try {
        let form = document.forms[0];
        // Check if any inputs are empty
        let inputs = form.querySelectorAll('input[type="text"]');
        if (Array.from(inputs).some(item => item.value.trim() === '')) {
            
            throw new Error('Empty form field');
        }

        // Fetch data
        let firstCity = fetch(`${url}lat=${form.lat1.value}&lng=${form.lon1.value}`);
        let secondCity = fetch(`${url}lat=${form.lat2.value}&lng=${form.lon2.value}`);
        data = await Promise.all([firstCity, secondCity]);
    }catch(err) {
        console.log(err);
        alert(err);
        return;
        
    }
    
    try {
        // Get the json and display to the page.
        let cities = await Promise.all(data.map(item => item.json()));
        displaySunrise(cities[0]);
        displaySunrise(cities[1]);
    }catch(err) {
        console.log(err);
        alert(err);
    }

}


function displaySunrise(data) {
    let div = document.getElementById('sunrise_div');
    let h3 = document.createElement('h3');
    h3.innerText = data.results.sunrise;
    div.appendChild(h3);
}