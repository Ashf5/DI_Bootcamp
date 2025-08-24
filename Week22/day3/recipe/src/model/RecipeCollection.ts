
import Recipe from "./RecipeItem";

class RecipeManager {
    recipes:Recipe[] = [];

    add(recipe:Recipe) {
        this.recipes.push(recipe);
        this.save();
    }

    remove(id:string):void {
        let index:number = this.recipes.findIndex(item => item.id === id);
        this.recipes.splice(index, 1)
        this.save();
    }

    toggleFavorite(id:string):void {
        let index:number = this.recipes.findIndex(item => item.id === id);
        this.recipes[index].isFavorite = !this.recipes[index].isFavorite;
    }

    save() {
        let stringData:string = JSON.stringify(this.recipes);
        localStorage.setItem("recipes", stringData);
    }

    load() {
        let stringData = localStorage.getItem("recipes");
        if (stringData) {
            let jsonData = JSON.parse(stringData)  as Recipe[];
            this.recipes = [...jsonData];
        }
    }
}

export default RecipeManager;