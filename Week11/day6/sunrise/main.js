
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

        let firstCity = fetch(`${url}lat=${form.lat1.value}&lng=${form.lon1.value}`);
        let secondCity = fetch(`${url}lat=${form.lat2.value}&lng=${form.lon2.value}`);
        data = await Promise.all([firstCity, secondCity]);
    }catch(err) {
        console.log(err);
        alert(err);
        return;
        
    }
    
    try {
        let cityOneJson = await data[0].json();
        let cityTwoJson = await data[1].json();
        displaySunrise(cityOneJson);
        displaySunrise(cityTwoJson);
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