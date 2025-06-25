
import axios from 'axios';

export async function fetchDataAxios(url) {
    try{
        let response = await axios.get(url);
        
        response.data.forEach(post => console.log(post.title));
    }catch(err) {
        console.log(err);
        
    }
    
}

