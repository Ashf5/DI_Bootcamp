
import axios from 'axios';

export async function getRandomJoke() {
    try{
        let url = 'https://official-joke-api.appspot.com/random_joke';
        let response = await axios.get(url);
        let joke = `Joke: ${response.data.setup} ${response.data.punchline}`;
        console.log(joke);
    }catch(err) {
        console.log(err);
        
    }
}