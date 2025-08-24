import type RecipeManager from "../model/RecipeCollection";
import Recipe from "../model/RecipeItem";



class Template {
    private container: HTMLElement;
    constructor(private collection: RecipeManager) {
        this.container = document.getElementById('recipeContainer') as HTMLElement;
    }

    render() {
        // loop through all recipes, create cards and append to container
        this.container.innerHTML = '';
        for (let element of this.collection.recipes) {
            this.container.appendChild(this.createCard(element));
        }
        this.setOnClick()

    }

    // sets the onclick event listeners and takes care of toggling and deleting
    private setOnClick() {
        this.container.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (target.innerText === 'Delete') {
                let id = target.parentElement?.id;
                if(id) this.collection.remove(id);
                this.render()
            }else if (target.innerText === 'Remove Favorite' || target.innerText === 'Add Favorite') {
                let id = target.parentElement?.id;
                if(id) this.collection.toggleFavorite(id);
                this.render()
            }
        })
    }


    createCard({ id, title, ingredients, instructions, isFavorite }: Recipe): HTMLDivElement {
        let div = document.createElement('div');
        div.setAttribute('id', id);
        div.innerHTML = `<h1>${title}</h1>
            <h3>Ingredients:</h3>
            <ul>${this.addLi(ingredients)}</ul>
            <h3>Instructions</h3>
            <ul>${this.addLi(instructions)}</ul>
            <button>${isFavorite ? 'Remove Favorite' : 'Add Favorite'}</button><button>Delete</button>`
        return div;
    }

    addLi(list:string[]) {
        let newString = '';
        for(let item of list) {
            newString += `<li>${item}</li>`
        }
        return newString
    }
}

export default Template;