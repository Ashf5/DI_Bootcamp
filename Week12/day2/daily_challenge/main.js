
getSupportedCurrencies();
let convertButton = document.getElementById('convertButton');
convertButton.addEventListener('click', convertCurrency);

async function getSupportedCurrencies() {
    try {
        let url = 'https://v6.exchangerate-api.com/v6/089d7c4d93837409c5391d1e/codes';
        let currencyData = await fetch(url);
        if (!currencyData.ok) {
            throw new Error('Error Fetching Currency data.')
        }
        let currencyJsonData = await currencyData.json();
        addCurrencySelect(currencyJsonData.supported_codes);
    } catch (err) {
        showError(err);
    }
}

function addCurrencySelect(currencies) {
    try {
        let from = document.getElementById('from_field');
        let to = document.getElementById('to_field');
        currencies.forEach(currency => {
            let option = document.createElement('option');
            option.value = currency[0];
            option.innerText = `${currency[0]} ${currency[1]}`;
            let cloneOption = option.cloneNode(true);
            from.appendChild(option);
            to.appendChild(cloneOption);
        });
    }catch(err) {
        showError(err)
        
    }
    
}

function getCurrencyFormFields() {
    try {
        let currencyForm = document.forms[0];
        let currencyFormData = new FormData(currencyForm);
        
        let formValues = [];
        currencyFormData.entries().forEach(item => {
            
            if (item[1].trim() === ''){
                throw new Error('Didn\'t receive proper form data');
            }
            formValues.push(item[1]);
        })
        if (formValues[2] < 1) {
            throw new Error('You must enter a positive number')
        }
        return formValues;
    }catch(err) {
        return err;
    }
    
}

async function convertCurrency(e) {
    e.preventDefault();
    let formValues = getCurrencyFormFields();
    // Check if any fields are empty
    if (formValues instanceof Error) {
        showError(formValues)
        return
    }
    showLoading()
    
    let exchange = await getExchangeRate(...formValues);
    if (exchange instanceof Error) {
        showError(exchange);
    }
    endLoading();
    displayCoverted(...exchange);
    
}



async function getExchangeRate(exchangeFrom, exchangeTo, amount) {
    try{
        let url = `https://v6.exchangerate-api.com/v6/089d7c4d93837409c5391d1e/pair/${exchangeFrom}/${exchangeTo}/${amount}`;
        let conversionData = await fetch(url);
        if (! conversionData.ok) {
            throw new Error('Error fetching conversion data from api.')
        }
        let conversionDataJson = await conversionData.json();
        let conversionAmount = conversionDataJson.conversion_result;

        return [exchangeTo, conversionAmount];
        

    }catch(err) {
        return err;
    }
    
}

// Displays the converted currency to the screen
function displayCoverted(currency, amount) {
    let div = document.getElementById('display_converted');
    // if anything there, remove 
    div.innerHTML = '';
    let p = document.createElement('p');
    p.innerText = `${amount} ${currency}`;
    p.classList.add('converted')
    div.appendChild(p);
}


// Shows a loading display
function showLoading() {
    let div = document.getElementById('overlay');
    overlay.classList.add('disabled')

    let loader = document.createElement('span');
    loader.classList.add('loader');
    div.appendChild(loader)
}

// Gets rid of the loading display
function endLoading() {
    let div = document.getElementById('overlay');
    div.classList.remove('disabled');
    div.innerHTML = '';
}


// Takes in an error object and displays on screen
function showError(err) {
    let mainDiv = document.getElementById('main_section');
    mainDiv.innerHTML = `<h1>Whoops, that's an error. ${err}`;
    console.log(err);
}
