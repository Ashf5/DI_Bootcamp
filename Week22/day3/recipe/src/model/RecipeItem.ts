
import {v4} from 'uuid';

class Recipe {
    id:string = v4();
    isFavorite = false;
    constructor(public title: string, public ingredients: string[], public instructions:string[]) {
        
    }
    
}

export default Recipe;