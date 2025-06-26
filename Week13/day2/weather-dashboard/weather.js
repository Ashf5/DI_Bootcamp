
import axios from 'axios';
import chalk from 'chalk';

export async function makeWeatherRequest(city) {
    let { lon, lat } = await getLonAndLat(city) || {lon:undefined, lat: undefined};
    try {
        if (!lon) {
            throw new Error('Error fetching city coordinates');
        }
    } catch (err) {
        console.log(err);
        return
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=6219341e8d17f566b9fd75cc37ea687b`;
    
    let weatherData;
    try{
        let response = await axios.get(url);
        weatherData = parseWeatherData(response.data, city);
        
    }catch(err) {
        console.log(err, 'Error fetching json data');
        return;
    }

    if (weatherData) {
        printWeather(weatherData)
    }else {
        console.log('Improper json returned from server');
        
    }
    

}


function parseWeatherData(weatherData, city) {
    try{
        let weather = weatherData.weather[0].main;
        let temp = weatherData.main.temp;
        return {city, weather, temp};
    }catch(err) {
        console.log(err);
        return undefined;
    }
}

function printWeather(weatherData) {
    console.log(chalk.blue(`City: ${weatherData.city}`));
    console.log(chalk.red(`Weather: ${weatherData.weather}`));
    console.log(chalk.green(`Temperature: ${weatherData.temp}`));
}


// function to get the longitude and latitude of a city, if it can't find it, it returns undefined.
async function getLonAndLat(city) {
    let response;
    try {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=6219341e8d17f566b9fd75cc37ea687b`;
        response = await axios.get(url);
    } catch (err) {
        console.log(err);
        return undefined;
    }

    // parse the json
    try {
        let lon = response.data[0].lon;
        let lat = response.data[0].lat;
        return { lon, lat };
    } catch (err) {
        console.log('Error parsing response');
        return undefined;
    }
}

