import RecipeManager from "./model/RecipeCollection";
import Recipe from "./model/RecipeItem";
import Template from "./templates/RecipeTemplate";

// Create new manager and load from storage
const manager: RecipeManager = new RecipeManager;
manager.load();

// Create the template and render to the screen
const template: Template = new Template(manager);
template.render();

const submitButton:HTMLInputElement = document.getElementById('submit-button') as HTMLInputElement;


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target as HTMLInputElement;
    let title = target.form?.titleEntry.value as string;
    let ingredients = target.form?.ingredients.value as string;
    let instructions = target.form?.instructions.value as string;

    if(!title || !ingredients || !instructions) {
        return;
    }

    
    let ingredientsList = ingredients.split('\n')
    let instructionsList = instructions.split('\n');


    let recipe = new Recipe(title, ingredientsList,instructionsList)
    manager.add(recipe)
    template.render();

})


// functionality for the clear button
document.getElementById('clearRecipesButton')?.addEventListener('click', () => {
    localStorage.removeItem('recipes');
    manager.recipes = [];
    template.render();
})