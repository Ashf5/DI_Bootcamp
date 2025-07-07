
import fs from 'fs/promises';


export async function registerUserData(firstName, lastName, email, username, password) {
    let users = await fs.readFile('./models/users.json', 'utf-8');
    users = JSON.parse(users);
    let id = users[users.length - 1] ? users[users.length - 1].id + 1 : 0;
    const newUser = { id, firstName, lastName, email, username, password };
    users.push(newUser);
    await fs.writeFile('./models/users.json', JSON.stringify(users));
    return newUser;
}

export async function getUsersData() {
    let users = await fs.readFile('./models/users.json', 'utf-8');
    users = JSON.parse(users);
    return users;
}

export async function getUserData(id) {
    let users = await fs.readFile('./models/users.json', 'utf-8');
    users = JSON.parse(users);
    const user = users.find(user => user.id === id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
}


export async function updateUserData(id, firstName, lastName, email, username, password) {
    let users = await fs.readFile('./models/users.json', 'utf-8');
    users = JSON.parse(users);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        throw new Error('User not found');
    }
    users[userIndex] = { id, firstName, lastName, email, username, password };
    await fs.writeFile('./models/users.json', JSON.stringify(users));
    return users[userIndex];
}
