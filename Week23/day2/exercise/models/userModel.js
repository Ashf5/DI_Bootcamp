

// use a list instead of database, just for project.
let users = [];

export const createUserDB = async (username, email, password) => {
    if (!username || !email || !password) {
        let err =  new Error('Missing user data');
        err.code = 1000;
        throw err;
    }
    if (users.some(user => user.username === username)) {
        let err =  new Error('Username already exists');
        err.code = 1001;
        throw err;
    }
    let newUser = {username, email, password};
    users.push(newUser);
    return {username, email};
}

export const fetchUserDB = async (username) => {
    let user = users.find(user => user.username === username);
    if (!user) {
        let err = new Error("user not found");
        err.code = 404;
        throw err;
    } 
    return user;
}
