
// get the form on submit 
let myFormSubmit = document.getElementById('lib-button');
myFormSubmit.addEventListener('click', handleForm);

function handleForm(event) {
    event.preventDefault();
    //TODO
    let myForm = document.forms.libform;
    let noun = myForm.noun.value;
    let adjective = myForm.adjective.value;
    let person = myForm.person.value;
    let verb = myForm.verb.value;
    let place = myForm.place.value;

    listItems = [noun, adjective, person, verb, place];
    for(item of listItems) {
        if (item === "") {
            alert('Fill out all required fields');
            return;
        }
    }
    let story = document.getElementById('story');
    story.innerHTML = `Once upon a time there was a <span class='noun'>${noun}</span> and his name was <span class='person'>${person}</span>. <span class='person'>${person}</span> loved to <span class="verb">${verb}</span>. He would <span class="verb">${verb}</span> all the way to <span class="place">${place}</span>. However because he was very <span class="adjective">${adjective}</span> he got sent right back to where he came from. The End...`
}