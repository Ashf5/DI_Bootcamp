
import axios from 'axios';


export async function fetchPosts() {
    try{
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let response = await axios.get(url);
        return response.data;
    }catch(err) {
        console.log(err);
        console.log('Error fetching data from jsonplaceholder');
        return undefined;
        
    }
}
