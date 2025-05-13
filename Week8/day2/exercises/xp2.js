

let myForm = document.forms.MyForm;

let radiusInput = myForm.radius;


radiusInput.addEventListener('input', submit);

function calculate(radius) {
    

    // make sure not blank 
    if (radius.trim() === '') {
        return
    }

    let sphereVolume = (4/3) * Math.PI * Math.pow(radius, 3);
    return sphereVolume

}

function submit (event) {
    event.preventDefault();
    
    let radius = myForm.radius.value;
    let sphereVolume = calculate(radius)
    
    if (sphereVolume === undefined){
        myForm.volume.value = 0;
    }else {
        myForm.volume.value = sphereVolume;
    }
    
}