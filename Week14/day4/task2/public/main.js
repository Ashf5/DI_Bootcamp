
document.getElementById('registerSubmit').addEventListener('click', handleRegister);

function handleRegister(e) {
    e.preventDefault();
    let form = document.forms.registerForm;

    let obj = {
        firstName: form.fname.value,
        lastName: form.lname.value,
        email: form.email.value,
        username: form.username.value,
        password: form.password.value
    }

    if (!obj.firstName || !obj.lastName || !obj.email || !obj.username || !obj.password) {
        return;
    }


    fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(data => createdData(data.status))


}

function createdData(status) {
    
    if (status === 201) {
        
        document.getElementById('message').innerHTML = '<h3>Hello, Your account is now created!</h3>';
        let inputs = document.getElementsByTagName('input');
        Array.from(inputs).forEach(input => input.value = '');
    } else if (status === 400) {
        document.getElementById('message').innerHTML = '<h3>Username already exists</h3>';
    } else {
        document.getElementById('message').innerHTML = '<h3>Error registering users</h3>';
    }
}