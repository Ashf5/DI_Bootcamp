
document.getElementById('loginSubmit').addEventListener('click', handleLogin);

function handleLogin(e) {
    e.preventDefault();
    let form = document.forms.loginForm;
    let username = form.username.value;
    let password = form.password.value;
    if (!password || !username) {
        return;
    }

    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    }).then(loginData => login(loginData));
}


function login(loginData) {
    if (loginData.status === 404) {
        displayMessage('user not found');
        return;
    }else if (loginData.status === 401) {
        displayMessage('incorrect password');
        return;
    }else if (loginData.status === 500) {
        displayMessage('error logging in');
        return;
    }
    loginData.json().then(json => displayMessage(`Welcome back ${json.user.username}`));
    
}

function displayMessage(msg) {
    document.getElementById('message').innerHTML = `<h3>${msg}</h3>`;
}